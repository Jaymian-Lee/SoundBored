import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Alert } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AudioSlider from "../components/Audioplayer/Audioslider";
import { useSelector, useDispatch } from "react-redux";
import { unsave } from "../store/slices/soundSlice";
import { getSoundAssetsFromSlug } from "../utils";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default Bookmarks = () => {
  const sounds = useSelector((state) => state.sound.sounds);
  const savedSounds = useSelector((state) => state.sound.savedSounds);

  const dispatch = useDispatch()

  const handleUnsave = (id) => {
    Alert.alert(
      "Delete bookmark",
      "Are you sure you want to delete this bookmark?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(unsave(id))
          },
          style: 'destructive'
        }
      ]
    );
  }

  if (savedSounds == "") {
   return ( 
    <View style={styles.container}>
      <Text style={styles.noSavedSounds}>It seems that there are no saved sounds, you can save sounds by clicking the plus icon</Text>
      <MaterialCommunityIcons
                  style={styles.iconNotSaved}
                  name={"bookmark-plus-outline"}
                  size={26}
                />
    </View>
   );
  } else {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.cards}>
          {savedSounds.map((id) => {
            const sound = sounds.find((sound) => sound.id === id)
            const assets = getSoundAssetsFromSlug(sound.slug)
  
            return (
              <View key={sound.id} style={styles.card}>
                <MaterialCommunityIcons
                  onPress={() => handleUnsave(sound.id)}
                  style={styles.icon}
                  name={"bookmark-check"}
                  size={26}
                />
                <Image
                  source={assets.image}
                  style={styles.images}
                />
                <Text style={styles.text}>{sound.title}</Text>
                <AudioSlider audio={assets.sound} />
              </View>
            )
          })}
        </View>
      </ScrollView>
      </View>
    );
  }

  
};

// NOTE: froggy spelen om dit nicer te maken
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 48,
  },
  card: {
    margin: "1%",
    backgroundColor: "#6C63FF",
    width: vw(48),
    flex: 0,
    borderRadius: 16,
  },
  noSavedSounds: {
    color: "#fff",
    textAlign: "center",
    marginTop: '85%',
    fontSize: 16,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
  },
  images: {
    alignSelf: "center",
    width: 128,
    height: 128,
    backgroundColor: "#202020",
    borderRadius: 16,
    marginTop: 16,
  },
  icon: {
    display: "flex",
    color: "#FFFFFF",
    alignSelf: "flex-end",
    marginTop: "2%",
    marginRight: "2%",
  },
  iconNotSaved:{
    display: "flex",
    color: "#FFFFFF",
    alignSelf: "center",
    marginTop: "2%",
    marginRight: "2%",
  },
});
