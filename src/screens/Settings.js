import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default Settings = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (err) {
      console.log("Error @clearOnboarding: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/icon.png')}></Image>
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={clearOnboarding}>
        <Text style={styles.text}>Clear onboarding</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearOnboarding}>
        <Text style={styles.text}>Terms and Sevices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearOnboarding}>
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      
      <View style={styles.copyrightWrapper}><MaterialCommunityIcons  style={styles.copyright} name="copyright" size={26} /><Text style={styles.copyright} >Lee-Solutions | NahNova</Text></View>
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
    margin: 10,
    alignSelf: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 68,
    fontWeight: 'bold',
    marginBottom: '10%',
    alignSelf: 'center',
  },
  text: {
    color: "#FFFFFF",
    fontSize: 36,

  },
  button: {
    alignItems: "center",
    backgroundColor: "#6C63FF",
    padding: "3%",
    margin: 10,
    width: 340,
    borderRadius: 16,
  },
  copyrightWrapper: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  copyright: {
    color: '#FFFFFF',
  },
});
