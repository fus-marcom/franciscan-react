import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React, { Fragment } from 'react'

const StaffListItem = props => {
  const {
    classes,
    profileName,
    profileLink,
    jobTitle,
    imageObj,
    content,
    phone
  } = props
  const decodeHTML = str =>
    str.replace(/&#(\d+);/g, (_, p1) => String.fromCharCode(p1))

  return (
    <Grid item xs={12} className={classes.card}>
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
            {decodeHTML(profileName)}
          </Typography>
          {jobTitle && (
            <Typography component="span" className={classes.quote}>
              {decodeHTML(jobTitle)}
            </Typography>
          )}
          {content && (
            <Typography
              component="span"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {jobTitle && (
            <span className={classes.quote}>
              <a href={`tel:${phone}`}>{phone}</a>
            </span>
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

const styles = theme => ({
  card: {
    maxWidth: '1200px'
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
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
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

export default withStyles(styles)(StaffListItem)
