import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

export default function Signup(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createUser = async () => {
    try {
      if (email != null && password != null) {
        const isUserCreated = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        //   console.log(isUserCreated);
        setEmail('');
        setPassword('');
        console.warn('Account Created Successfully');
        props.navigation.dispatch(StackActions.replace('Home'));
      } else {
        console.warn('Please enter all the fields!');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.bg}>
      <View style={styles.body}>
        <Text style={styles.text}>SIGN UP</Text>

        <TextInput
          style={{...styles.inputField, marginTop: 40}}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <View style={styles.btn}>
          <Button title="Create Account" onPress={createUser} />
        </View>

        <View style={styles.login}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.loginText}> Login now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 4,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    marginTop: 10,
    color: 'dodgerblue',
    borderBottomWidth: 2,
    borderColor: 'dodgerblue',
  },
  inputField: {
    borderWidth: 2,
    marginVertical: 10,
    width: '90%',
    paddingLeft: 10,
    borderColor: 'dodgerblue',
    borderRadius: 10,
  },
  btn: {
    width: '60%',
    marginTop: 20,
  },
  login: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'dodgerblue',
  },
});
