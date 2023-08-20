import React from "react";
import { useOutletContext } from "react-router-dom";

const Stats = () => {
  const [details] = useOutletContext();
  console.log(details);

  return (
    <div className="flex justify-center gap-16">
      {details &&
        details.stats.map((stat) => {
          return <div key={stat.stat.name}>
            <p>Name: {stat.stat.name}</p>
            <p>Base Stat: {stat.base_stat}</p>
          </div>
        })}
    </div>
  );
};

export default Stats;
