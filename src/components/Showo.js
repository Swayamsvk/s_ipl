import React from "react";

const Show = ({ owner }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>{owner.owner}</p>
      <p>{owner.team_name}</p>
      <br />
      <br />
    </div>
  );
};

export default Show;
