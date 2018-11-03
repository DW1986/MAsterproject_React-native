import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Icon, Header} from 'native-base'
import MapView from 'react-native-maps'





export default class Colors extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/Color.png')}
                style={{ width: 24, height:24}}
            />
        ),
    };



    render() {
        return (
            <View style={styles.container}>
                <Header style={{height: 60,alignItems:'flex-end', justifyContent:'flex-start' }}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                          style={{marginBottom:5 }}/>
                    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Einfärben</Text>
                    </View>
                </Header >
                <View style={styles.container}>

                </View>

            </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    map: {
        left:0,
        right:0,
        top:0,
        bottom:0,
        position: 'absolute'
    }
});
