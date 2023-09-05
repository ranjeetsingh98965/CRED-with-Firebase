import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import database from '@react-native-firebase/database';

export default function RealtimeDatabase() {
  const [myData, setMyData] = useState('');

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      const data = await database().ref('users/1').once('value');
      //   console.log(data);
      setMyData(data.val());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>name: {myData.name}</Text>
      <Text>name: {myData.age}</Text>
    </View>
  );
}
