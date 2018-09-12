import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React from 'react'

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
      <Grid container>
        <Hidden smUp>
          <Grid item xs={12}>
            {imageObj && (
              <div className={classes.portraitWrapper}>
                <img
                  src={imageObj.sourceUrl}
                  alt={imageObj.altText}
                  className={classes.portrait}
                />
              </div>
            )}
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} style={{ paddingRight: '16px' }}>
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
            <Link href={profileLink}>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          )}
        </Grid>
        <Hidden xsDown>
          <Grid item xs={3}>
            {imageObj && (
              <div className={classes.portraitWrapper}>
                <img
                  src={imageObj.sourceUrl}
                  alt={imageObj.altText}
                  className={classes.portrait}
                />
              </div>
            )}
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  )
}

const styles = theme => ({
  card: {},
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
    display: 'block',
    fontSize: '16px',
    paddingLeft: '8px',
    marginBottom: '16px',
    borderLeft: '4px solid rgba(0, 0, 0, 0.24)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px'
    }
  },
  portraitWrapper: {},
  portrait: {
    width: '100%',
    maxWidth: '250px'
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
