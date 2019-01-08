import React from 'react'
import { Button } from 'reactstrap'

const DefaultButton = ({
  title, styling, handleClick, navTo, disableMe,
}) => (
  <Button className={ styling } onClick={ handleClick } href={ navTo } disabled={ disableMe }>
    { title }
  </Button>
)

export default DefaultButton
