import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AudioSlider from "../components/Audioplayer/Audioslider";
import { useSelector, useDispatch } from "react-redux";
import { save, unsave } from "../store/slices/soundSlice";
import { getSoundAssetsFromSlug } from "../utils";

export default HomeMeme = () => {
  const sounds = useSelector((state) => state.sound.sounds);
  const savedSounds = useSelector((state) => state.sound.savedSounds);

  const dispatch = useDispatch()

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.cards}>
        {sounds.map((sound) => {
          const isSaved = savedSounds.includes(sound.id)
          const assets = getSoundAssetsFromSlug(sound.slug)

          return (
            <View key={sound.id} style={styles.card}>
              <MaterialCommunityIcons
                onPress={() => dispatch(isSaved
                  ? unsave(sound.id)
                  : save(sound.id)
                )}
                style={styles.icon}
                name={isSaved
                  ? "bookmark-check"
                  : "bookmark-plus-outline"
                }
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
  );
};

// NOTE: froggy spelen om dit nicer te maken
const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 0,
    flexShrink: 0,
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
