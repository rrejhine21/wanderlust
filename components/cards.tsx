import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    onPress?: () => void;
}

export const NewTitleCards = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
        <Image source={images.japan} className='size-full rounded-2xl' />
        <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0' />
        
        <View className='flex flex-row items-center rounded-full absolute top-5 right-5'>
            <Image source={icons.add} tintColor="white" className='size-5' />
        </View>

        <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
            <Text className='text-xl font-poppins-bold text-white' numberOfLines={1}>My S-Class Hunters</Text>
            <Text className='text-base font-poppins-regular text-white'>Geunseo</Text>
        </View>
    </TouchableOpacity>
  )
}

export const Card = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex-1 w-full p-2.5 rounded-xl bg-[#403A41] shadow-lg shadow-black-100/70 relative'>
            <Image source={images.japan} className='w-full h-32 rounded-xl' />

            <View className="justify-center items-center w-7 h-7 rounded-full bg-[#B09FCA] top-[-3] left-0 absolute">
                <Text className='text-sm font-poppins-bold text-white'>1</Text>
            </View>

            <View className='flex flex-col mt-2'>
                <Text className='text-base font-poppins-semibold text-[#D0CBE2]' numberOfLines={2}>The 11th School Trip</Text>
                <Text className='text-xs font-poppins-regular text-[#766E6C]'>Dohaeneul</Text>
            </View>
        </TouchableOpacity>
    )
}