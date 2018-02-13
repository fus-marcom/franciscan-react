import React from 'react'
import Card, { CardMedia, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Button from 'material-ui/Button'
import Layout from '../components/Layout'
import Grid from 'material-ui/Grid'
import withRoot from '../components/withRoot'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Masonry from 'react-masonry-component'
import ProfileCard from '../components/ProfileCard'

const styles = theme => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundImage: 'url(https://unsplash.it/1200/800?image=1062)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    flexDirection: 'column',
    textAlign: 'center'
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
  gridItemFix: {
    width: '100%',
    padding: '16px'
  },
  avatarBig: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px'
    }
  },
  listItemTextBig: {
    fontSize: '34px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  videoIframe: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    border: 'none'
  },
  videoIframeContainer: {
    width: '100%',
    height: 0,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '56.25%'
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
      <Grid container style={{ width: '100%' }}>
        <Grid item className={classes.heroBtn} xs={12}>
          <Button color="secondary" raised style={{ width: '192px' }}>
            Apply
          </Button>
        </Grid>
        <Grid
          item
          className={classes.heroBtn}
          xs={6}
          style={{ justifyContent: 'flex-end' }}
        >
          <Button color="secondary" raised>
            Inquire
          </Button>
        </Grid>
        <Grid
          item
          className={classes.heroBtn}
          xs={6}
          style={{ justifyContent: 'flex-start' }}
        >
          <Button color="secondary" raised>
            Visit
          </Button>
        </Grid>
      </Grid>
    </div>
    <div className={classes.heroCards}>
      <Masonry>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="display1">
                99% of Graduates are Super Awesome!!! The other 1% are Super
                Duper Awesome!!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <ProfileCard
            profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Students/Noah_Fisher_landing_v2.jpg"
            profileImgTitle="Noah Fisher"
            profileType="Student Profile"
            profileName="Noah Fisher"
            content="I first learned about Franciscan from some people at my parish
                who studied here. They recommended I check it out, but I wasn’t
                so sure. When I visited, though, I was blown away by the people
                I met; they were so genuine and helpful. They were the biggest
                reason I decided to come to Franciscan."
            profileLink="/studentprofiles/noah-fisher"
          />
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
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
            <CardMedia
              src="https://www.youtube.com/embed/HdPhaJFcLbs?rel=0"
              component="iframe"
              className={classes.videoIframe}
            />
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="display2">
                99% of Graduates are Super Awesome!!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/adventure2-400w.jpg"
              title="Austria Campus"
            />
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Latest Posts
              </Typography>
              <List>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText
                    primary="Post One"
                    secondary="This is some secondary text!"
                  />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Post Two" />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Post Three" />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Post Four" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Featured Staff Member
              </Typography>
              <List>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/022/248/207e4f5.jpg"
                    className={classes.avatarBig}
                  />
                  <ListItemText
                    primary="Thomas Crowe"
                    secondary="Just look at that beard. He obviously knows what he is doing."
                    className={classes.listItemTextBig}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/adventure2-400w.jpg"
              title="Austria Campus"
            />
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Featured Staff Member
              </Typography>
              <List>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/022/248/207e4f5.jpg"
                    className={classes.avatarBig}
                  />
                  <ListItemText
                    primary="Thomas Crowe"
                    secondary="Just look at that beard. He obviously knows what he is doing."
                    className={classes.listItemTextBig}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Featured Staff Member
              </Typography>
              <List>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/022/248/207e4f5.jpg"
                    className={classes.avatarBig}
                  />
                  <ListItemText
                    primary="Thomas Crowe"
                    secondary="Just look at that beard. He obviously knows what he is doing."
                    className={classes.listItemTextBig}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Featured Staff Member
              </Typography>
              <List>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/022/248/207e4f5.jpg"
                    className={classes.avatarBig}
                  />
                  <ListItemText
                    primary="Thomas Crowe"
                    secondary="Just look at that beard. He obviously knows what he is doing."
                    className={classes.listItemTextBig}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
            <CardMedia
              src="https://www.youtube.com/embed/HdPhaJFcLbs?rel=0"
              component="iframe"
              className={classes.videoIframe}
            />
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Latest Posts
              </Typography>
              <List>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText
                    primary="Post One"
                    secondary="This is some secondary text!"
                  />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Post Two" />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Post Three" />
                </ListItem>
                <ListItem dense button className={classes.listItem}>
                  <Avatar
                    alt="Random"
                    src="https://picsum.photos/200/200/?random"
                  />
                  <ListItemText primary="Post Four" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Masonry>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
