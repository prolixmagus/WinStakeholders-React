import "./NextCohortStarts.css";
import React, { useState, useEffect } from "react";
import { fetchData_startDate } from "../Calendar/Airtable.js";

function NextCohortStarts() {

    const [startDate, setEvents3] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
        
            const fetchedStartDate = await fetchData_startDate();
            setEvents3(fetchedStartDate);
        };

        loadEvents();
    }, []);


    return (
        <div className="startingDateWrapper">
            <h2 id="nextCohortStarts" className="startingDate text-white">
                Next cohort starts: <strong>{startDate[0]?.startDate || " "}</strong>
            </h2>
        </div>
    );
}

export default NextCohortStarts;
