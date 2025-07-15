import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => {
    return (
        <>
            <View
                className='flex-1 mt-3 flex flex-col items-center'
            >
                <Image 
                    source={icon}
                    tintColor={focused ? '#B09FCA' : '#666876'}
                    resizeMode='contain'
                    className='size-6' 
                />
                <Text className={`${focused ? 'text-accent' : 'text-primary'} text-xs w-full text-center mt-1`}>{title}</Text>
            </View>
        </>
    )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopColor: '#0061ff1a',
                borderTopWidth: 1,
                minHeight: 70,
            }
        }}
    >
        <Tabs.Screen
            name='index'
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.home}
                        title="Home" 
                    />
                )
            }}
        />
        <Tabs.Screen
            name='explore'
            options={{
                title: "Explore",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.explore}
                        title="Explore" 
                    />
                )
            }}
        />
        <Tabs.Screen
            name='library'
            options={{
                title: "Library",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.library}
                        title="Library" 
                    />
                )
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.profile}
                        title="Profile" 
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout