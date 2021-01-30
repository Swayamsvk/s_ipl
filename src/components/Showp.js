import React from "react";

const Show = ({ player }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>{player.player_name}</p>
      <p>{player.DOB}</p>
      <p>{player.Batting_Hand}</p>
      <p>{player.Bowling_Skill}</p>
      <p>{player.Country}</p>
      <br />
      <br />
    </div>
  );
};

export default Show;
