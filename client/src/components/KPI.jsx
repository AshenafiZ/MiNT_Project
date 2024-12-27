
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
                            <td>{kpi.Q1}</td>
                            <td>{kpi.Q2}</td>
                            <td>{kpi.Q3}</td>
                            <td>{kpi.Q4}</td>
                            <td>{kpi.target}</td>
                        </tr>
                        <tr >
                            <td>Achieved</td>
                            <td>{kpi.A1 !== 0 ? kpi.A1 : ''}</td>
                            <td>{kpi.A2 !== 0 ? kpi.A2 : ''}</td>
                            <td>{kpi.A3 !== 0 ? kpi.A3 : ''}</td>
                            <td>{kpi.A4 !== 0 ? kpi.A4 : ''}</td>
                            <td>{kpi.achieved !== 0 ? kpi.achieved : ''}</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div> 
        </div>
    );
}

export default KeyPerformanceIndicator;