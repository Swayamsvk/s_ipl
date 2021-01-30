import React from "react";

const Showt = ({ team }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>Team Name: {team.team_name}</p>
      <p>Home Wins: {team.home_wins}</p>
      <p>Away Wins: {team.away_wins}</p>
      <p>Home Matches: {team.home_matches}</p>
      <p>Away Matches: {team.away_matches}</p>
      <br />
      <br />
    </div>
  );
};

export default Showt;
