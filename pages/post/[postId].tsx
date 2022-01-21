import * as React from "react";
import { $http } from "../../src/utils/http";
import { GetStaticProps } from "next";
interface IPostDetailProps {
  post: {
    title: String;
  };
}

const PostDetail = (props: IPostDetailProps) => {
  const { post } = props;
  return <>{post.title}</>;
};

export default PostDetail;

export async function getStaticPaths() {
  const { data }: any = await $http("posts?_limit=10");
  const posts = data;

  const paths = posts.map((post: any) => ({
    params: { postId: "" + post.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params }: any = context;
  const { data }: any = await $http(`posts/${params.postId}`);
  return {
    props: {
      post: data,
    },
  };
};
