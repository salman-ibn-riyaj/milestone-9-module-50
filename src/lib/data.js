export const getUsers = async() => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
}

export const getUserById =async (userId)=>{
    const res = await fetch(`http://localhost:5000/users/${userId}`)
    const data = res.json();
    return data;
}