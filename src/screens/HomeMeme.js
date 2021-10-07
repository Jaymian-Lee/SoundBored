import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AudioSlider from '../components/Audioplayer/Audioslider';
import { ballsyaw, counting } from '../../assets/sounds/sounds';


export default HomeMeme = () => {
    return (
    <ScrollView style={styles.wrap}>
        <View style={styles.cards}>
            <View style={styles.card}>
                <Text style={styles.text}> BALLS IN YO JAW</Text>
                <AudioSlider audio={ballsyaw} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
        </View>
    </ScrollView>
    );
};
//froggy spelen om dit nicer te maken
const styles = StyleSheet.create({
    wrap: {
        display: 'flex',
        marginTop: 48,
      },
    cards: {
      justifyContent: 'center',
    },
    card: {
        margin: '1%',
        backgroundColor: '#6C63FF',
        borderRadius: 16,
    },
    text: {
       color: '#fff',
       textAlign: 'center',
        
    },
});