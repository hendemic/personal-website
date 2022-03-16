import React from 'react'
import * as navStyles from './navbar.module.scss'
import {graphql, useStaticQuery, Link} from 'gatsby'


export const NavBar = ({ children }) => {
  const result = useStaticQuery(graphql`
    query MenuQuery {
      contentfulMenuNav {
        menuItems {
          id
          label
          page {
            slug
          }
        }
      }
    }
  `)

  return (
    <div className={navStyles.navmenu}>
      {result.contentfulMenuNav.menuItems.map((menuItem) =>
        <div key={menuItem.id}>
          <Link to={"../" + menuItem.page.slug}>{menuItem.label}</Link>
        </div>
      )}
    </div>
  )
}
