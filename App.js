import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [type, setType] = useState('todos')
  const [data, setData] = useState('some data..?')

  useEffect(() => {
    console.log('type changed');
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then(response => response.json())
      // .then(json => console.log(JSON.stringify(json)))
      .then(json => setData(JSON.stringify(json, null, 4)))
  }, [type])

  return (
    <View style={styles.sectionContainer}>
      <Text>Ресурс: {type}</Text>
      <Button title='Пользователи' onPress={() => setType('users')} />
      <Button title='Список дел' onPress={() => setType('todos')} />
      <Button title='Посты' onPress={() => setType('posts')} />
      <Text>{data}</Text>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <Button title='to Details' onPress={() => navigation.navigate('Details', { text: 'hello from HomeScreen' })} />
    </View>
  )
};

function DetailsScreen({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(route.params?.text)}</Text>
      <Button title='go Back' onPress={() => navigation.goBack()} />
      <Button title='go Home' onPress={() => navigation.navigate('Home')} />
      <Button title='go Details again...' onPress={() => navigation.push('Details', { text: 'hello from DetailsScreen' })} />
      <Button title='do Nothing' />


    </View>
  );
}

export default function App() {
  console.log('App rendered')

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
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export defrrault App;
