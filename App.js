import * as React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dodge from './src/components/Dodge';
import Sumo from './src/components/Sumo';
import Racer from './src/components/Racer';


function HomeScreen({ navigation, route }) {
  return (
    <ScrollView style={{backgroundColor: '#292929'}}>

      <View style={styles.container}>

        <Text style={styles.title}>
          Dodge el Block-O's
        </Text>
        <TouchableOpacity style={styles.dodge}
          onPress={() => navigation.navigate('Dodge')}
        >
          <Image source={require('./src/components/images/ballAnimation.gif')}
              style={styles.ballImage}
            />
        </TouchableOpacity>

        <Text style={styles.title}>
          Drive el Car-O
        </Text>
        <TouchableOpacity style={styles.car}
          onPress={() => navigation.navigate('Racer')}
        >
          <Image source={require('./src/components/images/carAnimation.gif')}
            style={styles.carImage}
          />
        </TouchableOpacity>

        <Text style={styles.titleBottom}>
          More Games Coming Soon...
        </Text>
        <Text style={{
          marginBottom: 15,
          fontSize: 15,
          color: '#ffa31a'
          }}>
          Maybe
        </Text>

      </View>
    </ScrollView>
  );
}

function DodgeScreen({navigation, route}) {
  return (
    <View>
      <Dodge />
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
    <NavigationContainer >
      <Stack.Navigator mode="modal" screenOptions={{
        headerTintColor: 'white',
        headerTitle: <Text>Game <Text style={{
          backgroundColor: '#ffa31a',
          color: 'black',
        }}> hub </Text></Text> ,
        headerStyle: { backgroundColor: '#1b1b1b', height: 150 },
        headerTitleStyle: { 
          fontSize: 50, 
          padding: 5
        }
      }}
      >
        <Stack.Screen name="Home Hub" component={HomeScreen} />
        <Stack.Screen name="Dodge" component={Dodge} />
        <Stack.Screen name="Racer" component={Racer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#292929',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  dodge: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    height: 200,
    width: 200,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  ballImage: {
    width: '50%',
    height: '75%'
  },
  car: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    height: 200,
    width: 200,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  carImage: {
    width: '50%',
    height: '75%'
  },
  title: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 35,
    color: '#ffa31a'
  },
  titleBottom: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    color: '#ffa31a'
  }
});