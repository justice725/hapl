import React, { useEffect } from 'react';
import { Alert, BackHandler, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../components/home/HomeStackScreen';
import DetailsScreen from '../components/DetailsScreen';
import ProfileScreen from '../components/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const useBackButtonHandler = (navigation) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        Alert.alert(
          "하플을 종료하시겠습니까?",
          "",
          [
            {
              text: "아니오",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "예",
              onPress: () => BackHandler.exitApp()
            }
          ]
        );
        return true; // Prevent default behavior
      }
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);
};

const HomeStack = ({ navigation }) => {
  useBackButtonHandler(navigation);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused
              ? require('@assets/home_active.png')
              : require('@assets/home.png');
          } else if (route.name === 'Chat') {
            iconSource = focused
              ? require('@assets/chat_active.png')
              : require('@assets/chat.png');
          } else if (route.name === 'Community') {
            iconSource = focused
              ? require('@assets/community_active.png')
              : require('@assets/community.png');
          } else if (route.name === 'Setting') {
            iconSource = focused
              ? require('@assets/profile_active.png')
              : require('@assets/profile.png');
          }

          return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={DetailsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Community" component={DetailsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Setting" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default HomeStack;
