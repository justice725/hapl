import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
    const {logoutContext} = useContext(AuthContext);

    const LogoutHandler = () => {
        auth()
          .signOut()
          .then(() => {
            console.log('User signed out!');
            logoutContext();
            navigation.replace('Login');
          })
          .catch(error => {
            console.error(error);
          });
      };

return(

<View className="font-sans">
    <Text>home</Text>
    <Button title="로그아웃" onPress={LogoutHandler} />
</View>
)

}

export default HomeScreen;