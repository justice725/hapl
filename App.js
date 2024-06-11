import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/components/auth/LoginScreen";
import SignUpScreen from "./src/components/auth/SignUpScreen";
import HomeScreen from "./src/components/HomeScreen";
import DetailsScreen from "./src/components/DetailsScreen";
import {AuthContext, AuthProvider} from "./src/context/AuthContext";
import { TailwindProvider } from 'nativewind';

const Stack = createStackNavigator();








const HomeStack = () => ( // 로그인 이후 페이지 분할
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);


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
