import React from 'react';
import {Link} from 'gatsby'
import * as ContentStyles from './featuredContentLink.module.scss'


/*import './caseStudyLink.module.scss'; */

export const FeaturedContentLink = ({ title, description, url }) => {
  return (
    <div className={ContentStyles.contentStyle}>
        <h5><Link to={url} className="featuredContent">{title}</Link></h5>
        <p>{description}</p>
    </div>
  )
}
