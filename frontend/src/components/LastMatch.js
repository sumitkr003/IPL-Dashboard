import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  item: {
    height: "300px",
    color: "white !important",
    "& :hover": {
      cursor: "pointer",
    },
    display: "flex",
    justifyContent: "space-between"
  },
  left : {
    marginLeft: '8px'
  },
  right : {
    float: 'right',
    marginRight: '8px'
  },
});

const LastMatch = ({ teamName, team1, team2, date, venue, matchWinner, resultMargin, result, playerOfMatch, umpire1, umpire2 }) => {
  const color = matchWinner === teamName ? "#4DA375" : "#A34D5D";
  const { item, left, right } = useStyles();
  return (
    <Grid item xs={12}>
      <Card className={item} raised={false} style={{ backgroundColor: color }}>
        <div className={left}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            vs
          </Typography>
          <Typography gutterBottom variant="h4" fontWeight={"bold"}>
            {teamName !== team1 ? team1 : team2}
          </Typography>
          <Typography gutterBottom variant="h5" fontWeight={"bold"}>
            {date}
          </Typography>
          <Typography gutterBottom variant="h6" fontWeight={"bold"}>
            {`at ${venue}`}
          </Typography>
          <Typography gutterBottom variant="h6" fontWeight={"bold"}>
            {`${matchWinner} won by ${resultMargin} ${result}`}
          </Typography>
        </div>
        <div className={right}>
          <Typography variant="h6" fontWeight={"bold"} align="right">
            {"First Innings"}
          </Typography>
          <Typography gutterBottom variant="subtitle1" align="right">
            {team1}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"} align="right">
            Second Innings
          </Typography>
          <Typography gutterBottom variant="subtitle1" align="right">
            {team2}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"} align="right">
            {"Man of the match"}
          </Typography>
          <Typography gutterBottom variant="subtitle1" align="right">
            {playerOfMatch}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"} align="right">
            {"Umpires"}
          </Typography>
          <Typography gutterBottom variant="subtitle1" align="right">
            {`${umpire1}, ${umpire2}`}
          </Typography>
        </div>
      </Card>
    </Grid>
  );
};

export default LastMatch;
