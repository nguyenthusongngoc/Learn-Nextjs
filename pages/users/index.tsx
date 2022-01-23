import { $http } from "../../src/utils/http";
import { useRouter } from "next/router";

export interface IUserListProps {
  users: Array<Object>;
}

const UserList = ({ users }: IUserListProps) => {
  const router = useRouter()
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
