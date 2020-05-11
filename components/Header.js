import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#000',
    fontSize: 60,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
  
});

export default Header;