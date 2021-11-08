import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { About } from "./screens/About";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    <NavigationContainer>
        <Navigator initialRouteName="About">
            <Screen name='About' component={About}></Screen>
        </Navigator>
    </NavigationContainer>
}

export default AppNavigator;