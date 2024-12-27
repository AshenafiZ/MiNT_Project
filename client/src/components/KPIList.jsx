import React from "react";
import KeyPerformanceIndicator from "./KPI";

const KeyPerformanceIndicatorList = ({keyPerformanceIndicators}) => {

    return (
        <div className="kpiList">
            {keyPerformanceIndicators?.map(kpi => (
                <KeyPerformanceIndicator key={kpi.id} kpi={kpi} id={kpi.id} />
            ))}
        </div>
    );
       
}

export default KeyPerformanceIndicatorList;