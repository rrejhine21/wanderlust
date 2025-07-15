import { images } from "@/constants/images";
import { Image, SafeAreaView, Text } from "react-native";
import '../globals.css';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent font-bold">Welcome!</Text>
      <Image source={images.logo} resizeMode="contain" />
    </SafeAreaView>
  );
}
