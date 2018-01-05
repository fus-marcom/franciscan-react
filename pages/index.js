import React from 'react'
import Card, { CardMedia, CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Button from 'material-ui/Button'
import Layout from '../components/Layout'
import Grid from 'material-ui/Grid'
import withRoot from '../components/withRoot'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Masonry from 'react-masonry-component'

const styles = theme => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundImage: 'url(https://unsplash.it/1200/800?image=1062)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    flexDirection: 'column'
  },
  heroBtn: {
    display: 'flex',
    justifyContent: 'center'
  },
  white: {
    color: '#fff'
  },
  card: {
    width: '100%'
  },
  media: {
    minHeight: 280
  },
  heroCards: {
    padding: '3rem'
  },
  gridItemFix: {
    width: '100%'
  }
})

const IndexPage = ({ classes }) => (
  <Layout>
    <div className={classes.parallax}>
      <Typography type="display2" className={classes.white} gutterBottom>
        Franciscan University of Steubenville
      </Typography>
      <Typography type="subheading" className={classes.white} gutterBottom>
        Add your own text and images for a quick one page site.
      </Typography>
      <Grid container>
        <Grid item className={classes.heroBtn} xs={12}>
          <Button color="accent" raised style={{ width: '192px' }}>
            Apply
          </Button>
        </Grid>
        <Grid
          item
          className={classes.heroBtn}
          xs={6}
          style={{ justifyContent: 'flex-end' }}
        >
          <Button color="accent" raised>
            Inquire
          </Button>
        </Grid>
        <Grid
          item
          className={classes.heroBtn}
          xs={6}
          style={{ justifyContent: 'flex-start' }}
        >
          <Button color="accent" raised>
            Visit
          </Button>
        </Grid>
      </Grid>
    </div>
    <div className={classes.heroCards}>
      <Masonry>
        <Grid item className={classes.gridItemFix} xs={12} sm={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="display2">
                99% of Graduates are Super Awesome!!! The other 1% are Super
                Duper Awesome!!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/adventure2-400w.jpg"
              title="Austria Campus"
            />
            <CardActions>
              <Typography type="subheading" gutterBottom>
                Austria
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Events
              </Typography>
              <List>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Event One" />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Event Two" />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Event Three" />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Event Four" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="display2">
                99% of Graduates are Super Awesome!!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/adventure2-400w.jpg"
              title="Austria Campus"
            />
            <CardActions>
              <Typography type="subheading" gutterBottom>
                Austria
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Masonry>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
