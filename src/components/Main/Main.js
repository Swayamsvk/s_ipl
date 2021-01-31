import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Players from "../../Extras/players.json";
import Teams from "../../Extras/teams.json";
import Owners from "../../Extras/owners.json";
import Venues from "../../Extras/venues.json";
import Showp from "../Shows/Showp";
import Showt from "../Shows/Showt";
import Showv from "../Shows/Showv";
import Showo from "../Shows/Showo";
import "./Main.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: "30vh",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Main = () => {
  const classes = useStyles();

  //initate the states

  const [search, setSearch] = useState("");
  const [player, setPlayer] = useState([]);
  const [teams, setTeams] = useState([]);
  const [owners, setOwners] = useState([]);
  const [venues, setVenues] = useState([]);

  //Load the required values

  useEffect(() => {
    setPlayer(Players);
    setTeams(Teams);
    setOwners(Owners);
    setVenues(Venues);
  }, []);

  //Methods to filter out the searched data and show it

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

  const ownerList = () => {
    return owners
      .filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.team_name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          val.owner.toLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((currentowner) => {
        return <Showo owner={currentowner} key={currentowner.id} />;
      });
  };

  const venueList = () => {
    return venues
      .filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.city.toLowerCase().includes(search.toLocaleLowerCase()) ||
          val.season.toLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((currentvenue) => {
        return <Showv venue={currentvenue} key={currentvenue.id} />;
      });
  };

  return (
    <div style={{ background: "antiquewhite" }} className="container">
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
              className="elements"
            />
          </Grid>
        </Grid>
      </div>
      <div className="subelements">{playerList()}</div>
      <div className="subelements">{teamList()}</div>
      <div className="subelements">{ownerList()}</div>
      <div className="subelements">{venueList()}</div>
    </div>
  );
};

export default Main;
