import { useRouter } from "next/router";
import { $http } from "../../src/utils/http";

export interface IPostProps {
  posts: Array<Object>;
}
const Post = (props: IPostProps) => {
  const { posts } = props;
  const router = useRouter();
  return (
    <div>
      {posts?.map((post: any, index) => {
        return (
          <p key={index} onClick={() => router.push(`/post/${post.id}`)}>
            {post.title}
          </p>
        );
      })}
    </div>
  );
};
export default Post;
// Get API in server side and convert to static data -> convert to html
export const getStaticProps = async () => {
  const {data}:any = await $http("posts?_limit=10");
  return { props: { posts: data } };
};
