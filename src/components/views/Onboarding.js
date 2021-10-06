import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <View style={styles.container}>
  <Wrapper>
        <ImageView source={require('../../Images/iconSB.png')} />
        <Title>
      <Text>SoundBored</Text>
      </Title>
        <Subtext>
      <Text> Meme sounds and more! </Text>
        </Subtext>
      <StatusBar style="auto" />
    </Wrapper>
    </View>
  );
}

const Wrapper = styled.View`
margin: 32px;

`

const ImageView = styled.Image`
display: flex;
width: 200px;
height: 200px;
align-self: center;

`
const Title = styled.Text`
color: #fff;
font-size: 64px;
text-align: center;
`

const Subtext = styled.Text`
color: #fff;
font-size: 32px;
text-align: center;
`


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFF',
    backgroundColor: '#562a72',
  },
});
