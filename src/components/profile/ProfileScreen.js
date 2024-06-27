import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from "../../context/AuthContext";

const ProfileScreen = ({ navigation }) => {
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
      <Text>설정 페이지</Text>
      <Text>{user?.email}</Text>
      <Button title="로그아웃" onPress={LogoutHandler} />
    </View>
  );
};

export default ProfileScreen;
