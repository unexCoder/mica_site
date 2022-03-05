import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { graphql } from "gatsby";
import Head from "../components/Head";

// markup
const WorksPage = () => {
  
  return (
    <div>
      <Head name='Works' />
      <StaticImage src='../images/DSC_0273.jpg' alt="Micaela Trombini"/>
    </div>
  );
};

// export const query = graphql`
//   query worksQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }`

export default WorksPage;
