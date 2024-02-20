import React, {useState, useEffect} from 'react'

import {View, Text, TextInput, Button, FlatList} from 'react-native'

import StorageService from '../utils/StorageHelper'
import Task from '../components/Task'

import {styles} from '../styles/styles'

const HomeScreen = () => {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const data = await StorageService.getItem('tasks')
    if (data) {
      setTasks(data)
    }
  }

  const saveData = async tasks => {
    await StorageService.saveItem('tasks', tasks)
  }

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {id: Date.now().toString(), text: taskText, completed: false}
      setTasks([...tasks, newTask])
      saveData([...tasks, newTask])
      setTaskText('')
    }
  }

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task,
    )
    setTasks(updatedTasks)
    saveData(updatedTasks)
  }

  const deleteTask = taskId => {
    const filteredTasks = tasks.filter(task => task.id !== taskId)
    setTasks(filteredTasks)
    saveData(filteredTasks)
  }

  return (
    <View style={[styles.fill, styles.p20]}>
      <Text>Welcome to ToDo List App</Text>
      <TextInput
        value={taskText}
        onChangeText={setTaskText}
        placeholder="Enter task..."
        style={styles.input}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task task={item} onToggle={toggleTask} onDelete={deleteTask} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default HomeScreen
