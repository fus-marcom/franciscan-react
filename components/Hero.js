import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import InvertedButton from './InvertedButton'

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
  heroBtn: {
    display: 'flex',
    justifyContent: 'center'
  },
  invertedBtn: {
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px #fff solid',
    boxShadow: 'none'
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
      tertiaryBtnLink
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
        style={{ fontWeight: 500, fontSize: '22px' }}
        gutterBottom
      >
        {subtitleText}
      </Typography>
    )

    const PrimaryBtn = (
      <Grid item className={classes.heroBtn} xs={12}>
        <InvertedButton
          href={primaryBtnLink}
          title={primaryBtnText}
          className={classes.invertedBtn}
          color="secondary"
          style={{ width: '192px' }}
        >
          {primaryBtnText}
        </InvertedButton>
      </Grid>
    )

    const SecondaryBtn = (
      <Grid
        item
        className={classes.heroBtn}
        xs={6}
        style={{ justifyContent: 'flex-end' }}
      >
        <InvertedButton
          href={secondaryBtnLink}
          title={secondaryBtnText}
          className={classes.invertedBtn}
          color="secondary"
        >
          {secondaryBtnText}
        </InvertedButton>
      </Grid>
    )

    const TertiaryBtn = (
      <Grid
        item
        className={classes.heroBtn}
        xs={6}
        style={{ justifyContent: 'flex-start' }}
      >
        <InvertedButton
          href={tertiaryBtnLink}
          title={tertiaryBtnText}
          className={classes.invertedBtn}
          color="secondary"
        >
          {tertiaryBtnText}
        </InvertedButton>
      </Grid>
    )
    return (
      <div
        className={classes.parallax}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${backgroundImg})`
        }}
      >
        {titleText && Title}
        {subtitleText && Subtitle}

        {primaryBtnText || secondaryBtnText || tertiaryBtnText ? (
          <Grid container style={{ width: '100%' }}>
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
