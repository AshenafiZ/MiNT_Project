import axios from "axios";
import { useState } from "react";
import '../style/components/KPAForm.css'

const KPAForm = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        goal_id: 0
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value});
    };

    const handleClick = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('/api/strategy/kpa', data);
            if (response.status === 201){
                alert("Successfully added kpa")
            } else {
                console.log(response.data);
                alert(response.data.message);
            }

        } catch (error) {
            alert('an error occured please try agian');
        }

    }

    return(
        <div className="kpaform">
            <form className="forms" > 
                <h2 className="kh2">Key Performance Area</h2>
                <label htmlFor="tit">Title</label>
                <input 
                    className="kinput" 
                    type="text" 
                    value={data.title} 
                    name="title" 
                    id="tit" 
                    onChange={handleChange}
                    required />
                <label htmlFor="des">Description</label>
                <input 
                    className="kinput" 
                    type="text" 
                    value={data.description} 
                    name="description" 
                    id="des" 
                    onChange={handleChange}
                    required />
                <label htmlFor="goal">Goal_ID</label>
                <input 
                    className="kinput" 
                    type="number" 
                    value={data.goal_id} 
                    name="goal_id" 
                    id="goal" 
                    onChange={handleChange} />
                <button className="addbutton" onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}



export default KPAForm;