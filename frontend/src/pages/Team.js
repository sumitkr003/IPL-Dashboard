import React, { useState, useEffect } from "react";
import { getTeamInfo } from "./../api/teamsApi";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Card } from "@mui/material";
import LastMatch from "../components/LastMatch";
import LatestMatch from "../components/LatestMatch";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
    height: "100vh"
  },
  container: {
    width: "70%",
    margin: "auto",
  },
  moreMatches : {
    height : '300px',
    backgroundColor: "rgb(40, 44, 52) !important",
  },
  button : {
    color: 'white !important',
    fontSize: '24px',
    margin: 'auto',
    marginTop: '150px',
    alignSelf: "center",
    justifySelf: "center",
  },
  link : {
    color: 'white',
    textDecoration: "none",
    marginLeft : "30%"
  }
});

const Team = () => {
  const [teamInfo, setTeamInfo] = useState({});
  let { teamName } = useParams();
  const { root, container, button, moreMatches, link } = useStyles();
  const { latestMatches = [] } = teamInfo;
  const { team1, team2, date, venue, matchWinner, umpire1, umpire2, result, resultMargin, playerOfMatch }  = latestMatches?.length > 0 ? latestMatches[0] : {};
  const color = matchWinner === teamName ? "#4DA375" : "#A34D5D";
  console.log(latestMatches && latestMatches[0]);


  const fetchData = async () => {
    try {
      const response = await getTeamInfo(teamName);
      setTeamInfo(response);
    } catch (error) {
      setTeamInfo({});
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={root}>
      <div className={container}>
        <Typography gutterBottom variant="h2" fontWeight={800}>
          {teamName}
        </Typography>
        <Typography gutterBottom variant="subtitle1" fontWeight={600}>
          Latest Matches
        </Typography>
        <Grid container spacing={2}>
          <LastMatch
            teamName={teamName}
            team1={team1}
            team2={team2}
            date={date}
            venue={venue}
            matchWinner={matchWinner}
            resultMargin={resultMargin}
            result={result}
            playerOfMatch={playerOfMatch}
            umpire1={umpire1}
            umpire2={umpire2} 
          />
          <LatestMatch 
            latestMatches={latestMatches?.slice(1)} 
            teamName={teamName} 
          />
          <Grid item xs={3}>
            <Card className={moreMatches}>
              <div className={button}>
                <a href="/" className={link}> More {'>'} </a>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Team;
