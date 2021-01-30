import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Players from "./Extras/players.json";
import Teams from "./Extras/teams.json";
import Showp from "./Showp";
import Showt from "./Showt";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Main = () => {
  const classes = useStyles();
  const [player, setPlayer] = useState([]);
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPlayer(Players);
    setTeams(Teams);
  }, []);

  const playerList = () => {
    return player
      .filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.player_name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          val.DOB.toLowerCase().includes(search.toLocaleLowerCase()) ||
          val.Bowling_Skill.toLowerCase().includes(
            search.toLocaleLowerCase()
          ) ||
          val.Country.toLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((currentplayer) => {
        return <Showp player={currentplayer} key={currentplayer.id} />;
      });
  };

  const teamList = () => {
    return teams
      .filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.team_name.toLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((currentteam) => {
        return <Showt team={currentteam} key={currentteam.id} />;
      });
  };

  //create multiple shows for different attributes

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Search"
              color="primary"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
      <div>{playerList()}</div>
      <div>{teamList()}</div>
    </div>
  );
};

export default Main;
