import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class Evento extends React.Component {
            state = {
            input: 'O React Native é demais!npx '
        }
render() {
    return (
        <View style={estilos.container}>
        <TextInput
        style={estilos.input}
        value={this.state.input}
        onChangeText={text => this.setState({ input: text })}
        />
        </View>
        )
    }
}