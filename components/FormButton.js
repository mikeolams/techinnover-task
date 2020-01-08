import React from 'react'
import { Button } from 'react-native-elements'

const FormButton = ({ title, buttonType, buttonColor,borderRadius, backgroundColor, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{ borderColor:buttonColor, backgroundColor:backgroundColor, borderRadius:borderRadius }}
    titleStyle={{ color: buttonColor }}
  />
)

export default FormButton