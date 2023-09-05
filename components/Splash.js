import {React, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      Auth().onAuthStateChanged(user => {
        const routeName = user != null ? 'Home' : 'Login';
        // props.navigation.navigate(routeName);

        props.navigation.dispatch(StackActions.replace(routeName));
      });
    }, 2000);
  }, [props.navigation]);

  return (
    <View style={styles.bg}>
      <Text style={styles.txt}>Splash Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 50,
  },
});
