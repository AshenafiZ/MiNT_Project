
const KeyPerformanceIndicator = ({kpi, id}) => {

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
            </div> 
        </div>
    );
}

export default KeyPerformanceIndicator;