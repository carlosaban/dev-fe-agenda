import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/base/layout"
import SEO from "../components/common/seo"
import { Button } from 'semantic-ui-react'
import Imagen from "../components/img/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{width: 200}}><Imagen fileName = "pucp-icon.jpg" alt="icono pucp" customclass ="imageclass" ></Imagen></div>
    
    <Button>Click Here</Button>
    
  </Layout>
)

export default IndexPage
