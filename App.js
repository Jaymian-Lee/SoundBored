import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { routes } from './src/constants'

import { store } from './src/store'

import Onboarding from './src/components/Onboarding/Onboarding'
import Bookmarks from './src/screens/Bookmarks'
import Home from './src/screens/Home'
import Settings from './src/screens/Settings'
import TermsOfService from './src/screens/TermsOfService'
import About from './src/screens/About'


const persistor = persistStore(store)

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default App = () => {
  // boolean is determined value, undefined is undetermined value
  const [isOnboarded, setIsOnboarded] = useState(undefined)

  // Valid values are: loading, onboarding, main
  const [userFlow, setUserFlow] = useState('loading')

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');

      if (value !== null) {
        setIsOnboarded(true);
      } else {
        setIsOnboarded(false)
      }  
    } catch (err) {
      setIsOnboarded(false)
      console.log('Error @checkOnboarding: ', err);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  useEffect(() => {
    let newUserFlow
    if (isOnboarded === true) {
      newUserFlow = 'main'
    } else if (isOnboarded === false) {
      newUserFlow = 'onboarding'
    }

    setUserFlow(newUserFlow || 'loading')
  }, [isOnboarded])

  const Tab = createBottomTabNavigator();

  const renderLoading = () => null

  const handleComplete = () => {
    AsyncStorage.setItem('@viewedOnboarding', 'true');
    setIsOnboarded(true)
  }

  const OnboardingStack = createStackNavigator()

  const renderOnboarding = () => (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
          <OnboardingStack.Screen headerShown='false' name='Onboarding' component={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#202020' }}>
              <Onboarding onComplete={handleComplete}/>
            </View>
          )}/>
        </OnboardingStack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )

  const mainScreens = [
    [routes.bookmarks, Bookmarks],
    [routes.home, Home],
    [routes.settings, Settings],
    [routes.termsOfService, TermsOfService],
    [routes.about, About],
  ]

  const getMainStackScreen = (Stack, rootRoute) => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={rootRoute}>
        {mainScreens.map(([name, Component]) => (
          <Stack.Screen headerShown='false' name={name} key={name} component={Component}/>
        ))}
      </Stack.Navigator>
    )
  }

  const BookmarksStack = createStackNavigator()
  const HomeStack = createStackNavigator()
  const SettingsStack = createStackNavigator()

  const renderMain = () => (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home"
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
              component={() => getMainStackScreen(BookmarksStack, routes.bookmarks)}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bookmark-multiple-outline" color={color} size={26} />
                ),
                headerShown: false
              }}
            />
            <Tab.Screen
              name="Home"
              component={() => getMainStackScreen(HomeStack, routes.home)}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="radiobox-marked" color={color} size={26} />
                ),
                headerShown: false
              }}
            />
            <Tab.Screen
              name="Settings"
              component={() => getMainStackScreen(SettingsStack, routes.settings)}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                ),
                headerShown: false
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  )

  switch (userFlow) {
  case 'loading':
    return renderLoading()
  case 'onboarding':
    return renderOnboarding()
  case 'main':
    return renderMain()
  }
}
