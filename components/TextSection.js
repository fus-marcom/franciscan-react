import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import InvertedButton from './InvertedButton'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  section: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '32px 0',
    backgroundColor: '#fff'
  },
  innerContainer: {
    width: '70%',
    margin: '0 auto'
  },
  sectionText: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.5
  },
  heroBtn: {
    display: 'flex',
    justifyContent: 'start',
    marginTop: '16px'
  },
  invertedBtn: {
    color: '#21412a',
    backgroundColor: 'transparent',
    border: '2px #21412a solid',
    boxShadow: 'none'
  },
  white: {
    color: '#fff'
  }
})

class TextSection extends React.Component {
  render () {
    const {
      classes,
      sectionTitle,
      text,
      btnLink,
      btnText,
      textColor,
      bgColor
    } = this.props

    const Button = (
      <Grid item className={classes.heroBtn} xs={12}>
        <InvertedButton
          href={btnLink}
          title={btnText}
          className={classes.invertedBtn}
          color="secondary"
          style={{ width: '192px' }}
        >
          {btnText}
        </InvertedButton>
      </Grid>
    )

    return (
      <div className={classes.section}>
        <div className={classes.innerContainer}>
          <Typography type="display1" gutterBottom>
            {sectionTitle}
          </Typography>

          <Typography className={classes.sectionText} type="body1" gutterBottom>
            {text}
          </Typography>
          {btnLink && btnText ? Button : null}
          {textColor}
          {bgColor}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TextSection)
