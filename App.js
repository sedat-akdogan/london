// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Home from './src/components/Home';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}