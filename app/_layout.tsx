import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import './globals.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require('../assets/fonts/Poppins-Black.ttf'),
    "Poppins-ExtraBold": require('../assets/fonts/Poppins-ExtraBold.ttf'),
    "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Medium": require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Thin": require('../assets/fonts/Poppins-Thin.ttf')
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <>
      <StatusBar hidden={false} />

      <Stack >
        <Stack.Screen 
          name="(tabs)"
          options={{ 
            headerShown: false 
          }}
        />

        <Stack.Screen 
          name="novel/[id]"
          options={{ 
            headerShown: false 
          }}
        />
      </Stack>
    </>
  )
}
