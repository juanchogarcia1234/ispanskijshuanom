import Head from "next/head";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/test-data";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Headless WP Next Starter</title>
      </Head>
      <main>
        <h1 className="title">Headless WordPress Next.js Starter</h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {posts.map((post) => {
            return <PostCard key={post.uri} post={post}></PostCard>;
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
