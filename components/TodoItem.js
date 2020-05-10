import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        const TodoItem = this.props.todoItem;
        return(
            <TouchableOpacity style={StyleSheet.todoItem}>
                <Text style ={(todoItem.done) ? { color: '#AAAAAA'} : { color: '#313131'}}>
                    {todoItem.title}
                </Text>
            </TouchableOpacity>
        )
    }
}