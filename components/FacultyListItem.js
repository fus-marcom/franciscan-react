import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  card: {
    height: '250px',
    [theme.breakpoints.down('xl')]: {
      maxWidth: '600px'
    }
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%'
  },
  // media: {
  //   minHeight: '280px',
  //   [theme.breakpoints.up('xl')]: {
  //     minHeight: '1366px'
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     minHeight: 500
  //   }
  // },
  quote: {
    fontSize: '16px',
    paddingLeft: '8px',
    borderLeft: '4px solid rgba(0, 0, 0, 0.24)'
  },
  portraitWrapper: {
    height: '100%',
    width: '50%',
    overflow: 'hidden'
  },
  portrait: {
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100% !important'
  }
})

class FacultyListItem extends Component {
  render () {
    const { classes, profileName, profileLink, jobTitle, imageObj } = this.props

    return (
      <Grid item xs={12} sm={9} md={6} lg={4} xl={3} className={classes.card}>
        <Paper className={classes.cardContent}>
          <CardContent
            style={{ width: imageObj ? 'calc(50% - 48px)' : 'auto' }}
          >
            <Typography variant="headline" component="h2">
              {profileName}
            </Typography>
            {jobTitle && (
              <Typography component="span" className={classes.quote}>
                {jobTitle}
              </Typography>
            )}
            {profileLink && (
              <CardActions>
                <Fragment>
                  <Link prefetch href={profileLink}>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </Link>
                </Fragment>
              </CardActions>
            )}
          </CardContent>
          {imageObj && (
            <div className={classes.portraitWrapper}>
              <img
                src={imageObj.sourceUrl}
                alt={imageObj.altText}
                className={classes.portrait}
              />
            </div>
          )}
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(FacultyListItem)
