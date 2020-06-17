import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PopupExamples from './popups/PopupExamples';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CrashScreen from './common/CrashPage';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import styles from './GlobalStyling';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './screen/Drawer/CustomDrawer';

// Creating a Stack Navigator
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

let isConnected;

class HomeScreenNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Crash" component={CrashScreen}/>
            </Drawer.Navigator>
        )
    }
}

class Navigator extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        // Adding Stack Navigations to the App
        return(
            <Stack.Navigator>
                <Stack.Screen name="Drawer" options={{headerShown: false}} component={HomeScreenNavigator}/>
                <Stack.Screen name="Popups" component={PopupExamples}/>
            </Stack.Navigator>
        );
    }
}


export default Navigator;

