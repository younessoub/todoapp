import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Platform, StatusBar } from 'react-native';
import Task from './components/task';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
  
    setTasks([...tasks, task]);
    setTask('');
  }
  
  const removeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.enterTask}> 
        <TextInput style={styles.taskInput}  placeholder='Enter a Task' value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity style={styles.addTask} onPress={() => handleAddTask()}>
          <Text style={styles.addTaskButton}>+</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.tasks}>
        {
          tasks.map((item, index) => {
            return (
    
              <View style={styles.task}>
                <Task key={index} text={item} />
                <View>
                  <MaterialCommunityIcons name="delete-outline" size={24} color="#e74c3c" onPress={() => removeTask(index)}/>
                </View>
              </View>
            );
          })
        }

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3436',
    
  },
  enterTask :{
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
  },
  taskInput:{
    backgroundColor:'#dfe6e9',
    width:'80%',
    borderRadius: 10,
    paddingHorizontal:5,
  },
  addTask: {
    backgroundColor: '#dfe6e9',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  addTaskButton:{
    flex:1,
    fontSize:25,
  },
  tasks :{
    // borderColor: 'red',
    // borderWidth: 1,
    marginHorizontal : 10,
    marginTop:30,
  },
  task: {
    backgroundColor: '#2c3e50' ,
    width: '100%',
    minHeight: 50,
    marginBottom : 20,
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
  },

});
