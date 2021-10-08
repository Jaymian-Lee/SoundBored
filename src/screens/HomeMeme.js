import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AudioSlider from '../components/Audioplayer/Audioslider';
import { ballsyaw, counting, tableisbroken, kakakola, salamoon, steaknight, twayx, wasteofprinjel, wasteofsus, whatsappsound, } from '../../assets/sounds/sounds';


export default HomeMeme = () => {
    return (
    <ScrollView style={styles.wrap}>
        <View style={styles.cards}>
            <View style={styles.card}>
                <Text style={styles.text}> BALLS IN YO JAW</Text>
                <AudioSlider audio={ballsyaw} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> OH NO THE TABLE IS BROKEN</Text>
                <AudioSlider audio={tableisbroken} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> COUNTING</Text>
                <AudioSlider audio={counting} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> KALAKOLA </Text>
                <AudioSlider audio={kakakola} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> WASTE OF SALAMOON </Text>
                <AudioSlider audio={salamoon} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> STEAKNIGHT BABY</Text>
                <AudioSlider audio={steaknight} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> TWAYX </Text>
                <AudioSlider audio={twayx} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> Waste of prinjel </Text>
                <AudioSlider audio={wasteofprinjel} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> Waste of sus</Text>
                <AudioSlider audio={wasteofsus} />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}> WHATSAPPSOUND</Text>
                <AudioSlider audio={whatsappsound} />
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