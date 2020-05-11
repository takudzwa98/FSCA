import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(todoInput) => props.textChange(todoInput)}
        value={props.todoInput}
      />
    
      <TouchableOpacity style={styles.addButton} onPress={props.addNewNote}>
        <Text style={styles.addButtonText}>NOTE</Text>
      </TouchableOpacity>
     
 
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: .1
    
  },
  input: {
    backgroundColor: '#FFF',
    flex: 1,
    fontSize: 30,
    height: 55,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#171717',
    shadowOpacity: 1,
  },
  addButton: {
    width: 100,
    backgroundColor: '#00a8ff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#171717',
    shadowOpacity: 1,
  },
  addButtonText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700'
  }
})

export default InputBar;