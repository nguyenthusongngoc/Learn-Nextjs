import { $http } from "../../src/utils/http";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
export interface IUserListProps {
  users: Array<Object>;
}

const UserList = ({ users }: IUserListProps) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false)
      }
    };
    securePage();
  }, []);

  const router = useRouter();
  if(loading) {
    return <p>Loading...</p>
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

export const getServerSideProps = async () => {
  const { data: users }: any = await $http("users");
  return {
    props: {
      users,
    },
  };
};
export default UserList;
