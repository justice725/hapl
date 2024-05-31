import React, { useState } from 'react';
import { Alert } from "react-native";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signIn } from "../lib/auth";

const LoginScreen = ({ navigation }) => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const resultMessages = {
    "auth/wrong-password": "잘못된 비밀번호입니다.",
    "auth/user-not-found": "존재하지 않는 계정입니다.",
    "auth/invalid-email": "유효하지 않은 이메일 주소입니다."
  };

  const signInSubmit = async () => {
    const { email, password } = form;
    const info = { email, password };
    try {
      const { user } = await signIn(info);
      console.log(user);
      // 로그인 성공 시 메인 화면으로 이동
      navigation.replace('Main');
    } catch (e) {
      const alertMessage = resultMessages[e.code] ?
        resultMessages[e.code] : "알 수 없는 이유로 로그인에 실패하였습니다.";
      Alert.alert("로그인 실패", alertMessage);
    }
  }

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
      />
      <Button title="Login" onPress={signInSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default LoginScreen;