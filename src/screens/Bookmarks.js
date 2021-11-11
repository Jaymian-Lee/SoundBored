import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Alert } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AudioSlider from "../components/Audioplayer/Audioslider";
import { useSelector, useDispatch } from "react-redux";
import { unsave } from "../store/slices/soundSlice";
import { getSoundAssetsFromSlug } from "../utils";

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
    width: "48%",
    flex: 0,
    borderRadius: 16,
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
});
