import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AudioSlider from '../components/Audioplayer/Audioslider';
import BallYaw from '../../assets/sounds/ballsyaw.m4a';
import gerMAN from '../../assets/sounds/counting.m4a';

export default HomeMeme = () => {
    return (
        <View style={styles.container}>
            <AudioSlider audio={BallYaw}/>
            
            <AudioSlider audio={gerMAN}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: '#6C63FF',
        padding: '3%',
        borderRadius: 16,
        color: 'white',
      },
});