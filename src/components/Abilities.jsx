import React from "react";
import { useOutletContext } from "react-router-dom";

const Abilities = () => {
  const [ details ] = useOutletContext();

  return <div>
    {
      details && details.abilities.map(ability => {
        return <div key={ability.slot}>
          <p>{ability.ability.name}</p>
        </div>
      })
    }
    </div>;
};

export default Abilities;
