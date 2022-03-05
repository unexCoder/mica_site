import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Head from "../components/Head";

// markup
const IndexPage = ({data}) => {

  return (
    <div> 
      {/* <Layout>// use component directly if not wrapped with gatsby-plugin-layout */}
      <Head />
      <StaticImage src='../images/DSC_0273.jpg' alt="Micaela Trombini"/>
    </div>
  );
};

export default IndexPage;

