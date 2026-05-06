import { getUsers } from "@/lib/data";
import UsersTable from "../components/UsersTable";


const UsersPage = async() => {
    const users = await getUsers();
    console.log(users);
    return (
        <div className="p-5">
            <h2>Total users: {users.length}</h2>

            <UsersTable users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;