import React from 'react'
import { Grid, Typography, Card } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  left : {
    marginLeft: '8px'
  },
  recentMatch : {
    height : '300px',
    color: 'white !important'
  },
  
});

const LatestMatch = ({ latestMatches, teamName }) => {
  const { left, recentMatch } = useStyles();
  return latestMatches.map(({ team1, team2, matchWinner, result, resultMargin }, index) => {
    const color = matchWinner === teamName ? "#4DA375" : "#A34D5D";
    return (
      <Grid item xs={3} key={index}>
        <Card className={recentMatch} style={{backgroundColor : color}}>
          <div className={left}>
            <Typography variant="subtitle1" fontWeight={"bold"}> vs </Typography>
            <Typography gutterBottom variant="h5" fontWeight={"bold"}> {teamName !== team1 ? team1 : team2} </Typography>
            <Typography gutterBottom variant="subtitle1" fontWeight={"bold"}> {`${matchWinner} won by ${resultMargin} ${result}`} </Typography>
          </div>
        </Card>
      </Grid>
    )
  })
}

export default LatestMatch;