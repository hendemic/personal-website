import React from 'react';
import { FeaturedContentLink } from "../featuredContentLink/featuredContentLink.js"


export const FeaturedContentSet = ({ heading, caseStudies }) => {
  return (
    <div>
      <h3>{heading}</h3>
      {caseStudies.map((listItem) =>
        <div key={listItem.caseStudy.id}>
          <FeaturedContentLink
            title={listItem.caseStudy.caseStudyTitle}
            url={listItem.caseStudy.slug}
            description={listItem.caseStudy.caseStudyDescription.caseStudyDescription}
          />
        </div>
      )}
    </div>
  )
}
