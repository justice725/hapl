import React from 'react';
import { TouchableOpacity, Alert, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeaderLeft = ({ navigation, arrowColor }) => {
    const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert(
        "하플을 종료하시겠습니까?",
        "",
        [
          {
            text: "아니오",
            onPress: () => null,
            style: "cancel"
          },
          {
            text: "예",
            onPress: () => BackHandler.exitApp()
          }
        ]
      );
    }
  };

return(
    <TouchableOpacity onPress={handleGoBack}>
        <Icon name="chevron-back" size={24} color={arrowColor || "#374957"} />
      </TouchableOpacity>
)
}


const GlobalHeader = (navigation, headerTitle, backgroundColor, arrowColor) => ({
    headerTitle:headerTitle,
    headerTitleAlign: 'center',
    headerLeft: () => <CustomHeaderLeft navigation={navigation} arrowColor={arrowColor} />,
    headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: backgroundColor || "#E3E4E8",
        backgroundColor: backgroundColor || "#ffffff"
      },
      headerTitleStyle: {
          color: arrowColor || "#222222",
        }
})

export default GlobalHeader