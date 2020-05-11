import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>{ props.title }  ©Takudzwa Karigomba</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FFF',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontStyle:'italic',
    fontWeight: '900',
    textTransform: 'uppercase',
  
    alignItems:'center'
  }
  
});

export default Footer;