import * as React from 'react';
import {StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DodgeBlock from './src/components/DodgeBlock';
import Sumo from './src/components/Sumo';

function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Button
        title="DodgeBlock"
        onPress={() => navigation.navigate('DodgeBlock')}
      />
      <Button
        title="Sumo"
        onPress={() => navigation.navigate('Sumo')}
      />
    </View>
  );
}

function DodgeBlockScreen({navigation, route}) {
  return (
    <View>
      <DodgeBlock />
    </View>
  )
}

function SumoScreen({navigation, route}) {
  return (
    <View>
      <Sumo />
    </View>
  )
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DodgeBlock" component={DodgeBlock} />
        <Stack.Screen name="Sumo" component={Sumo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#272727',
    alignItems: 'center', 
    justifyContent: 'center'
  }
});