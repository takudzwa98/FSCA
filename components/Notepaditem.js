import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class NotepadItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const notepadItem = this.props.notepadItem;

    return (
      <TouchableOpacity
        style={styles.notepadItem}
        onPress={() => this.props.toggleDone()}
      >
        <Text style={(notepadItem.done) ? { color: '#AAAAAA' } : { color: '#313131' }}>
          { notepadItem.title }
        </Text>

        <Button
          title="X"
          color={(notepadItem.done) ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)' }
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  notepadItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  }
})