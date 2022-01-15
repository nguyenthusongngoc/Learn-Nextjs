import { useRouter } from "next/router";
import * as React from "react";

interface IPostDetailProps {}

const PostDetail = (props: IPostDetailProps) => {
  const router = useRouter();
  return (
    <>
      <div>ID: {router.query.id || 0}</div>
    </>
  );
};

export default PostDetail;
