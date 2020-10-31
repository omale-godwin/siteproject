/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withPrefix, useStaticQuery, graphql } from "gatsby"

import {Helmet} from "react-helmet"
import Header from "./header"
import "./layout.css"
import Footer from '../components/footer';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="css/materialize.css" />
    <link rel="stylesheet" href="css/loaders.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/mystyle.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />


      <script src={withPrefix('js/jquery.min.js')} />
      <script src={withPrefix('js/materialize.js')} />
      <script src={withPrefix('js/numscroller.js')} />
      <script src={withPrefix('js/lightbox.js')} />
      <script src={withPrefix('js/owl.carousel.min.js')} />
      <script src={withPrefix('js/main.js')} />
      <script src={withPrefix('js/bootstrap.js')} />
    </Helmet>
      <Header />
     {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
