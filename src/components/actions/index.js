import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com"

export const getAllPosts = async (setUsers) => {
    const {data: usersData} = await axios.get(
        `${baseURL}/posts`
    );
    setUsers(usersData);

    // userFormAPI.then(({data})=>{
    //   setUsers(data)
    // });
};
