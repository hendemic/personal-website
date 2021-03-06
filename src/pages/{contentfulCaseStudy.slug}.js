import React from 'react'
import { Layout } from '../components/layout/layout.js'
import { RichText } from '../components/richText/richText.js'
import {graphql} from "gatsby"
import * as Styles from '../styles/contentPage.module.scss'


/* import {documentToReactComponents} from '@contentful/rich-text-react-renderer' */

export default function ContentfulCaseStudy(props) {
  console.log(props);

  return (
    <Layout>
    <div className={Styles.caseStudyWrapper}>
      <div className={Styles.caseStudySubHeading}>
        <span>Case Study: {props.data.contentfulCaseStudy.role}</span>
      </div>
      <h2>{props.data.contentfulCaseStudy.caseStudyTitle}</h2>
        {!!props.data.contentfulCaseStudy.caseStudyContent && (
          <RichText
              references={
                  props.data.contentfulCaseStudy.caseStudyContent.references
              }
              raw={props.data.contentfulCaseStudy.caseStudyContent.raw}
          />
        )}
    </div>
    </Layout>
  );
}

export const query = graphql`
query CaseStudyQuery($id: String) {
  contentfulCaseStudy(id: {eq: $id}) {
    caseStudyTitle
    caseStudyDescription {
      caseStudyDescription
    }
    caseStudyCategory
    role
    caseStudyContent {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          title
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
}
`
