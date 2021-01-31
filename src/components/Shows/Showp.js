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
    color: "white",
  },
});

//Show the required data

const Showp = ({ player }) => {
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
            {player.player_name}
          </Typography>
          <Typography variant="body2" component="p">
            Date-of-Birth: {player.DOB}
          </Typography>
          <Typography variant="body2" component="p">
            Batting-Hand: {player.Batting_Hand}
          </Typography>
          <Typography variant="body2" component="p">
            Bowling-Skill: {player.Bowling_Skill}
          </Typography>
          <Typography variant="body2" component="p">
            <Typography variant="body2" component="p">
              Country: {player.Country}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
};

export default Showp;
