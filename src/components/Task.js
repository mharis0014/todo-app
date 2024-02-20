import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

import theme from '../themes/theme'
import {styles} from '../styles/styles'
import {screen_width} from '../utils/Dimensions'

const Task = ({task, onToggle, onDelete, onEdit}) => {
  return (
    <TouchableOpacity
      style={[
        styles.rowItem,
        {backgroundColor: task.completed ? theme.colors.disabled : theme.colors.white},
      ]}
      activeOpacity={0.7}
      onPress={() => onToggle(task.id)}>
      <Text
        style={{
          width: screen_width * 0.6,
          textDecorationLine: task.completed ? 'line-through' : 'none',
          color: task.completed ? theme.colors.charcoal : theme.colors.black,
        }}>
        {task.heading}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onEdit(task.id)}>
          <AntDesign name="edit" size={16} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <AntDesign name="delete" size={16} color={theme.colors.dangerColor} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default Task
