import React, { useState } from "react";
import PropTypes from "prop-types";
function User(){
    const [user,setUser] = useState({name:"Emre" ,surname:"Gürses"});
return(

    <div>
        {user.name} {user.surname}
        <br/>
        <br/>
        <div>
        <button onClick={()=>setUser({...user,name:"Hayrunnisa"})}> 
            İsim değiştirme
        </button>
        </div>
        <div>
        <button onClick={()=>setUser({...user,surname:"Üzen"})}> 
           Soyisim değiştirme
        </button>
        </div>
       
    </div>
);
}
export default User;