import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Slider, Switch, Alert, Image} from 'react-native';
import { Icon, Header} from 'native-base'


export default class Switches extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/Switch.png')}
                style={{ width: 24, height:24}}
            />
        ),
    };

    constructor() {

        super();

        this.state = {
            SliderValue: 0,
            SwitchOnValueHolder :  false
        }
    }

    ShowAlert = (value) => {
        this.setState({
            SwitchOnValueHolder: value
        })

        if (value == true) {
            //Perform any task here which you want to execute on Switch ON event.
            Alert.alert("Schalter ist an.");
        }
        else {
            //Perform any task here which you want to execute on Switch OFF event.
            Alert.alert("Schalter ist aus.");
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Header style={{height: 60,alignItems:'flex-end', justifyContent:'flex-start' }}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                          style={{marginBottom:5 }}/>
                    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Regler/Schalter</Text>
                    </View>
                </Header >
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize: 20}}>Slider Value = {this.state.SliderValue}</Text>

                    <Slider
                        step={1}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#009688"
                        onValueChange={(ChangedValue) => this.setState({SliderValue: ChangedValue})}
                        style={{width: '100%', marginBottom: 30}}
                    />

                    <Text style={{fontSize: 18}}> Schalter </Text>

                    <Switch
                        onValueChange={(value) => this.ShowAlert(value)}
                        style={{marginBottom: 10}}
                        value={this.state.SwitchOnValueHolder}/>
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
