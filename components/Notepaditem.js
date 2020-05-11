import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}
      >
    
        <Text style={(todoItem.done) ? { color: '#AAAAAA' } : { color: '#313131' }}>
          { todoItem.title }
        </Text>

        <Button
          title="X"
          color={(todoItem.done) ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)' }
          onPress={() => this.props.removeTodo()}
          
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 40,
    backgroundColor: '#FFF',
    color: '#000'
  }
})