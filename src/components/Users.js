import React,{useEffect,useState} from "react";
import axios from "axios";


function Users(){
    const[users,setUsers] = useState([]);
    const[posts,setPosts] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(()=> {
        (async()=>{
            {
                try{
                 const {data:users} = await axios("https://jsonplaceholder.typicode.com/users")
                 const {data:posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
                 setUsers(users);
                 setPosts(posts);
                }
                catch(error){
                console.log("error",error);
                }
                 }
        })();
       
             
    },[]);

return(

<div>
   <h2>Users</h2> 

   {loading && <div>Yükleniyor...</div>}
   <ul>
    {
        users.map((user) =>(
            <li key={user.id}>{user.name}</li>
        ))
    }
   </ul>
   <h2>Posts</h2>
 
   <ul>
    {
        posts.map((post) =>(
            <li key={post.id}>{post.title}</li>
        ))
    }
   </ul>
</div>

);



}
export default Users;