import React from 'react';
import {StyleSheet, Text, View, Image,WebView} from 'react-native';
import { Icon, Header} from 'native-base'

export default class Youtube extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/YouTube.png')}
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
                        <Text style={{fontSize: 20, color: 'white'}}>Youtube</Text>
                    </View>
                </Header >
                <View style={{ height: 580 }}>
                    <WebView
                            style={ styles.WebViewContainer }
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{uri: 'https://www.youtube.com/watch?v=u_rYBUQagvA' }}
                    />

                    </View>
                </View>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }
});
