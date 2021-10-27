import React from "react";
import { v4 as uuidv4 } from "uuid";
import Definition from "./Definition";

function WordCard({ wordID, defData }) {
  // console.log(defData);
  return (
    <div className="card-container">
      <h1>
        {wordID}
        <div className="under"></div>
      </h1>

      <ul>
        {defData.map((def) => {
          const { definitions } = def;
          return <Definition key={uuidv4()} definitions={definitions} />;
        })}
      </ul>
    </div>
  );
}

export default WordCard;
