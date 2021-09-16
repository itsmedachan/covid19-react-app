import React from 'react'
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    backgroundColor: "orange",
    height: "50px",
  }
})

export const MaterialUI: React.FC = () => {

  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.typoStyle} color="secondary" variant="h1" align="left" gutterBottom>Hello UI</Typography>

      <Grid container spacing={1} >
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">Test Button</Button>

      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        direction="column"
      >
        <Grid item xs={12} container>
          <Grid item xs={2}>2</Grid>
          <Grid item xs={8}>8</Grid>
          <Grid item xs={2}>2</Grid>
        </Grid>
        <Grid item xs={12} justifyContent="space-around" container>
          <Grid item xs={3}>
            会社が発展するのも失敗するのも、結局はすべて社長一人の責任ではなかろうか。というのは、もし社長が“東へ行け”と言うのに、“いや私は西へ行きます”と言って反対の方向に行く社員はまずいないからである。ほとんどの社員は、社長が東へ行こうと言えば、みな東へ行く。だから、“東へ行け”と言って、もし間違ったとしたら、それは社長一人の責任に他ならないわけである。同じように、一つの部、一つの課が発展するかしないかは、すべて部長一人、課長一人の責任である。
          </Grid>
          <Grid item xs={3}>
            会社が発展するのも失敗するのも、結局はすべて社長一人の責任ではなかろうか。というのは、もし社長が“東へ行け”と言うのに、“いや私は西へ行きます”と言って反対の方向に行く社員はまずいないからである。ほとんどの社員は、社長が東へ行こうと言えば、みな東へ行く。だから、“東へ行け”と言って、もし間違ったとしたら、それは社長一人の責任に他ならないわけである。同じように、一つの部、一つの課が発展するかしないかは、すべて部長一人、課長一人の責任である。
          </Grid>
          <Grid item xs={3}>
            会社が発展するのも失敗するのも、結局はすべて社長一人の責任ではなかろうか。というのは、もし社長が“東へ行け”と言うのに、“いや私は西へ行きます”と言って反対の方向に行く社員はまずいないからである。ほとんどの社員は、社長が東へ行こうと言えば、みな東へ行く。だから、“東へ行け”と言って、もし間違ったとしたら、それは社長一人の責任に他ならないわけである。同じように、一つの部、一つの課が発展するかしないかは、すべて部長一人、課長一人の責任である。
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
