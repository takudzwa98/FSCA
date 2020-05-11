 
import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList,Image } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputText';
import TodoItem from './components/Notepaditem';
import Footer from './components/Footer';
export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      notesInput: '',
      notes: [
        { id: 0, title: 'Add New Notes', done: false }
        
      ]
    }
  }

  addNewNote () {
    let notes = this.state.notes;

    notes.unshift({
      id: notes.length + 1,
      title: this.state.notesInput,
      done: false
    });

    this.setState({
      notes: notes,
      notesInput: ''
    });
  }

  toggleDone (item) {
    let notes = this.state.notes;

    notes = notes.map((note) => {
      if (note.id == item.id) {
        note.done = !note.done;
      }

      return note;
    })

    this.setState({notes});
  }

  removeTodo (item) {
    let notes = this.state.notes;

    notes = notes.filter((note) => note.id !== item.id);

    this.setState({notes});
  }
  render() {
    return(
      <View style={styles.container}>           
 <Image
 source={require('./assets/Iconh.png')}
 style={styles.Image}
 />
</View>
    );
  }
  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}
          
 <Image
 source={require('./assets/Iconh.png')}
 style={styles.Image}
 />

        <Header title="NotePad" />

        <InputBar
          addNewNote={() => this.addNewNote()}
          textChange={notesInput => this.setState({ notesInput })}
          notesInput={this.state.notesInput}
        />

        <FlatList
          data={this.state.notes}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem  todoItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)} />
            )
          }}
        />

         <Footer/>
      </View>
     
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
   
    
  },
  image: {
    alignItems:'center'
    
   },
   
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 40
  }
});
