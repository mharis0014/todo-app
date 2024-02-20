import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

import theme from '../themes/theme'
import {styles} from '../styles/styles'

const CustomButton = ({title, onPress, color}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, {backgroundColor: color ? color : theme.colors.primaryColor}]}
      onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
