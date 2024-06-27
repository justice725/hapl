import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const resultMessages = {
    "auth/wrong-password": "잘못된 비밀번호입니다.",
    "auth/user-not-found": "존재하지 않는 계정입니다.",
    "auth/invalid-email": "유효하지 않은 이메일 주소입니다."
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

    login(email, password)
      .then(() => {
        console.log('로그인 성공');
        navigation.navigate('HomeStack');
      })
      .catch(e => {
        console.error(e);
        const alertMessage = resultMessages[e.code] || "알 수 없는 이유로 로그인에 실패하였습니다.";
        Alert.alert("로그인에 실패했어요!", alertMessage);
      });
  };

  return (
    <View className="w-screen h-screen p-[50px] bg-white flex justify-center items-center font-sans ">
      <View className="w-full h-auto m-0 mx-auto">
        <View className="flex flex-row items-center justify-center gap-[6px] mb-[50px]">
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

        <View className="w-full mb-[20px] flex flex-col gap-[8px] justify-center items-center mt-[16px]">
          <TextInput
            placeholder="아이디를 입력하세요."
            value={email}
            onChangeText={setEmail}
            className="w-full font-sans h-[40px] box-border border-[1px] border-solid border-[#F0F3F5] text-[14px] text-[#9EA8B3] px-[8px] rounded-[5px]"
          />
          <TextInput
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="w-full font-sans h-[40px] box-border border-[1px] border-solid border-[#F0F3F5] text-[14px] text-[#9EA8B3] px-[8px] rounded-[5px]"
          />
          <TouchableOpacity
            className="w-full box-border h-[40px] bg-[#4F5FF5] rounded-[5px] flex justify-center items-center"
            onPress={LoginHandler}
          >
            <Text className="text-white font-bold text-[18px] leading-none">로그인</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-[20px] justify-center items-center">
          <Text className="text-[#51525C] text-[14px]">아이디 찾기</Text>
          <View className="w-[1px] h-[16px] bg-[#51525C]"></View>
          <Text className="text-[#51525C] text-[14px]">비밀번호 찾기</Text>
        </View>

        <View className="flex flex-row gap-[14px] items-center justify-center mt-[76px]">
          <Text className="text-[#51525C] text-[14px]">아직 회원이 아니세요?</Text>
          <Text className="text-[#5565F6] text-[14px]" onPress={() => navigation.navigate('SignUp')}>회원가입하기</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
