import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from "../../context/AuthContext";
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
const { user } = useContext(AuthContext);

  return (
    <View className="font-sans">
      <Text>home</Text>
      <Text>{user?.email}</Text>
    </View>
  );
};

export default HomeScreen;
