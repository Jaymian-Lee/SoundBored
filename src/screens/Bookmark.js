import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default Settings = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text>In progress</Text>
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
