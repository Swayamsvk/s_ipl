import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Players from "./Extras/players.json";
import Show from "./Show";

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
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(Players);
  }, []);

  const dataList = () => {
    return data
      .filter((val) => {
        if (search == "") {
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
      .map((currentdata) => {
        return <Show data={currentdata} key={currentdata.id} />;
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
      <div>{dataList()}</div>
    </div>
  );
};

export default Main;
