import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';


const Task = (props) => {
  
  const [pressed, setPressed] = useState(true);

  const handleTextPressed = () => {
    setPressed(pressed? false:true);
  }

  return (
    
    <View style={styles.taskContainer} >
      
      <Text style={pressed? styles.taskText:styles.taskTextDone}  onPress={() => handleTextPressed()}>{props.text}</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    width:'87%',
  },
  taskText: {
    color:'white',
    fontSize:18,
  },
  taskTextDone: {
    fontSize:18,
    color:'white',
    textDecorationLine: 'line-through',
    opacity: 0.3,
  },
});

export default Task;