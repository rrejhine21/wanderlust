import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                title: "Home",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='explore'
            options={{
                title: "Explore",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='library'
            options={{
                title: "Library",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title: "Profile",
                headerShown: false
            }}
        />
    </Tabs>
  )
}

export default _layout