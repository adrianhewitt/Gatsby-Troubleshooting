import React, { Component } from "react"
import Layout from "../layouts"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


class Work extends Component {
    
    render() {

        const data = this.props.data

        const { currentPage, numPages, slug, name } = this.props.pageContext




        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        
//         const currentCategorySlug = this.props.pageContext.slug
// console.log(this.props.pageContext);

        var prevPage = currentPage - 1 === 1 ? "/work/" : "/work/" + (currentPage - 1).toString()
        var nextPage = "/work/" + (currentPage + 1).toString()
        var pageTitle = "My Work"
        
        if(slug !== undefined) {
            prevPage = currentPage - 1 === 1 ? "/work/category/" + slug + "/" : "/work/category/" + slug + "/" + (currentPage - 1).toString()
            nextPage = "/work/category/" + slug + "/" + (currentPage + 1).toString()
            pageTitle = "Work Related to "+name
        }
        
        return (
            <Layout>
                <section className="flex-grow flex flex-wrap" aria-label={pageTitle}>
                
                <div className="w-full md:w-full lg:w-1/3 xl:w-1/3 ml-auto pl-6 relative">
                  
                {slug && ( 
                    <div className="sticky top-0 pt-24">
                    {/* 
                    <h1 className="pt-1">{data.allWordpressCategory.edges[0].node && (data.allWordpressCategory.edges[0].node.name)}</h1>  */}

                    <small className="mt-4 block">Work related to:</small>
                    <div className="mb-4">
                    <img 
                        src={data.allWpCategory.edges[0].node.category.logoWhite.localFile.publicURL} 
                        alt={data.allWpCategory.edges[0].node.name} />
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: data.allWpCategory.edges[0].node.description }} />
                    </div>
                )}

                {!slug && ( 
                    <div className="sticky top-0 pt-24">
                        <h1 className="pt-1">Work</h1> 
                        <p>An archive of notable works.</p>
                    </div>
                )}

                </div>
                <div className="w-full md:w-full lg:w-2/3 xl:w-2/3 mr-auto relative">

                    <div className="flex flex-wrap h-full flex-row">

                        <div className="w-full self-start pt-3">

                            <div className="flex flex-wrap content-start pt-12">
                            {data.allWpWork.edges.map(({ node }, index) => (
                                <article key={node.id} className="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-3" >
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
                                </article>
                            ))}
                            </div>

                        </div>

{numPages !== 1 && (
                        <div className="w-full self-end">
                        
                            <nav className="pagination w-full flex flex-wrap leading-none" role="navigation" aria-label="Pagination Navigation">

                                <div className="w-1/2">
                                {!isFirst && (
                                <Link to={prevPage} rel="prev" aria-label="Goto Previous Page" className="block p-6">
                                    Previous Page
                                </Link>
                                )}
                                </div>

                                <div className="w-1/2 text-right">
                                {!isLast && (
                                <Link to={nextPage} rel="next" aria-label="Goto Next Page" className="block p-6">
                                    Next Page
                                </Link>
                                )}
                                </div>

                            </nav>

                        </div>
)}
                    </div>
                
                </div>
                </section>
            </Layout>
        )
    }
}

export default Work

export const pageQuery = graphql`
query($skip: Int!, $limit: Int!, $slug: String) {
    allWpCategory(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          id
          slug
          name
          description
          category {
            order
            logoWhite {
              localFile {
                publicURL
              }
              mediaDetails {
                sizes {
                    height
                    width
                }
              }
            }
          }
        }
      }
    }
  allWpWork(
      sort: { 
          fields: [work___published],
          order: [DESC]
      },
      filter: {
          status: {eq: "publish"}
          categories: {nodes:{elemMatch: {slug: {eq: $slug}}}}
          slug: {ne: "datatemplate"}
      },
      limit: $limit,
      skip: $skip
  ) {
    edges {
      node {
        id
        title
        slug
        uri
        date
        status
        content
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
          published
        }
      }
    }
  }
}
`
