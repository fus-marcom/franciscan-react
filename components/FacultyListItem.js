import React, { Component, Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import Link from 'next/link'

const styles = theme => ({
  card: {
    width: '100%'
  },
  media: {
    minHeight: '280px',
    [theme.breakpoints.up('xl')]: {
      minHeight: '1366px'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 500
    }
  },
  quote: {
    fontSize: '16px',
    paddingLeft: '8px',
    borderLeft: '4px solid rgba(0, 0, 0, 0.24)'
  }
})

class FacultyListItem extends Component {
  render () {
    const { classes, profileName, content, profileLink } = this.props
    const image = content
      .replace(/src="\//g, 'src="https://www.franciscan.edu/')
      .match(/<DetailViewImage>(.*)<\/DetailViewImage>/)

    const title = content
      .replace(/<Title>/g, '<div class="title">')
      .replace(/<\/Title>/g, '</div>')
      .match(/<div class="title">(.*)<\/div>/)

    return (
      <Card className={classes.card}>
        {/* <CardMedia
          className={classes.media}
          image={profileImg}
          title={profileImgTitle}
          style={{
            backgroundPositionY: bgPosY,
            backgroundSize: `${bgContain ? 'contain' : 'cover'}`
          }}
        /> */}
        <div
          dangerouslySetInnerHTML={{
            __html: image[0]
          }}
        />

        <CardContent>
          <Typography variant="headline" component="h2">
            {profileName}
          </Typography>
          <Typography
            component="p"
            className={classes.quote}
            dangerouslySetInnerHTML={{
              __html: title[0]
            }}
          />
        </CardContent>
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
      </Card>
    )
  }
}

export default withStyles(styles)(FacultyListItem)
