import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
              <main className="container bg-brown min-h-screen p-4 md:p-12">
            <Link to="/blog" exact className="text-white text-base items-center"><FontAwesomeIcon icon={faChevronLeft} className="mr-4"></FontAwesomeIcon> Back to Blog</Link>
            <article className="container text-white mx-auto justify-center rounded-lg mt-4">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8 z-40">
                        <div className="bg-white text-brown bg-opacity-75 rounded p-4 md:p-12">
                            <h1 className="mono text-3xl mb-4">
                                {post.frontmatter.title}
                            </h1>
                            <div className="flex justify-center text-brown">
                                <Img fixed={post.frontmatter.authorImage.childImageSharp.fixed} alt="" className="w-10 h-10 rounded-full" />
                                <p className="mono flex items-center pl-4 text-xl">{post.frontmatter.author}</p>
                            </div>
                            <p className="text-base font-semibold mt-4 text-center">Published on <strong>{post.frontmatter.date}</strong></p>
                        </div>
                    </div>
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} imgStyle={{objectFit: 'cover', objectPosition: 'left top', height: 400}} style={{ height: 400, zIndex: 10}} />
                </header>
                <div className="break-words px-4 lg:px-16 py-12 lg:py-20 prose lg:prose-xl max-w-screen leading-normal">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </article>
        </main>
        </Layout>
    )
}
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                date
                author
                authorImage{
                    childImageSharp {
                        fixed(height: 80) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                image  {
                    childImageSharp {
                        fluid(maxWidth: 1440) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
