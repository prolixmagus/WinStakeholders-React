import "./NextCohortStarts.css";
import { STARTING_DATE } from "../../const.js";

function NextCohortStarts() {
    return (
        <div className="startingDateWrapper">
            <h2 id="nextCohortStarts" className="startingDate text-white">
                Next cohort starts: <strong>{STARTING_DATE[0].date}</strong>
            </h2>
        </div>
    );
}

export default NextCohortStarts;
