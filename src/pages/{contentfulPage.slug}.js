import React from 'react'
import { Layout } from '../components/layout/layout.js'
import { RichText } from '../components/richText/richText.js'
import {graphql} from "gatsby"
/* import {documentToReactComponents} from '@contentful/rich-text-react-renderer' */

export default function ContentfulPage(props) {
  console.log(props);

  return (
    <Layout>
      {!!props.data.contentfulPage.content && (
        <RichText
            references={
                props.data.contentfulPage.content.references
            }
            raw={props.data.contentfulPage.content.raw}
        />
      )}
    </Layout>
  );
}

export const query = graphql`
query PageQuery($id: String) {
  contentfulPage(id: {eq: $id}) {
    content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          title
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        ... on ContentfulFeaturedContentLink {
          __typename
          contentful_id
          caseStudy {
            slug
            caseStudyTitle
            caseStudyDescription {
              caseStudyDescription
            }
          }
        }
        ... on ContentfulFeaturedContentSet {
          __typename
          contentful_id
          id
          title
          links {
            contentful_id
            __typename
            caseStudy {
              __typename
              caseStudyTitle
              slug
              caseStudyDescription {
                caseStudyDescription
              }
            }
          }
        }
      }
    }
  }
}
`
