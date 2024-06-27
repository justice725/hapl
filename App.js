import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/components/auth/LoginScreen";
import SignUpScreen from "./src/components/auth/SignUpScreen";
import HomeStack from "./src/global/HomeStack";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";
import GlobalHeader from "./src/global/GlobalHeader";

const Stack = createStackNavigator();

const AppNavigator = () => { // 로그인 상태 페이지 분할
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "HomeStack" : "Login"}>
      {isLoggedIn ? (
        <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={({ navigation }) => GlobalHeader(navigation, "회원가입")}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
