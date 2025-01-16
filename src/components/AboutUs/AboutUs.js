import "./AboutUs.css";
import MeetJared from "../../images/meet-jared.png";
import MeetLeslie from "../../images/meet-leslie.png";

function AboutUs() {
    return (
        <div id="AboutUs" className="bg-lightGray pb-4">
            <div className="aboutUsTitle flex container-cc">
                <h1 className="loud-voice font-mogan">
                    Jared Spool & Dr. Leslie Jensen-Inman will guide you.
                </h1>
            </div>

            <div className="meetTheParents container-cc flex">
                <div className="aboutUsText">
                    <p>
                        Everything you learn in this 16-week program comes
                        directly from Leslie and Jared's experience. They’ve
                        been working for decades across industries, discovering
                        the best practices of successful UX leaders.
                    </p>
                    <p>
                        Leslie and Jared joined forces in 2012. Since then, they
                        have worked with top UX leaders at organizations like
                        IBM, NASA, GE, Fidelity Investments, GM, Exxon Mobil,
                        Dolby, and Adobe.
                    </p>
                    <p>
                        Leslie’s deep knowledge of leadership and human
                        relationships is mind-bogglingly astute. You’ll ask
                        yourself, “how does she know my stakeholders are exactly
                        like that?”
                    </p>
                </div>
                <picture className="founderImage">
                    <img
                        src={MeetLeslie}
                        className="img-resp"
                        alt="Dr. Leslie Jensen-Inman and Jared Spool"
                    />
                </picture>
            </div>

            <div className="meetTheParents container-cc flex-direction-row-reverse">
                <div className="aboutUsText">
                    <p>
                        You’ll love Jared’s always-relevant stories and his ability to demonstrate every point with a simple, concrete example. He’s done this work for a long time and will share every corner of his knowledge and experience with you.
                    </p>
                    <p>
                        Most importantly, you’ll love how much more confident you’ll feel each week as you take in and start to use what you learn. Leslie and Jared have poured their experience-informed wisdom into this program. They’ve listened to what you’ve been struggling with. So don’t pass up this opportunity to learn everything you can.
                    </p>
                </div>
                <div className="founderImage">
                    <img
                        src={MeetJared}
                        className="img-resp"
                        alt="Dr. Leslie Jensen-Inman and Jared Spool"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
