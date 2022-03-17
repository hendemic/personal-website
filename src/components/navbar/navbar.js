import React from 'react'
import * as navStyles from './navbar.module.scss'
import {graphql, useStaticQuery, Link} from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'



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
      <ul>
        <li>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div className={navStyles.darkButton}>
                <input
                  type="checkbox"
                  id="toggle"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />
                <label for="toggle"></label>
              </div>
            )}
          </ThemeToggler>
        </li>
          {result.contentfulMenuNav.menuItems.map((menuItem) =>
            <li key={menuItem.id}>
              <Link to={"../" + menuItem.page.slug}>{menuItem.label}</Link>
            </li>
          )}

      </ul>
    </div>
  )
}
