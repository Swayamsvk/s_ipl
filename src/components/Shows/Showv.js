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

const Show = ({ venue }) => {
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
            {venue.city}
          </Typography>
          <Typography variant="body2" component="p">
            Season: {venue.season}
          </Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
};

export default Show;
