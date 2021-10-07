import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Settings = () => {
    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (err) {
            console.log('Error @clearOnboarding: ', err);
        }
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={clearOnboarding}>
                <Text>CLEAR ONBOARDING</Text>
            </TouchableOpacity>
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
