import { Card, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getMatchesByYear } from './../api/teamsApi'
import { makeStyles } from '@mui/styles'
import LastMatch from '../components/LastMatch';

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
  },
  container: {
    width: "70%",
    margin: "auto",
    paddingTop: '2rem'
  },
  item : {},
  moreMatches : {
    marginBottom: "8px"
  },
  link : {
    color: 'white',
    textDecoration: "none",
    marginLeft : "30%"
  }
});

const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 
              2013, 2012, 2011, 2010, 2009, 2008];

const Matches = () => {
  let { teamName, year } = useParams();
  const [ matches, setMatches ] = useState([]);
  const { root, container, item, moreMatches, link } = useStyles();

  const fetchData = async () => {
    try {
      const response = await getMatchesByYear(teamName, year);
      setMatches(response);
    } catch (error) {
      setMatches([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={root}>
      <div className={container}>
        <Grid container spacing={2}>
          <Grid className={item} item xs={2}>
            <Typography align={"right"} variant="h6" fontWeight={"bold"}> Select Year </Typography>
            {years.map((val) => (
              <Typography align={"right"} variant="subtitle1">
                <a className={link} href={`/team/${teamName}/matches/${val}`}> {val} </a>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={10}>
            <Typography align={"left"} variant="h5" fontWeight={"bold"}> 
              {`${teamName} matches in ${year}`}
            </Typography>
            {matches?.map(({ team1, team2, date, venue, matchWinner, umpire1, umpire2, result, resultMargin, playerOfMatch }, index) => (
              <div className={moreMatches} key={index}>
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
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Matches