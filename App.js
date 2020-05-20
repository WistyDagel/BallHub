import * as React from 'react';
import {StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dodge from './src/components/Dodge';
import Sumo from './src/components/Sumo';
import Racer from './src/components/Racer';


function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Button
        title="Dodge"
        onPress={() => navigation.navigate('Dodge')}
      />
      {/* <Button
        title="Sumo"
        onPress={() => navigation.navigate('Sumo')}
      /> */}
      <Button
        title="Racer"
        onPress={() => navigation.navigate('Racer')}
      />
    </View>
  );
}

function DodgeScreen({navigation, route}) {
  return (
    <View>
      <Dodge />
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


function RacerScreen({navigation, route}) {
  return (
    <View>
      <Racer />
    </View>
  )
}


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dodge" component={Dodge} />
        <Stack.Screen name="Sumo" component={Sumo} />
        <Stack.Screen name="Racer" component={Racer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#272727',
    alignItems: 'center', 
    justifyContent: 'center'
  }
});