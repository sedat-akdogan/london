import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import auth  from '../database/firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateInputVal = (val, prop) => {
    if (prop === 'email') setEmail(val);
    else if (prop === 'password') setPassword(val);
  };

  const userLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Enter details to sign in!');
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          console.log('User logged-in successfully!');
          setIsLoading(false);
          setEmail('');
          setPassword('');
          navigation.navigate('Home');
        })
        .catch((error) => setErrorMessage(error.message));
    }
  };

  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => updateInputVal(val, 'email')}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => updateInputVal(val, 'password')}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button
        color="#3740FE"
        title="Login"
        onPress={() => userLogin()}
      />
      <Text style={styles.loginText} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Click here to Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    padding: 15,
    alignSelf: 'center',
    borderColor: '#3740FE',
    borderWidth: 2,
    borderRadius: 10, 
},
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Login;