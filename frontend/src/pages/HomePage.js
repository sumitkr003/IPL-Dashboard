import React, { useState, useEffect } from "react";
import { getTeams } from "./../api/teamsApi";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Card } from "@mui/material";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
  },
  container : {
    width: "70%",
    margin: "auto",
  },
  item: {
    height: "200px",
    backgroundColor: "rgb(40, 44, 52) !important",
    color: "white !important",
    border: "2px solid white !important",
    "& :hover" : {
      cursor: "pointer"
    }
  },
  link : {
    color: 'white',
    textDecoration: "none",
  }
});

const HomePage = () => {
  const [teams, setTeams] = useState([]);
  const { root, container, item, link } = useStyles();

  const fetchData = async () => {
    try {
      const response = await getTeams();
      setTeams(response);
    } catch (error) {
      setTeams([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={root}>
      <div className={container}>
        <Typography gutterBottom variant="h3" align="center">
          IPL Dashboard
        </Typography>
        <Grid container spacing={2}>
          {teams.map(({ teamName }, index) => (
            <Grid item xs={6} key={index}>
              <Card className={item} raised={true}>
                <Typography align="center" variant="h5" fontWeight={600} style={{ marginTop : "100px"}}>
                  <a className={link} href={`/team/${teamName}`}> {teamName} </a>
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
