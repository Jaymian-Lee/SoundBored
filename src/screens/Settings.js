import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default Settings = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (err) {
      console.log("Error @clearOnboarding: ", err);
    }
  };

  const clearOnboardingAlert = () =>
  Alert.alert(
    "Reset onboarding",
    "Cleared onboarding, restart SoundBored to see the onboarding!",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "Okay"}
    ]
  );


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/icon.png')}></Image>
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={clearOnboarding && clearOnboardingAlert}>
        <Text style={styles.text}>Clear onboarding</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={console.log('Terms and Services')}>
        <Text style={styles.text}>Terms and Services</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={console.log('Share SoundBored')}>
        <Text style={styles.text}>Share SoundBored</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={console.log('Rate SoundBored')}>
        <Text style={styles.text}>Rate SoundBored</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={console.log('About page')}>
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <Image style={styles.copyright} source={require('../../assets/images/copyright.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
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
