import { getUsers } from "@/lib/data";
import UsersTable from "../components/UsersTable";
import { createUser, deleteUser } from "@/lib/actions";
import AddUserModal from "../components/AddUserModal";


const UsersPage = async() => {
    const users = await getUsers();
    console.log(users);
    return (
        <div className="p-5">

            <div className="flex items-center justify-between container mx-auto">
            <h2>Total users: {users.length}</h2>

            <AddUserModal createUserAction={createUser}></AddUserModal>

            </div>

            <UsersTable userActionDelete={deleteUser} users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;