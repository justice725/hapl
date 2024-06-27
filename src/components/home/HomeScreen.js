import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from "../../context/AuthContext";

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const LogoutHandler = () => {
    logout()
      .then(() => {
        console.log('로그아웃 성공');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('로그아웃 실패', error);
      });
  };

  return (
    <View className="font-sans">
      <Text>home</Text>
      <Text>{user?.email}</Text>
      <Button title="로그아웃" onPress={LogoutHandler} />
    </View>
  );
};

export default HomeScreen;
