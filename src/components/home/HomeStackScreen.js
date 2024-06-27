import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from "./HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalHeader from "../../global/GlobalHeader"

const HomeStack = createStackNavigator();

/*https://oblador.github.io/react-native-vector-icons/#Ionicons*/

const HomeStackScreen = () => {

    return(
        <HomeStack.Navigator>
            <HomeStack.Screen
              name="Home"
              component={HomeScreen}
              options={({ navigation }) => GlobalHeader(navigation,"홈", "#5565F6", "#ffffff")}
            />

      </HomeStack.Navigator>
  )
}

export default HomeStackScreen;