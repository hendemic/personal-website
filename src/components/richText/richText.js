import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { FeaturedContentLink } from "../featuredContentLink/featuredContentLink.js"
import { FeaturedContentSet } from "../featuredContentSet/featuredContentSet.js"

export const RichText = ({ raw, references = [] }) => {
    const referencesMap = {};
    references.forEach((reference) => {
        referencesMap[reference.contentful_id] = reference;
    });

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const data = referencesMap[node.data.target.sys.id];
                return (
                    <div>
                        <GatsbyImage
                            alt={data.title}
                            image={data.gatsbyImageData}
                        />
                    </div>
                );
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const data = referencesMap[node.data.target.sys.id];
                switch (data.__typename) {
                    case "ContentfulCaseStudyLink":
                        return (
                            <FeaturedContentLink
                              title={data.caseStudy.caseStudyTitle}
                              url={data.caseStudy.slug}
                              description={data.caseStudy.caseStudyDescription.caseStudyDescription}
                            />
                        );
                    case "ContentfulFeaturedContentSet":
                      return (
                        <FeaturedContentSet
                          heading={data.title}
                          caseStudies={data.links}
                        />
                      );
                    default:
                        return null;
                }
            },
        },
    };

    return (
        <div>{documentToReactComponents(JSON.parse(raw), options)}</div>
    );
};
