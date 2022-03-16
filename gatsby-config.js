
require("dotenv").config({
    path: `.env`,
});

module.exports = {
  siteMetadata: {
      title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID,
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `limelight`,
        `inter\:100,300,400,400i,700,900` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  "gatsby-plugin-sass",
  "gatsby-plugin-image"]
};
