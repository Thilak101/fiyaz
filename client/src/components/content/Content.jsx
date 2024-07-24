import React from "react";
import "./content.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import ContentSkills from "../contentSkills/ContentSkills";

const Content = () => {
  return (
    <div className="content__wrapper">
      <div className="content__public">
        <h1>
          Publications on <br /> Design & Front end
        </h1>
        <button>
          MEDIUM PROFILE{" "}
          <span>
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
      <div className="content__skills">
        <ContentSkills
          heading={"Core Tools of a Startup UI & UX Designers"}
          title={
            "A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."
          }
        />
        <ContentSkills
          heading={"Core Tools of a Startup UI & UX Designerrs"}
          title={
            "A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."
          }
        />
        <ContentSkills
          heading={"Core Tools of a Startup UI & UX Designerrs"}
          title={
            "A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."
          }
        />
        <ContentSkills
          heading={"Core Tools of a Startup UI & UX Designerrs"}
          title={
            "A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."
          }
        />
        <ContentSkills
          heading={"Core Tools of a Startup UI & UX Designerrs"}
          title={
            "A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."
          }
        />
      </div>
    </div>
  );
};

export default Content;
