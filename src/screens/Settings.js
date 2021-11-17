import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Linking, Share } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { routes } from '../constants'

export default Settings = ({navigation}) => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnboarding: ', err);
    }
  };


  const shareSoundBored = () => 
  Share.share(
    {
    title: 'Share SoundBored',
    message: 'Download our new app and enjoy all the sounds!',
    url: 'https://play.google.com/store/apps/details?id=com.nahnova.SoundBored',
    }
  );

  const clearOnboardingAlert = () =>
  Alert.alert(
    'Reset onboarding',
    'Cleared onboarding, restart SoundBored to see the onboarding!',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Okay',}
      
    ]
  );


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/icon.png')}></Image>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.settingsContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {clearOnboardingAlert(); clearOnboarding()}}>
        <Text style={styles.text}>Clear onboarding</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={shareSoundBored}>
        <Text style={styles.text}>Share SoundBored</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.nahnova.SoundBored')}>
        <Text style={styles.text}>Rate SoundBored</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.about)}>
        <Text style={styles.text}>About us</Text>
      </TouchableOpacity>
      </View>
      <Image style={styles.copyright} source={require('../../assets/images/copyright.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
  },
  settingsContainer: {
    marginTop: '10%',
  },
  logo: {
    width: 190,
    height: 190,
    borderRadius: 16,
    marginTop: 35,
    alignSelf: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: '10%',
    alignSelf: 'center',
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6C63FF",
    padding: "3%",
    margin: 8,
    width: 332,
    borderRadius: 8,
  },
  copyright: {
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: -105,
    width: 256,
    height: 256,
    borderRadius: 16,
    alignSelf: 'center',
  },
});
