//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';
// create a component
class App extends Component {
  constructor(){
    super();
    this.state = {
      todoInput:'',
      todos: [
        {id: 0, title: 'Take out The trash', done: false},
        {id: 1, title: 'Make Dineer', done: false}
      ]
    }
  }
  addNewTodo(){
    let todos = this.state.todos
    todos.unshift({
      id: todos.length +1,
      todo: this.state.todoInput,
      done: false
    });
    this.setState({
      todos,
      todoInput:''
    });
  }
  
  render() {
    //condition to check what platform 
    const statusbar = (Platform.OS == 'ios') ?    <View style={styles.statusbar}></View> : <View></View>;
    return (
      <View style={styles.container}>
      {statusbar}
      <Header title="Taks App" />

     <InputBar 
     textChange ={todoInput => this.setState({todoInput})}
     addNewTodo={() => this.addNewTodo()}
      />
  <FlatList
  data={this.state.todos}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item, index}) => {
    return (
      <TodoItem todoItem={item}/>
    )
  }} 
  />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#00a8ff',
    height: 40
  }
});

//make this component available to the app
export default App;
