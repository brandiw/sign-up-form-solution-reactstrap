import React, { Component } from 'react'
import {
  Container, Row, FormGroup, Label, CustomInput, Form,
} from 'reactstrap'
import { TextInput, DefaultButton } from './components'
import Logo from './assets/generalassembly-logo.png'
import './App.css'

class Home extends Component {
  file = null

  state = {
    name: '',
    email: '',
    password: '',
    photoURL: '',
    objectUrl: '',
    file: '',
  }

  handleFileChange = async (event) => {
    const file = event.currentTarget.files[ 0 ]
    const objectUrl = URL.createObjectURL(file)
    await this.setState({ objectUrl })
    this.file = file
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const {
      name, email, password, photo, file,
    } = this.state
    return (
      <div className="Home screen">
        <img src={ Logo } width="200" alt="General Assembly Logo" />
        <Container className="sign-up-form">
          <Form onSubmit={ this.handleSubmit }>
            <Row className="sign-up-title">SIGN UP</Row>
            <Row className="centered-row">
              <FormGroup className="file-upload">
                <Label for="exampleCustomFileBrowser">Choose a Profile Picture *</Label>
                <CustomInput
                  type="file"
                  id="photo"
                  name="photo"
                  label=""
                  value={ photo }
                  onChange={ this.handleFileChange }
                />
              </FormGroup>
            </Row>
            <Row>
              <p>{ file.name }</p>
            </Row>
            <Row className="centered-row">
              <TextInput
                text="Name *"
                id="name"
                name="name"
                value={ name }
                handleChange={ e => this.setState({ name: e.target.value }) }
                feedbackText="name"
                xsColSize={ 10 }
                lgColSize={ 8 }
              />
            </Row>
            <Row className="centered-row">
              <TextInput
                text="Email *"
                id="email"
                name="email"
                value={ email }
                handleChange={ e => this.setState({ email: e.target.value }) }
                feedbackText="valid email"
                placeholder="myemail@gmail.com"
                xsColSize={ 10 }
                lgColSize={ 8 }
              />
            </Row>
            <Row className="centered-row">
              <TextInput
                text="Password *"
                xsColSize={ 10 }
                lgColSize={ 8 }
                id="password"
                name="password"
                type="password"
                value={ password }
                feedbackText="a secure password with letters, numbers and characters"
                handleChange={ e => this.setState({ password: e.target.value }) }
              />
            </Row>
            <Row className="button-row">
              <DefaultButton
                styling="sign-in-button"
                title="SIGN UP"
                value="SIGN UP"
                type="submit"
              />
            </Row>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Home
