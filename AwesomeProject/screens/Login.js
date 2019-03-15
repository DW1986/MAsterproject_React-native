import React from 'react';
import {StyleSheet, TextInput,Text, View, Image, Button, Alert} from 'react-native';
import { Icon, Header} from 'native-base'
import {Keyboard} from 'react-native'

export default class Login extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/Login.png')}
                style={{ width: 24, height:24}}
            />
        ),
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin() {
        const a = "Admin"
        const b = "Admin"

        const { username, password } = this.state;
        if ( `${username}` == a && `${password}` == b ) {
            Alert.alert('Success');
        } else {
            Alert.alert('Fail');
        }
        Keyboard.dismiss()
    }

    render() {
        return (

            <View style={styles.container2}>
                <Header style={{height: 60,alignItems:'flex-end', justifyContent:'flex-start' }}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer() + Keyboard.dismiss()}
                          style={{marginBottom:5 }}/>
                    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
                    </View>
                </Header >
                <View style={{ flex:1,alignItems: 'center', justifyContent: 'flex-start', marginTop: 50}}>
                    <View>
                        <TextInput
                            value={this.state.username}
                            onChangeText={(username) => this.setState({ username })}
                            placeholder={'Username'}
                            style={styles.input}
                        />
                        <TextInput
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            style={styles.input}
                        />

                        <Button
                            title={'Login'}
                            style={styles.input}
                            onPress={this.onLogin.bind(this)}
                        />
                    </View>
                </View>
            </View>



        )
    }


}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#fff',

    },

    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    text: {
        top: -40,
        paddingBottom: 0
    },
    loginButton: {
        width: 80,
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#3399FF',
        backgroundColor: '#3399FF',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
