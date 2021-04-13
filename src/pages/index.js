import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


class FrontPage extends Component {
    
    render() {
        const data = this.props.data

        return (
            <Layout>
                <div className="w-full px-4 sm:px-20 pt-40">
                    <section 
                        className="w-full mr-auto relative"
                        aria-label="Work"
                        >


                        <div className="">

                            <h1 className="mb-0">Work</h1>
                                
                            <div className="flex flex-wrap pt-3 -m-3">
                                {data.allWpWork.edges.map(({ node }, index) => (
                                    <article key={node.id} className="w-1/2 sm:w-1/4 p-3 relative" >
                                        <div className="">
                                        <Link to={node.uri}>
                                            <GatsbyImage 
                                                image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} 
                                                layout="constrained"
                                                alt={"Screenshot of the " + node.title + " project"}
                                                rel="bookmark" />
                                       
                                        
                                    </Link>
                                            <Link 
                                                to={node.uri} 
                                                rel="bookmark">
                                                <h2 className="text-center mt-2">{node.title}</h2>
                                            </Link>
                                        </div>
                                    </article>
                                ))}





                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}


export default FrontPage

// Set here the ID of the home page.
export const pageQuery = graphql`
  {
    allWpWork (
        sort: { 
            fields: [work___published],
            order: [DESC]
        },
        filter: {
            status: {eq: "publish"},
            work: {featured: {eq: true}}
        },
        limit: 3
    ) {
      edges {
        node {
          id
          title
          slug
          date
          status
          content
          uri
          featuredImage {
            node {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                          layout: CONSTRAINED
                          width: 2400
                        )
                    }
                }
            }
          }
          work {
            featured
            published
          }
        }
      }
    }
  }
`
