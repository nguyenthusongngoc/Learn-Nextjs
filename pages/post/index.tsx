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
      {posts?.map((x: any, i) => {
        return (
          <p key={i} onClick={() => router.push(`/post/${x.id}`)}>
            {x.title}
          </p>
        );
      })}
    </div>
  );
};
export default Post;
// Get API in server side and convert to static data -> convert to html
Post.getInitialProps = async () => {
  const res = await $http("/posts?_limit=5");
  const result = await res.data;
  return { posts: result };
};
