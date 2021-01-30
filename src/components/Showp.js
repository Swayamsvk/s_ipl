import React from "react";

const Showp = ({ player }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>Player Name: {player.player_name}</p>
      <p>Date Of Birth: {player.DOB}</p>
      <p>Batting Hand: {player.Batting_Hand}</p>
      <p>Bowling Skill: {player.Bowling_Skill}</p>
      <p>Country: {player.Country}</p>
      <br />
      <br />
    </div>
  );
};

export default Showp;
