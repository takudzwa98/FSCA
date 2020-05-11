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
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#000',
    fontSize: 40,
    fontWeight: '900',
    shadowOffset: { width: 0, height: 7 },
    shadowColor: '#171717',
    shadowOpacity: 1,
    fontFamily: 'Times New Roman'

   
  
  }
  
});

export default Header;