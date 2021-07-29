import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// const navigation =  
function HomeScreen({ navigation }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello Dasha Pikulina</Text>
      {/* <Button title='to Details' onPress={() => navigation.navigate('a', { text: 'hello from HomeScreen' })} /> */}
      <Button title='to Details' onPress={() => navigation.navigate('Details', { text: 'hello from HomeScreen' })} />
    </View>
  )
};

function DetailsScreen({ route, navigation }) {
  // function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(route.params?.text)}</Text>
      <Button title='go Back' onPress={() => navigation.goBack()} />
      <Button title='go Home' onPress={() => navigation.navigate('Home')} />
      <Button title='go Details again...' onPress={() => navigation.push('Details', { text: 'hello from DetailsScreen' })} />
      <Button title='do Nothing'/>


    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 30,
  },
  sectionDescription: {
    // marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export defrrault App;
