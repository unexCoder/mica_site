import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { graphql } from "gatsby";
import Head from "../components/Head";

// markup
const BioPage = () => {

  return (
    <div>
      <Head name='Bio' />
      <StaticImage src='../images/DSC_0273.jpg' alt="Micaela Trombini"/>
    </div>
  );
};

// export const query = graphql`
//   query bioQuery {
//     site {
//       siteMetadata {
//         copyright
//         description
//         title
//         keywords
//       }
//     }
//   }`

export default BioPage;
