import { icons } from '@/constants/icons'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

const Explore = () => {
  return (
    <SafeAreaView className="flex-1 bg-dark-200">
      <View className="w-full h-14 flex flex-row justify-between items-center pl-5 pr-5">        
        <Text className="font-poppins-bold text-2xl text-accent">EXPLORE</Text>
        <View className="flex flex-row">
          <Image source={icons.info} tintColor="#B09FCA" className="size-7 mr-3.5" />
          <Image source={icons.notifs} tintColor="#B09FCA" className='size-7' />
        </View>        
      </View>
    </SafeAreaView>
  )
}

export default Explore