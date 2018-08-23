// eslint-disable-next-line
/* global fetch FormData */
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Dialog from '@material-ui/core/Dialog'

class Inquiry extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      studentType: ''
    },
    loadingDialogOpen: false,
    resultDialogOpen: false,
    resultDialogText: null,
    resultDialogSuccess: true,
    canSubmit: false
  }

  handleChange = name => event => {
    const target = event.target
    const value = target.value
    const name = target.name
    const form = Object.assign({}, this.state.form)
    form[name] = value

    this.setState({ form })
  }
  handleFormData = async () => {
    const data = new FormData()
    for (const [key, val] of Object.entries(this.state.form)) {
      data.append(key, val)
    }

    this.setState({ loadingDialogOpen: true })

    try {
      const response = await fetch('/inquiry-submit', {
        method: 'post',
        body: data
      }).then(res => res.json())

      if (!response.success) throw response.status

      this.setState({
        resultDialogOpen: true,
        resultDialogSuccess: true,
        resultDialogText: 'Your service request was sent successfully.'
      })
    } catch (err) {
      const msg =
        typeof err === 'string'
          ? err
          : 'An error occurred while sending the request.'
      this.setState({
        resultDialogOpen: true,
        resultDialogSuccess: false,
        resultDialogText: msg
      })
    }

    this.setState({ loadingDialogOpen: false })
  }
  handleDialogClose = () => {
    this.setState({ resultDialogOpen: false })
  }
  render () {
    const { classes } = this.props
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="first-name"
            label="First Name"
            className={classes.textField}
            value={this.state.form.firstName}
            name="firstName"
            onChange={this.handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="last-name"
            label="Last Name"
            className={classes.textField}
            value={this.state.form.lastName}
            name="lastName"
            onChange={this.handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={this.state.form.Email}
            name="email"
            onChange={this.handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {' '}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="student-type">Student Type</InputLabel>
            <Select
              value={this.state.form.studentType}
              onChange={this.handleChange}
              inputProps={{
                name: 'studentType',
                id: 'student-type'
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="undergraduate">Undergraduate</MenuItem>
              <MenuItem value="graduate">Graduate</MenuItem>
              <MenuItem value="online">Online</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="outlined"
              onClick={this.handleFormData}
              label="Submit"
              type="submit"
              id="submit-button"
              // buttonStyle={{
              //   cursor: this.state.canSubmit ? 'pointer' : 'not-allowed'
              // }}
              // disabled={!this.state.canSubmit}
            >
              Submit
            </Button>
          </div>
        </Grid>
        <Dialog title="Loading..." modal open={this.state.loadingDialogOpen}>
          Sending...
        </Dialog>
        <Dialog
          title={this.state.resultDialogSuccess ? 'Done' : 'Error'}
          modal={false}
          open={this.state.resultDialogOpen}
          onRequestClose={this.handleDialogClose}
          actions={[
            <Button
              key="1"
              label="Ok"
              onTouchTap={this.handleDialogClose}
              variant="flat"
              keyboardFocused
            />
          ]}
        >
          {this.state.resultDialogText}
        </Dialog>
      </Grid>
    )
  }
}

const styles = theme => ({
  container: {
    maxWidth: '600px',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
})

export default withStyles(styles)(Inquiry)
