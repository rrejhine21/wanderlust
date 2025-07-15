import { Card, NewTitleCards } from "@/components/cards";
import { icons } from "@/constants/icons";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import '../globals.css';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 h-full bg-dark-200 px-5">
      <View className="flex flex-row justify-between items-center my-3">        
        <Text className="font-poppins-bold text-2xl text-accent">HOME</Text>
        <View className="flex flex-row">
          <Image source={icons.info} tintColor="#B09FCA" className="mr-1"/>
          <Image source={icons.notifs} tintColor="#B09FCA" />
        </View>        
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        <View className="w-full flex flex-row justify-between items-center my-5">
          <Text className="font-poppins-semibold text-xl text-accent2">New Titles!</Text>        
          <TouchableOpacity>
            <Text className="font-poppins-regular text-base text-light-300">See All</Text>
          </TouchableOpacity>
        </View>
                
        <NewTitleCards />        
        <Card />
      </ScrollView>  
    </SafeAreaView>
  );
}
