import React from 'react'
import {
  Label, Col, FormGroup, Input, FormFeedback,
} from 'reactstrap'

export default class TextInput extends React.Component {
  state = {
    validate: {
      nameState: '',
    },
  }

  validateNotEmpty(event) {
    const { validate } = this.state
    if (event.target.value.length > 0) {
      validate.nameState = 'has-success'
    } else {
      validate.nameState = 'has-danger'
    }
    this.setState({ validate })
  }

  render() {
    const {
      text, id, value, placeholder, name, handleChange, type,
      labelSize, xsColSize, smColSize, disabled,
      feedbackText, invalid, styling, mdColSize, lgColSize,
    } = this.props
    const { validate } = this.state
    return (
      <Col
        xs={ xsColSize }
        sm={ smColSize }
        md={ mdColSize }
        lg={ lgColSize }
        className={ styling }
      >
        <Label sm={ labelSize }>{ text }</Label>
        <FormGroup
          className={ validate.nameState }
        >
          <Input
            type={ type }
            style={ type === 'textarea' ? { height: '300%' } : null }
            value={ value }
            id={ id }
            name={ name }
            onChange={ (e) => {
              this.validateNotEmpty(e)
              handleChange(e)
            }
            }
            valid={ validate.nameState === 'has-success' }
            invalid={ invalid || (validate.nameState === 'has-danger') }
            placeholder={ placeholder }
            disabled={ disabled }
          />
          <FormFeedback>
            { feedbackText && `Please enter ${ feedbackText }.` }
          </FormFeedback>
        </FormGroup>
      </Col>
    )
  }
}
