import React from "react";

const Show = ({ team }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>{team.team_name}</p>

      <br />
      <br />
    </div>
  );
};

export default Show;
