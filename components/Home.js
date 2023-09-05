import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

export default function Home(props) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit', 'Are you sure you want to go back', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>{auth().currentUser.email}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          await auth().signOut();
          props.navigation.dispatch(StackActions.replace('Login'));
        }}>
        <Text style={styles.btnTxt}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 20,
    backgroundColor: 'red',
    padding: 10,
    width: 120,
    elevation: 5,
    marginTop: 30,
  },
  btnTxt: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
