import React, {useState,useEffect} from "react";
import AuthService from "../services/AuthService";

export default function Profile(){
    const [user, setUser] = useState(null);

    useEffect(() => {
AuthService.getMyProfile().then((user)=>{
console.log("profile user",user);
setUser(user);
});  
      }, []);

return (
    <div>
        <h4>Profile user</h4>
        {user && <div>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            </div>}
    </div>
);

}

