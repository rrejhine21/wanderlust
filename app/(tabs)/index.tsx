import { Card, NewTitleCards } from "@/components/cards";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useState } from "react";
import { Alert, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import '../globals.css';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 h-full bg-dark-200 px-5">
      {/* ============================= SCREEN HEADER ================================== */}
      <View className="flex flex-row justify-between items-center my-3">        
        <Text className="font-poppins-bold text-2xl text-accent">HOME</Text>
        <View className="flex flex-row">
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Image source={icons.info} tintColor="#B09FCA" className="mr-3.5"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.notifs} tintColor="#B09FCA" />
          </TouchableOpacity>          
        </View>        
      </View>

      {/* ============================= SCREEN SCROLLABLE AREA ================================== */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        {/* ============================= NEW TITLES HEADER ================================== */}
        <View className="w-full flex flex-row justify-between items-center my-5">
          <Text className="font-poppins-semibold text-xl text-accent2">New Titles!</Text>        
          <TouchableOpacity>
            <Text className="font-poppins-regular text-base text-light-300">See All</Text>
          </TouchableOpacity>
        </View>
        {/* ============================= NEW TITLE CARDS SCROLLER? ================================== */}
        <View className="flex flex-row gap-5">
          <NewTitleCards />  
          <NewTitleCards />  
        </View>   
        {/* ============================= RANKING HEADER ================================== */}
        <View className="w-full flex flex-row justify-between items-center mt-9 mb-5">
          <Text className="font-poppins-semibold text-xl text-accent2">Top Ranked</Text>        
          <TouchableOpacity>
            <Text className="font-poppins-regular text-base text-light-300">See All</Text>
          </TouchableOpacity>
        </View>  
        {/* ============================= RANKING GRID (3 PER LINE) ================================== */}
        <View className="flex flex-row gap-2">
          <Card />  
          <Card />  
          <Card />  
        </View> 

        <View className="flex flex-row gap-2 mt-5">
          <Card />  
          <Card />  
          <Card />  
        </View> 

        <View className="flex flex-row gap-2 mt-5">
          <Card />  
          <Card />  
          <Card />  
        </View> 

        <View className="flex flex-row gap-2 mt-5">
          <Card />  
          <Card />  
          <Card />  
        </View> 

      {/* ============================= MODALS/POPUPS/ETC ================================== */}
      {/* ============================= TURN THIS MODAL INTO A COMPONENT ================================== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 justify-center items-center px-5 relative">
          <Image source={images.modalOverlay} resizeMode="cover" className="" />

          <View className="w-full h-96 flex flex-col bg-[#403A41] rounded-3xl p-7 shadow-lg absolute">
            <View className="flex flex-row justify-end gap-20 items-center">
              <Text className="text-xl font-poppins-semibold text-accent">Information</Text>
              
              <Pressable
                className="rounded-full p-xl"
                onPress={() => setModalVisible(!modalVisible)}>
                <Image source={icons.close} tintColor="#B09FCA" className="size-5" />
              </Pressable>
            </View>

            <View className="w-full mt-8">
              <Text className="text-base font-poppins-regular text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</Text>
            </View>
          </View>
        </View>
      </Modal>
      </ScrollView>  
    </SafeAreaView>
  );
}
