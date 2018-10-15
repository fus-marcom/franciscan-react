import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    // maxWidth: 345
  }
}

function AlumniCard (props) {
  const { classes, profileName, imageObj, content } = props
  const decodeHTML = str =>
    str.replace(/&#(\d+);/g, (_, p1) => String.fromCharCode(p1))
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {imageObj && (
          <CardMedia
            component="img"
            image={imageObj.sourceUrl}
            title={imageObj.altText}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {decodeHTML(profileName)}
          </Typography>
          <Typography
            component="span"
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

AlumniCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AlumniCard)
