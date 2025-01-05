import { useUser } from "../../context/userContext";
function Sector(){
    const { user } = useUser();

    console.log("ashenafi", user.id)
    return(
        <div>minister page  {user.name}</div>
    );
}

export default Sector;