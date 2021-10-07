import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Onboarding from './src/components/Onboarding/Onboarding';
import Settings from './src/screens/Settings';
import HomeMeme from './src/screens/HomeMeme'



const Loading = () => {
    return (
        <View>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default App = () => {
    const [loading, setLoading] = useState(true);
    const [viewedOnboarding, setViewedOnboarding] = useState(false);

    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@viewedOnboarding');

            if (value !== null) {
                setViewedOnboarding(true);
            }
        } catch (err) {
            console.log('Error @checkOnboarding: ', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkOnboarding();
    }, []);


    function BookmarkScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
          </View>
        );
      }
      
      function HomeScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? <Loading /> : viewedOnboarding ? <HomeMeme/> : <Onboarding />}
            <StatusBar style="auto" />
          </View>
        );
      }
      
      function SettingsScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Settings/> 
          </View>
        );
      }
      
      const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
        <Tab.Navigator  initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: '#202020' },
        }}
        tabBarOptions={{
          activeTintColor: '#6C63FF',
          inactiveTintColor: '#fff',
        }}
      >
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark-multiple-outline" color={color} size={26} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="radiobox-marked" color={color} size={26} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
      </NavigationContainer >
    );
  }
