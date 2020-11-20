import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default function Image(props) {

  const { fileName , alt , customclass } =props

  console.log(props);
  console.log("obteniendo imagen");
  

  return (
    <StaticQuery  
      query={graphql`
        query {
          images: allFile{
            edges{
              node{
                relativePath
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }

                }
              }
            }
          }


                        
        }
              
              
      `}
      render={data =>{
        const image = data.images.edges.find(image =>{return image.node.relativePath.includes(fileName)
        })
        console.log("render imagen")
        console.log(data)
        console.log(image)
        if (!image) return null
        
        return <Img className = {customclass} alt = {alt} fluid={image.node.childImageSharp.fluid}  ></Img>

      }}
                
    />


  )
 }
 