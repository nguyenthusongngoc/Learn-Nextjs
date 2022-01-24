import { $http } from "../src/utils/http";
import { useRouter } from "next/router";
import { getSession, signIn, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { redirect } from "next/dist/server/api-utils";
export interface IServerSideAuthProps {
  users: Array<Object>;
  session: Object;
}

const ServerSideAuth = ({ users, session }: IServerSideAuthProps) => {
  const router = useRouter();
  if (!session) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {users.map((user: any, index) => {
        return (
          <p key={index} onClick={() => router.push(`/post/${user.id}`)}>
            {user.id} {user.name}
          </p>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { data: users }: any = await $http("users");
  if (!session) {
    return {
      redirect: {
        destination: `api/auth/signin?callbackUrl=http://localhost:3000/server-side-auth`,
        permanent: false
      },
    };
  }
  return {
    props: {
      session,
      users: session ? users : [],
    },
  };
};
export default ServerSideAuth;
