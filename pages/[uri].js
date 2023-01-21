import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPostByUri } from "../lib/test-data";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { faUser, faCalendar, faTag } from "@fortawesome/free-solid-svg-icons";

export default function SlugPage({ post }) {
  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <div className="siteHeader container">
          <h1 className="title text-left">{post.title}</h1>
          <p>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCalendar} />
            <FontAwesomeIcon icon={faTag} />
            &nbsp;&nbsp;
            {`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️
            &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
          </p>
          <Image
            src={post.featuredImage.node.sourceUrl}
            width={770}
            height={385}
            alt="Your Name"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>

        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostsByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            srcSet(size: LARGE)
          }
        }
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  console.log("post", post);
  return {
    props: {
      post,
    },
  };
}
//This will run only during build in production
// With npm run dev (next dev) it will run on every request
export async function getStaticPaths() {
  const paths = []; //Defers generating all pages on-demand
  return {
    paths,
    fallback: "blocking",
  };
}
