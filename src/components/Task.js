import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const Task = ({task, onToggle, onDelete}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Text style={{textDecorationLine: task.completed ? 'line-through' : 'none'}}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Task
