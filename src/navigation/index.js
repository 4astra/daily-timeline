import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "../screens/CalendarScreen";


const MainStack = createStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Main"
                component={CalendarScreen}
                options={{ headerShown: true }}
            />
        </MainStack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MainStackScreen />
        </NavigationContainer>
    );
}