import React, {useState, useEffect, useContext}  from 'react';
import { View, Text, Button, TextInput,Image } from 'react-native';

const images = [
  [require('@assets/loading_icon_1.png'), require('@assets/loading_bg_1.png')],
  [require('@assets/loading_icon_2.png'), require('@assets/loading_bg_2.png')],
  [require('@assets/loading_icon_3.png'), require('@assets/loading_bg_3.png')]
];

const LoadingScreen = () => {

const [randomImages, setRandomImages] = useState(null)

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImages(images[randomIndex]);
    }, []);

    return(
        <>

        <View className="flex-1 w-screen h-screen font-sans relative bg-[#FFFFFF] flex flex-col justify-between">

        <View className="flex flex-col w-full justify-end text-end px-[30px] pt-[100px]">
            <Text className="text-[34px] text-[#232433] text-right font-bold">하-플</Text>
            <Text className="text-[17px] text-[#51525C] text-right font-medium">우리들의 핫 플레이스</Text>
        </View>


        {randomImages && (
          <View className="flex flex-col bg-[#FFFFFF]">
            <Image source={randomImages[0]} className="flex m-0 -mb-[20px] ml-[30px]" />
            <Image source={randomImages[1]} className="w-full h-auto flex" />
          </View>
        )}


        </View>

        </>
    )
}


export default LoadingScreen;