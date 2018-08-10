import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'

const styles = theme => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'scroll'
    },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  heroBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px'
  },
  heroBtn: {
    fontSize: '20px',
    color: '#21412a',
    backgroundColor: '#fff'
  },
  white: {
    color: '#fff'
  }
})

class Hero extends Component {
  render () {
    const {
      classes,
      titleText,
      subtitleText,
      backgroundImg,
      primaryBtnText,
      primaryBtnLink,
      secondaryBtnText,
      secondaryBtnLink,
      tertiaryBtnText,
      tertiaryBtnLink,
      minimumHeight
    } = this.props

    const Title = (
      <Typography variant="display2" className={classes.white} gutterBottom>
        {titleText}
      </Typography>
    )

    const Subtitle = (
      <Typography
        className={classes.white}
        variant="subheading"
        style={{ fontWeight: 500, fontSize: '22px', marginBottom: '1.35em' }}
        gutterBottom
      >
        {subtitleText}
      </Typography>
    )

    const PrimaryBtn = (
      <Grid item className={classes.heroBtnContainer} xs={12}>
        <Button
          className={classes.heroBtn}
          variant="contained"
          href={primaryBtnLink}
          title={primaryBtnText}
          color="inherit"
          style={{ width: '200px' }}
        >
          {primaryBtnText}
        </Button>
      </Grid>
    )

    const SecondaryBtn = (
      <Grid
        item
        className={classes.heroBtnContainer}
        xs={6}
        style={{ justifyContent: 'flex-end' }}
      >
        <Button
          className={classes.heroBtn}
          variant="contained"
          href={secondaryBtnLink}
          title={secondaryBtnText}
          color="inherit"
          style={{ width: '92px' }}
        >
          {secondaryBtnText}
        </Button>
      </Grid>
    )

    const TertiaryBtn = (
      <Grid
        item
        className={classes.heroBtnContainer}
        xs={6}
        style={{ justifyContent: 'flex-start' }}
      >
        <Button
          className={classes.heroBtn}
          variant="contained"
          href={tertiaryBtnLink}
          title={tertiaryBtnText}
          color="inherit"
          style={{ width: '92px' }}
        >
          {tertiaryBtnText}
        </Button>
      </Grid>
    )
    return (
      <div
        className={classes.parallax}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${backgroundImg})`,
          minHeight: minimumHeight
        }}
      >
        {titleText && Title}
        {subtitleText && Subtitle}

        {primaryBtnText || secondaryBtnText || tertiaryBtnText ? (
          <Grid container style={{ width: '100%' }} spacing={16}>
            {primaryBtnText && primaryBtnLink ? PrimaryBtn : null}
            {secondaryBtnText && secondaryBtnLink ? SecondaryBtn : null}
            {tertiaryBtnText && tertiaryBtnLink ? TertiaryBtn : null}
          </Grid>
        ) : null}
      </div>
    )
  }
}

export default withStyles(styles)(Hero)
