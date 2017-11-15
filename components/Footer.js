import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: `${theme.palette.primary[500]}`,
    borderTop: 'solid 3px #998643',
    paddingTop: '16px',
    overflowX: 'hidden'
  },
  footerSections: {
    margin: '0 16px'
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: '8px 16px 8px 16px',
    marginTop: '8px'
  },
  footerText: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: 1.5
  }
})

class Footer extends React.Component {
  getYear () {
    const dateToday = new Date()
    console.log(dateToday.getFullYear())
    return dateToday.getFullYear()
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Typography
              className={[classes.footerText, classes.footerSections]}
            >
              Bacon ipsum dolor amet rump leberkas doner, andouille tenderloin
              beef ribs ham shankle kielbasa drumstick tail brisket. Beef ribs
              kielbasa venison, chicken sausage bresaola turkey tongue andouille
              pork belly meatball. Bresaola sausage t-bone frankfurter. Pig
              corned beef ribeye drumstick ham hock t-bone meatball fatback
              capicola flank pork belly meatloaf. T-bone turducken alcatra kevin
              shankle corned beef. Sausage ham hock shankle drumstick alcatra,
              ribeye shoulder. Jowl filet mignon ribeye, kielbasa turducken tail
              burgdoggen swine capicola fatback tri-tip.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={[classes.footerText, classes.footerSections]}
            >
              Bacon ipsum dolor amet rump leberkas doner, andouille tenderloin
              beef ribs ham shankle kielbasa drumstick tail brisket. Beef ribs
              kielbasa venison, chicken sausage bresaola turkey tongue andouille
              pork belly meatball. Bresaola sausage t-bone frankfurter. Pig
              corned beef ribeye drumstick ham hock t-bone meatball fatback
              capicola flank pork belly meatloaf. T-bone turducken alcatra kevin
              shankle corned beef. Sausage ham hock shankle drumstick alcatra,
              ribeye shoulder. Jowl filet mignon ribeye, kielbasa turducken tail
              burgdoggen swine capicola fatback tri-tip.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={[classes.footerText, classes.footerSections]}
            >
              Bacon ipsum dolor amet rump leberkas doner, andouille tenderloin
              beef ribs ham shankle kielbasa drumstick tail brisket. Beef ribs
              kielbasa venison, chicken sausage bresaola turkey tongue andouille
              pork belly meatball. Bresaola sausage t-bone frankfurter. Pig
              corned beef ribeye drumstick ham hock t-bone meatball fatback
              capicola flank pork belly meatloaf. T-bone turducken alcatra kevin
              shankle corned beef. Sausage ham hock shankle drumstick alcatra,
              ribeye shoulder. Jowl filet mignon ribeye, kielbasa turducken tail
              burgdoggen swine capicola fatback tri-tip.
            </Typography>
          </Grid>
          <Grid className={classes.subFooter} item xs={12}>
            <span>
              © {() => this.getYear()} Franciscan University of Steubenville
            </span>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
