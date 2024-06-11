import React, {useContext, useEffect, useState} from 'react';
import {Alert} from "react-native";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {signIn} from "../lib/auth";
import {AuthContext} from "../context/AuthContext";
import auth from "@react-native-firebase/auth";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser);
        return subscriber; // unsubscribe on unmount
    }, []);

    const {loginContext} = useContext(AuthContext); // 로그인 상태관리

    const resultMessages = {
        "auth/wrong-password": "잘못된 비밀번호입니다.",
        "auth/user-not-found": "존재하지 않는 계정입니다.",
        "auth/invalid-email": "유효하지 않은 이메일 주소입니다."
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }; // 이메일 유효성 검사



    const handleLogin = () => {
        if (!email) {
            Alert.alert("입력 오류", "이메일을 입력해주세요.");
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert("입력 오류", "올바른 이메일 형식을 입력해주세요.");
            return;
        }
        if (!password) {
            Alert.alert("입력 오류", "비밀번호를 입력해주세요.");
            return;
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed in!');
                loginContext();
                navigation.replace('Main');
            })
            .catch(e => {
                console.error(e);
                const alertMessage = resultMessages[e.code] ?
                    resultMessages[e.code] : "알 수 없는 이유로 로그인에 실패하였습니다.";
                Alert.alert("로그인 실패", alertMessage);
            });
    };

    return (
        <View>
            <Text>Login</Text>
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
            <Button title="Login" onPress={handleLogin}/>
        </View>
    );
}


export default LoginScreen;