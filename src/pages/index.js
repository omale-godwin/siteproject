import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Jumbo from "../components/jumbo"
import SEO from "../components/seo"; 
import Services from '../components/services'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br /><br/><br/><br/><br/><br/>
   <Jumbo />
   <Services />
   
  </Layout>
)

export default IndexPage
