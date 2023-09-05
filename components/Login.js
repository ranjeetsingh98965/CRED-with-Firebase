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

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const UserLogin = async () => {
    try {
      if (email != null && password != null) {
        const isUserLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );

        setEmail('');
        setPassword('');
        console.warn('Login Successfully');
        props.navigation.dispatch(
          StackActions.replace('Home', {
            email: isUserLogin.user.email,
            uid: isUserLogin.user.uid,
          }),
        );
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
        <Text style={styles.text}>SIGN IN</Text>

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
          <Button title="Login" onPress={UserLogin} />
        </View>

        <View style={styles.login}>
          <Text>Don't have account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.loginText}> Register Now</Text>
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
