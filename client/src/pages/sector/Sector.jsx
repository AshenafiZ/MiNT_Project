import { useUser } from "../../context/userContext";
function Sector(){
    const { user } = useUser();

    return(
        <div>minister page  {user.name}</div>
    );
}

export default Sector;