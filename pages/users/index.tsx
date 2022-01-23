import { $http } from "../../src/utils/http";

export interface IUserListProps {
  users: Array<Object>;
}

const UserList = ({ users }: IUserListProps) => {
  return (
    <div>
      {users.map((user: any, index) => {
        return (
          <p key={index}>
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
