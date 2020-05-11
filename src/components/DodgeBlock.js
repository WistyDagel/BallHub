import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default class DodgeBlock extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Dodge Block Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#272727',
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center'
    }
});