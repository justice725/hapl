import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Button, TextInput,Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/components/auth/LoginScreen";
import SignUpScreen from "./src/components/auth/SignUpScreen";
import HomeScreen from "./src/components/home/HomeScreen";
import DetailsScreen from "./src/components/DetailsScreen";
import Loading from "./src/components/LoadingScreen";
import {AuthContext, AuthProvider} from "./src/context/AuthContext";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();








const HomeStack = () => { // 로그인 이후 페이지 분할

return (
<>
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route})=>({
        tabBarIcon: ({ focused }) => {
            let iconName;
            let iconSource;

            if(route?.name === 'Home') {
                iconSource = focused
                ? require('@assets/home_active.png')
                : require('@assets/home.png')
            } else if (route?.name === 'Chat') {
                iconSource = focused
                ? require('@assets/chat_active.png')
                : require('@assets/chat.png')
            } else if (route?.name === 'Community') {
                iconSource = focused
                ? require('@assets/community_active.png')
                : require('@assets/community.png')
            } else if (route?.name === 'Profile') {
                iconSource = focused
                ? require('@assets/profile_active.png')
                : require('@assets/profile.png')
            }

            return <Image source={iconSource} style={{ width: 24, height: 24 }} />;

        },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Chat" component={DetailsScreen} />
    <Tab.Screen name="Community" component={DetailsScreen} />
    <Tab.Screen name="Profile" component={DetailsScreen} />
  </Tab.Navigator>

  </>
  )
};


const AppNavigator = () => { // 로그인 상태 페이지 분할
  const { isLoggedIn } = useContext(AuthContext);

  return (

    <Stack.Navigator initialRouteName={isLoggedIn ? "HomeStack" : "Login"}>

      {isLoggedIn ? (
        <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
      ) : (
      <>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>

  );
};




const App = () => {
  // 로그인 페이지에 추가
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      });
  };*/



  return (
    <>

      <AuthProvider>
      <NavigationContainer>

        <AppNavigator />

      </NavigationContainer>
    </AuthProvider>

    </>
  );
};

export default App;


/*
<View>
      {user ? (
        <View>
          <Text>Welcome, {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>*/
