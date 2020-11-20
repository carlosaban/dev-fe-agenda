import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from 'semantic-ui-react'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button>Click Here</Button>
  </Layout>
)

export default IndexPage
