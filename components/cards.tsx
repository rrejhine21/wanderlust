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
        
        <View className='flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
            <Image source={icons.star} className='size-3.5' />
            <Text className='text-xs font-poppins-semibold text-accent ml-1'>4.4</Text>
        </View>

        <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
            <Text className='text-xl font-poppins-bold text-accent' numberOfLines={1}>My S-Class Hunters</Text>
            <Text className='text-base font-poppins-regular text-accent2'>Geunseo</Text>

            <View className='flex flex-row items-center justify-between w-full'>
                <Image source={icons.add} />
            </View>
        </View>
    </TouchableOpacity>
  )
}

export const Card = () => {
    return (
        <View>
            <Text>Card</Text>
        </View>
    )
}