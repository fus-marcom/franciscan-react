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
    maxWidth: '600px'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%'
  },
  name: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  quote: {
    fontSize: '16px',
    paddingLeft: '8px',
    borderLeft: '4px solid rgba(0, 0, 0, 0.24)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px'
    }
  },
  portraitWrapper: {
    height: '100%',
    width: '50%',
    overflow: 'hidden',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px'
  },
  portrait: {
    objectFit: 'cover',
    objectPosition: '0px 22%',
    width: '100%',
    height: '100% !important'
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  actions: {
    marginTop: 'auto',
    paddingLeft: '0'
  }
})

class FacultyListItem extends Component {
  render () {
    const { classes, profileName, profileLink, jobTitle, imageObj } = this.props

    return (
      <Grid item xs={12} sm={9} md={6} lg={4} xl={3} className={classes.card}>
        <Paper className={classes.cardContent}>
          <CardContent
            className={classes.textContent}
            style={{ width: imageObj ? 'calc(50% - 24px)' : 'auto' }}
          >
            <Typography
              variant="headline"
              component="h2"
              className={classes.name}
            >
              {profileName}
            </Typography>
            {jobTitle && (
              <Typography component="span" className={classes.quote}>
                {jobTitle}
              </Typography>
            )}
            {profileLink && (
              <CardActions className={classes.actions}>
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
