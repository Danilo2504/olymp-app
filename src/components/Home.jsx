import { useEffect } from "react";
import { useState } from "react";
import { LittleMuseum } from "./LittleMuseum";

const Home=()=>{
    const [userData,setUserData]=useState(null);
    useEffect(() => {
        const checkUser=async()=>{
 
             const res = await  fetch('http://localhost:3006/api/auth/find', {
                 method: 'POST',
                 headers: {
                   Accept: 'application/json',
                   Authorization: localStorage.getItem('token-lugar-cultural')
                 }
               });
           
             const data = await res.json()
             setUserData(data)
             
         }
         checkUser()
      },[userData]);
	
	
return <div class="content-container">
{/* {
    userData.role==='ADMIN'?<div>asdsad<div/>:<div>nooo<div/>
} */}
<LittleMuseum></LittleMuseum>
<LittleMuseum></LittleMuseum>
<LittleMuseum></LittleMuseum>

</div>
}
export default Home;