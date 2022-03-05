import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { graphql } from "gatsby";
import Head from "../components/Head";

// markup
const ProjectsPage = () => {

  return (
    <div>
      <Head name='Projects' />
      <StaticImage src='../images/DSC_0273.jpg' alt="Micaela Trombini"/>
    </div>
  );
};

// export const query = graphql`
//   query projectsQuery {
//     site {
//       siteMetadata {
//         copyright
//         description
//         title
//         keywords
//       }
//     }
//   }`

export default ProjectsPage;
