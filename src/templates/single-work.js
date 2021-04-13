import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import { GatsbyImage } from "gatsby-plugin-image"

const PostTemplate = (props) => {
  const post = props.data.wpWork;

    return (
    <Layout>
      <article className="w-full flex flex-wrap content-start">

        <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mr-auto pt-32">
            <div className="flex flex-wrap h-full content-start">
              <div className="w-full p-6">
                <div>
                  <div>
                    <GatsbyImage 
                        image={post.work.screenshotDesktop.localFile.childImageSharp.gatsbyImageData} 
                        layout="constrained"
                        alt={"Screenshot of the " + post.title + " project on a desktop computer"} />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto hidden md:block  p-6">
              {post.work.screenshotMobile && (
                <div className="-mt-24">
                  <div>
                    <div>
                      <GatsbyImage 
                          image={post.work.screenshotMobile.localFile.childImageSharp.gatsbyImageData} 
                          layout="constrained"
                          alt={"Screenshot of the " + post.title + " project on a phone"} />
                    </div>
                  </div>
                </div>
              )}
              </div>
              {post.work.screenshotTablet && (
              <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mr-auto hidden md:block p-6">
                <div>
                  <div>
                    <GatsbyImage 
                        image={post.work.screenshotTablet.localFile.childImageSharp.gatsbyImageData} 
                        layout="constrained"
                        alt={"Screenshot of the " + post.title + " project on an tablet"} />
                  </div>
                </div>
              </div>
                )}
            </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto pr-6 pl-6 md:pl-0 md:pt-12 pb-6">
            <div className="sticky top-0">
          <div>
          

            <h1 itemProp="name" className="mb-6">{post.title} 
            </h1>

          </div>

          </div>
        </div>
      </article>
    </Layout>
    )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostById($id: String!) {
    wpWork(
      id: { eq: $id }
      slug: {ne: "datatemplate"}
    ) {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      modified
      id
      content
      work {
        featured
        published
        projectUrl
        projectType
        screenshotDesktop {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 2400
              )
            }
          }
        }
        screenshotMobile {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 960
              )
            }
          }
        }
        screenshotTablet {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 2304
              )
            }
          }
        }
      }
    }
  }
`
