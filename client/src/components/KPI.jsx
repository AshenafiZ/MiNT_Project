import { useState } from "react";
import axios from "axios";
import { useUser} from "../context/userContext";


const KeyPerformanceIndicator = ({kpi, id}) => {
    const {user} = useUser();
    const [ office, setOffice] = useState();
    const handleAssign = async() => {
        try {
        console.log(office);
          const response = await axios.post(`/api/sector/kpas/assign/${id}`, {office: office}, {withCredentials: true})
          if (response.data.success) {
            setOffice(''); 
            alert('Successfully Assigned');
          }
        } catch (error) {
          console.error("Error: ",error);
        }
      };
    
    return(
        <div className="kpi">
            <h3 className="kpiTitle">{kpi.title}</h3>
            <div className="kpiTableContainer">
                <table className='kpiTable' >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Quarter 1</th>
                            <th>Quarter 2</th>
                            <th>Quarter 3</th>
                            <th>Quarter 4</th>
                            <th>Yearly Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>Target</td>
                            <td>{kpi.q1}</td>
                            <td>{kpi.q2}</td>
                            <td>{kpi.q3}</td>
                            <td>{kpi.q4}</td>
                            <td>{kpi.target}</td>
                        </tr>
                        <tr >
                            <td>Achieved</td>
                            <td>{kpi.a1 !== 0 ? kpi.a1 : ''}</td>
                            <td>{kpi.a2 !== 0 ? kpi.a2 : ''}</td>
                            <td>{kpi.a3 !== 0 ? kpi.a3 : ''}</td>
                            <td>{kpi.a4 !== 0 ? kpi.a4 : ''}</td>
                            <td>{kpi.achieved !== 0 ? kpi.achieved : ''}</td>
                        </tr>
                    
                    </tbody>
                </table>
                {user.role === 'sector' && kpi.office_id === null &&
                    <div className='actionButtons' >
                    <input
                    
                        type="number"
                        placeholder="Enter office id"
                        value={office}
                        onChange={(e) => setOffice(parseInt(e.target.value))}
                        className="inputField"
                        required
                        />
                    <button onClick={handleAssign} className='approveButton'>Assign</button>
                    
                    </div>
                }
            </div> 
        </div>
    );
}

export default KeyPerformanceIndicator;