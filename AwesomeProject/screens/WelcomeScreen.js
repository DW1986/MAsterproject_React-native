import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView,Alert,Platform, PermissionsAndroid} from 'react-native';
import { Icon, Header} from 'native-base'

export default class WelcomeScreen extends React.Component {

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../assets/Welcome.png')}
                style={{width: 24, height: 24}}
            />
        ),
    };


    render() {
        return (
            <View style={styles.welcome}>
                <Header style={{height: 60, alignItems: 'flex-end', justifyContent: 'flex-start'}}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                          style={{marginBottom: 5}}/>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Welcome</Text>
                    </View>
                </Header>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../assets/React_Logo.png')}
                        style={{width: 240, height: 240}}
                    />
                    <Text style={{color: 'red', fontSize: 30, textAlign: 'center'}}>Willkommen zu dem Prototype einer
                        React Native App</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
