import { useUser } from "../../context/userContext";
function Sector(){
    const { user } = useUser();

    return(
        <div>sector page {user.name}</div>
    );
}

export default Sector;