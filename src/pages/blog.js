import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Link from 'gatsby-link';
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <main className="bg-brown text-white h-auto p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl mono tracking-tight pl-4 mb-12">Latest Blog Posts</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto md:gap-8 mb-24"> 
                {data.allMarkdownRemark.edges.map(post => (
                   <article>
                   <Link to={post.node.frontmatter.path}>
    
                   <div className="block relative leading-snug" key={ post.node.id }>
                   <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} alt={post.node.frontmatter.title}  className="block w-full items-center object-cover object-top absolute" imgStyle={{ height: 250, alignItems: 'center', position: 'absolute', display: 'block', objectFit: 'cover', objectPosition: 'top'}}/> 
                       <span className="block relative ">
                           <h3 className="text-white text-xl font-semibold rounded text-left">{post.node.frontmatter.title}</h3>
                       </span>
                      <div className="mt-4 mb-8"> 
                           <p className="text-base mb-4">{post.node.frontmatter.description}</p>
                           <span id={post.node.frontmatter.category} className="category text-white font-semibold text-sm py-2 px-4 mr-2 rounded">{post.node.frontmatter.category}</span>
                           <small className="text-base ml-2"><span role="img" aria-label="calendar">&#128197; </span>{post.node.frontmatter.date}</small>
                       </div> 
                   </div>
                   </Link>
               </article>
     ))}

               
                </div>
            </section>
        </main>
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark  (sort: { fields: [frontmatter___date], order: DESC }){
                edges {
                    node {
                        id
                    frontmatter {
                        path
                        title
                        description
                        date
                        category
                        image {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default BlogPage;