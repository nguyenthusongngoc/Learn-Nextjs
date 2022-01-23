import { $http } from "../../src/utils/http";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
interface IPostDetailProps {
  post: {
    id: Number;
    title: String;
  };
}

const PostDetail = ({post}: IPostDetailProps) => {
  const router = useRouter()
  // case: fallback: true
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {post.id} {post.title}
    </>
  );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: any = await $http("posts?_limit=10");
  const posts = data;

  const paths = posts.map((post: any) => ({
    params: { postId: "" + post.id },
  }));

  return {
    paths,
    // fallback: true,
    // -> If when generate data is falsy -> params will undefine and wait server side refetch for update params -> case: Need loading
    fallback: false
    // -> Will navigate to 404 if when generate data is falsy
    // fallback: 'blocking'
    // -> Wait still data truthy
  };
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
