import React from "react";

const Show = ({ data }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>{data.player_name}</p>
      <p>{data.DOB}</p>
      <p>{data.Batting_Hand}</p>
      <p>{data.Bowling_Skill}</p>
      <p>{data.Country}</p>
      <br />
      <br />
    </div>
  );
};

export default Show;
