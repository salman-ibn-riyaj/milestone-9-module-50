import { getUserById } from "@/lib/data";

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;

  const user = await getUserById(userId);
  console.log(user);
  return (
    <>
      <div>UserDetailPage</div>
      <h2>{user.name}</h2>
    </>
  );
};

export default UserDetailPage;
