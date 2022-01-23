import { $http } from "../../src/utils/http";
import { GetServerSideProps } from "next";

interface IUserDetailProps {
  users: Array<Object>;
}
const UserDetail = ({ users }: IUserDetailProps) => {
  return (
    <div>
      {users.map((user: any, index) => {
        return <p key={index}>{user.name}</p>;
      })}
    </div>
  );
};

export default UserDetail;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params }: any = context;
  const { data: users }: any = await $http(`users?id=${params.userId}`);
  return {
    props: {
      users,
    },
  };
};
