import React from 'react';
// import firestore from '@react-native-firebase/firestore';
// import RealtimeDatabase from './firestore/RealtimeDatabase';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './components/Splash';

const App = () => {
  const Stack = createNativeStackNavigator();

  //   const [myData, setMyData] = useState(null);

  //   useEffect(() => {
  //     getDataFromFirebase();
  //   }, []);

  //   const getDataFromFirebase = async () => {
  //     try {
  //       const data = await firestore()
  //         .collection('users')
  //         .doc('WzcIDKy5canWmJo3uhTy')
  //         .get();
  //       console.log(data._data);
  //       setMyData(data._data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      {/* **For Firestore** */}
      {/* <View>
        <Text>Name: {myData ? myData.name : 'Loading...'}</Text>
        <Text>Age: {myData ? myData.age : 'Loading...'}</Text>
        <Text>
          Hobby: {myData ? myData.hobby.map(item => `${item}, `) : 'Loading...'}
        </Text>
      </View>


      {/* **For RealTime DataBase** */}
      {/* <RealtimeDatabase /> */}

      {/* **Signup Screen** */}
      {/* <Signup /> */}

      {/* **LogIn Screen** */}
      {/* <Login /> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
