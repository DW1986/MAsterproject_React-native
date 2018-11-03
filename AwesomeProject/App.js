import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Platform, Keyboard} from 'react-native';
import { createDrawerNavigator,DrawerItems } from 'react-navigation'
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import GoogleMaps from './screens/GoogleMaps';
import CameraExample from './screens/CameraExample';
import Date_Picker from './screens/Date_Picker';
import Login from './screens/Login';
import Switches from './screens/Switches';
import System from './screens/System';
import Text_to_Speech from './screens/Text_to_Speech';
import YouTube from './screens/YouTube';
import Colors from './screens/Colors';








export default class App extends React.Component {

  render() {
    return (


        <DrawNavigator />
  );
  }
}
const CustomDrawerComponent = (props) => (
    <SafeAreaView>
        <View style={{height: 150, backgroundColor: 'white',alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/HTWK_Logo_RGB.jpg')} style={{height: 70, width: 134}}/>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)
const DrawNavigator = createDrawerNavigator({
    Welcome:WelcomeScreen,
    GoogleMaps:GoogleMaps,
    Einfärben:Colors,
    Login:Login,
    Kamera:CameraExample,
    "Text To Speech":Text_to_Speech,
    "Date Picker":Date_Picker,
    Systemfunktionen:System,
    YouTube:YouTube,
    "Regler/Schalter":Switches


},{
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: "orange"
    }
})



const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
