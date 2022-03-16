import React from 'react';
import {Link} from 'gatsby'
import * as ContentStyles from './featuredContentLink.module.scss'


/*import './caseStudyLink.module.scss'; */

export const FeaturedContentLink = ({ title, description, url }) => {
  return (
    <div className={ContentStyles.contentStyle}>
        <Link to={url} className="featuredContent"><span className={ContentStyles.bold}>{title}:</span> {description}</Link>
    </div>
  )
}
