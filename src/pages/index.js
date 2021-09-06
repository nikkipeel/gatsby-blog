import React from "react"
import Link from 'gatsby-link';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import selfie from "../images/selfie.png"

export default function IndexPage({ data }) {

return  (

  <Layout>
    <SEO title="Home" />
        <main className="container flex flex-col bg-darkBlue text-white">
            <div className="p-4 lg:p-12 lg:w-3/4 justify-center mx-auto relative">
                <section className="bg-darkBlue text-white text-center lg:text-left rounded-lg lg:flex p-12 lg:p-20">
                    <img src={selfie} className="w-60 h-60 mx-auto lg:mr-12" alt="portrait" id="home-img"/>
                    <div className="text-base flex flex-col justify-center">
                        <h1 className="mono text-xl my-8 lg:mt-0">Hi there, I'm Nikki!</h1>
                        <p className="mt-4 mb-8 text-white">I'm a Front End Developer working from home in the United States. I love making websites and thought I'd create this blog to share some of my projects and favorite web development tools with you. Feel feel to browse my recent posts and projects or find something new in the resources section <span role="img" aria-label="smiling emoji">😎</span></p>
                        <a href="/rss.xml" className="flex justify-center items-center w-48 h-12 font-semibold hover:bg-brightBlue text-white hover:text-white-active border-2 border-white cursor-pointer rounded sm:mx-auto lg:mx-0">Subscribe with RSS</a>
                    </div>
                </section>
            </div>

            <div className="flex flex-col justify-center mx-auto mt-24 mb-24"> 
                <h2 className="wavy text-3xl mono w-1/2 mx-8 leading-loose">Recent Posts</h2>
               
                      <>
                      {data.allMarkdownRemark.edges.map(post => (
                    <article className="m-4">
                    
                        <>
                        <Link to={post.node.frontmatter.path}>
                  
                        <span className="flex flex-col leading-snug">
                            <div className="m-4" key={ post.node.id }>
                                <h3 className="text-white text-2xl font-semibold mb-2">{ post.node.frontmatter.title }</h3>
                                <p className="text-base mb-4">{post.node.frontmatter.description}</p>
                                <span id={ post.node.frontmatter.category } className="category text-white-active font-semibold text-sm py-2 px-4 mr-2 rounded">{ post.node.frontmatter.category }</span>
                                <small className="text-base ml-2"><span role="img" aria-label="calendar"> &#128197; </span>{post.node.frontmatter.date }</small>
                            </div>
                        </span>
                       
                        </Link>
                        </>
                         
                    </article>
                    ))}
                    <Link to={"/blog"} exact className="flex justify-center mx-auto items-center w-48 h-12 font-semibold bg-transparent text-white hover:bg-maroon hover:text-white-active border-2 border-white cursor-pointer rounded">View Blog</Link>
                    </>
                
                 
               
                </div>
        </main>
   
  </Layout>
)};


export const pageQuery = graphql`
    query BlogPostsQuery {
            allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){  
                edges {
                    node {
                        id
                    frontmatter {
                        path
                        title
                        description
                        date
                        category
                    }
                    }
                }
            }
    }
`;



