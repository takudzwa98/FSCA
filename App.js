import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputText';
import NotepadItem from './components/Notepaditem';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      notepadInput: '',
      todos: [
        { id: 0, title: 'Welcome', done: false },
        { id: 1, title: 'Add your Song', done: false }
      ]
    }
  }

  addNewTodo () {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.notepadInput,
      done: false
    });

    this.setState({
      todos: todos,
      notepadInput: ''
    });
  }

  toggleDone (item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    })

    this.setState({todos});
  }

  removeTodo (item) {
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id);

    this.setState({todos});
  }

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="Notepad" />

        <InputBar
          addNewTodo={() => this.addNewTodo()}
          textChange={notepadInput => this.setState({ notepadInput })}
          notepadInput={this.state.notepadInput}
        />

        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <NotepadItem notepadItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)} />
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  statusbar: {
    backgroundColor: '#f5f6fa',
    height: 60
  }
});