import React from 'react';
import { FeaturedContentLink } from "../featuredContentLink/featuredContentLink.js"
import * as ListStyles from './featuredContentSet.module.scss'

export const FeaturedContentSet = ({ heading, caseStudies }) => {
  return (
    <div className={ListStyles.listStyle}>
      <h3>{heading}</h3>
      <ul>
        {caseStudies.map((listItem) =>
          <li key={listItem.caseStudy.id}>
          <span>
              <FeaturedContentLink
                title={listItem.caseStudy.caseStudyTitle}
                url={listItem.caseStudy.slug}
                description={listItem.caseStudy.caseStudyDescription.caseStudyDescription}
              />
          </span>
          </li>
        )}
      </ul>
    </div>
  )
}
