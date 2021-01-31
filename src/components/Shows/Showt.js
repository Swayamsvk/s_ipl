import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "20vh",
    backgroundColor: "#107896",
    color: "white",
  },
  title: {
    fontSize: 16,
    color: "#B7FBFF",
  },
  pos: {
    marginBottom: 12,
  },
});

//Show the required data

const Showt = ({ team }) => {
  const classes = useStyles();
  return (
    <div style={{ paddingLeft: 20 }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {team.team_name}
          </Typography>
          <Typography variant="body2" component="p">
            Home-Wins: {team.home_wins}
          </Typography>
          <Typography variant="body2" component="p">
            Away-Wins: {team.away_wins}
          </Typography>
          <Typography variant="body2" component="p">
            Home-Matches: {team.home_matches}
          </Typography>
          <Typography variant="body2" component="p">
            <Typography variant="body2" component="p">
              Away-Matches {team.away_matches}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
};

export default Showt;
