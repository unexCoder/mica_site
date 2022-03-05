module.exports = {
    siteMetadata: {
        title: `Micaela Trombini`,
        siteUrl: `https://www.micaelatrombini.com.ar`,
        description:`Micaela Trombini Music, Works, and Portfolio. Bioinformatic art project`,
        copyright:`© Copyright 2022 Luigi Tamagnini`,
        keywords: `art,biocode,bioart,noise,music,botanic,biology`
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
              component: require.resolve(`./src/components/Layout.js`),
            },
          }
    ]
}