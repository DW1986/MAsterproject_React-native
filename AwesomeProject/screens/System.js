import React from 'react';
import {StyleSheet, Text, View, Image, Vibration, Button, Dimensions} from 'react-native';
import { Icon, Header} from 'native-base'

const DURATION = 10000

export default class System extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/System.png')}
                style={{ width: 24, height:24}}
            />
        ),
    };

    StartVibrationFunction=()=>{


        Vibration.vibrate(DURATION) ;

    }

    StopVibrationFunction=()=>{

        // Stop Vibration.
        Vibration.cancel();


    }

    constructor(){

        super();

        this.state = {

            OrientationStatus : '',

            Height_Layout : '',

            Width_Layout : '',

        }
    }

    componentDidMount(){

        this.DetectOrientation();

    }

    DetectOrientation(){

        if(this.state.Width_Layout > this.state.Height_Layout)
        {

            // Write Your own code here, which you want to execute on Landscape Mode.

            this.setState({
                OrientationStatus : 'Querformat'
            });
        }
        else{

            // Write Your own code here, which you want to execute on Portrait Mode.

            this.setState({
                OrientationStatus : 'Hochformat'
            });
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={{height: 60,alignItems:'flex-end', justifyContent:'flex-start' }}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                          style={{marginBottom:5 }}/>
                    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Systemfunktionen</Text>
                    </View>
                </Header >

                <View style={{marginTop: 100,alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{margin: 10}}>

                        <Button title = " Start Vibration " onPress = {this.StartVibrationFunction} />

                    </View>

                    <View style={{margin: 10}}>

                        <Button title = " Stop Vibration " onPress = {this.StopVibrationFunction} />

                    </View>
                </View>
                    <View style={styles.MainContainer} onLayout={(event) => this.setState({
                        Width_Layout : event.nativeEvent.layout.width,
                        Height_Layout : event.nativeEvent.layout.height
                    }, ()=> this.DetectOrientation())}>
                        <Text style={{color:'red'}}> Bitte Landscape aktivieren und das Telefon drehen </Text>
                        <Text style={styles.TextStyle}> { this.state.OrientationStatus } </Text>

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
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    TextStyle :{
        fontSize : 20,
        color : '#000'
    }
});
