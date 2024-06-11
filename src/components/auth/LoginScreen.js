import React, {useContext, useEffect, useState} from 'react';
import {Alert} from "react-native";
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import {signIn} from "../../lib/auth";
import {AuthContext} from "../../context/AuthContext";
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



    const LoginHandler = () => {
        if (!email) {
            Alert.alert("로그인에 실패했어요!", "이메일을 입력해주세요.");
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert("로그인에 실패했어요!", "올바른 이메일 형식을 입력해주세요.");
            return;
        }
        if (!password) {
            Alert.alert("로그인에 실패했어요!", "비밀번호를 입력해주세요.");
            return;
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed in!');
                loginContext();
                navigation.replace('HomeStack');
            })
            .catch(e => {
                console.error(e);
                const alertMessage = resultMessages[e.code] ?
                    resultMessages[e.code] : "알 수 없는 이유로 로그인에 실패하였습니다.";
                Alert.alert("로그인에 실패했어요!", alertMessage);
            });
    };

    return (
        <View className="w-screen h-screen p-[50px] bg-white flex justify-center items-center font-sans">
            <View className="w-full h-auto m-0 mx-auto">

                <View className="flex flex-row items-center justify-center gap-[6px]">
                    <Image
                        source={require('@assets/inner_logo.png')}
                    />
                    <View className="h-full ">
                        <Text className="text-[24px] font-semibold color-[#232433] leading-none">하-플</Text>
                        <Text className="text-[14px] color-[#51525C] font-medium leading-none">우리들의 <Text className="color-[#FF0606] leading-none">핫 플</Text>레이스</Text>
                    </View>
                </View>

                <View>
                    <Text className="color-[#000000] font-bold text-[17px]">안녕하세요 : )</Text>
                    <Text className="color-[#000000] font-bold text-[17px]">하플입니다.</Text>
                </View>

                <View>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        className="font-sans"
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        className="font-sans"
                    />
                    <Button title="Login" onPress={LoginHandler}/>
                </View>

                <View className="flex flex-row gap-[14px] items-center justify-center">
                    <Text>아직 회원이 아니세요?</Text>
                    <Text onPress={()=>navigation.navigate('SignUp')}>회원가입하기</Text>
                </View>


            </View>
        </View>
    );
}


export default LoginScreen;