import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default About = () => {
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
        style: "cancel",
        onPress: () => {clearOnboarding}
      },
      { 
        text: "Okay",  
    }
    ]
  );


  return (
    <View style={styles.container}>
      <Text style={styles.header}>SOCIALS</Text>
      <View style={styles.socialWrapper}>
      <View style={styles.socialWrapperLee}>
      <Image style={styles.socialLogo} source={require('../../assets/images/jaymian.png')}></Image>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://linktr.ee/JaymianLee')}>
      <Text style={styles.text}>Lee-Solutions Socials</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.socialWrapperLee}>
      <Image style={styles.socialLogo} source={require('../../assets/images/nahnovablack.png')}></Image> 
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://linktr.ee/nah_nova')}>
        <Text style={styles.text}>NahNova Socials</Text>
      </TouchableOpacity>
      </View>
      </View>
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
  logo: {
    width: 190,
    height: 190,
    borderRadius: 16,
    marginTop: 35,
    alignSelf: 'center',
  },
  socialWrapperLee: {
    backgroundColor: '#E8E8E8',
    borderRadius: 16,
    margin: 16,
  },
  socialWrapper: {
    marginTop: '10%',
  },
  socialLogo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
  },
  header: {
    color: '#FFFFFF',
    marginTop: '10%',
    fontSize: 32,
    fontWeight: 'bold',
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
