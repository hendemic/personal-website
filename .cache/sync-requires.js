
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/hendemic/Documents/GitHub/personal-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/hendemic/Documents/GitHub/personal-website/src/pages/404.js")),
  "component---src-pages-contentful-case-study-slug-js": preferDefault(require("/home/hendemic/Documents/GitHub/personal-website/src/pages/{contentfulCaseStudy.slug}.js")),
  "component---src-pages-contentful-page-slug-js": preferDefault(require("/home/hendemic/Documents/GitHub/personal-website/src/pages/{contentfulPage.slug}.js"))
}

