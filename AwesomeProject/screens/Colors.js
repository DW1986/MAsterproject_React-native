import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { Icon, Header} from 'native-base'






export default class Colors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            value2: 0,
        }
    }
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../assets/Color.png')}
                style={{width: 24, height: 24}}
            />
        ),
    };
    renderRed() {
        if (this.state.value === 1)
            return <Image style={styles.images}
                          source={require('../assets/Buttons/Button_rot_two.png')}/>
        return <Image style={styles.images}
                      source={require('../assets/Buttons/Button_rot_one.png')}/>
    }
    renderBlue() {
        if (this.state.value === 2)
            return <Image style={styles.images}
                          source={require('../assets/Buttons/Button_blau_two.png')}/>
        return <Image style={styles.images}
                      source={require('../assets/Buttons/Button_blau_one.png')}/>
    }


    renderGreen() {
        if (this.state.value === 3)
            return <Image style={styles.images}
                          source={require('../assets/Buttons/Button_gruen_two.png')}/>
        return <Image style={styles.images}
                      source={require('../assets/Buttons/Button_gruen_one.png')}/>
    }

    renderCir() {

        if(this.state.value2 === 1)

        switch (this.state.value) {
            case 1  :

                return <Image style={styles.images}
                              source={require('../assets/Buttons/Button_two.png')}/>
            case 2  :

                return <Image style={styles.images}
                              source={require('../assets/Buttons/Button_three.png')}/>
            case 3  :

                return <Image style={styles.images}
                              source={require('../assets/Buttons/Button_four.png')}/>

            default:
                return <Image style={styles.images}
                              source={require('../assets/Buttons/Button_one.png')}/>

        }
        return <Image style={styles.images}
                      source={require('../assets/Buttons/Button_one.png')}/>
    }


    render() {

        return (

            <View style={styles.container2}>
                <Header style={{height: 60, alignItems: 'flex-end', justifyContent: 'flex-start'}}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                          style={{marginBottom: 5}}/>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Einfärben</Text>
                    </View>
                </Header>

                <View style={styles.container2}>
                    <View style={styles.container}>


                            <TouchableOpacity  onPress={() => this.setState({value2: 1})}>
                                {this.renderCir()}



                                <Text> Value1: {this.state.value}</Text>
                                <Text> Value2: {this.state.value2}</Text>
                            </TouchableOpacity>





                     </View>

                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.setState({value: 1,value2: 0})}>
                            {this.renderRed()}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({value: 2,value2: 0})}>
                            {this.renderBlue()}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({value: 3,value2: 0})}>
                            {this.renderGreen()}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: "center",
        flexDirection:'row'

    },
    images: {
      width: 60,
      height: 60,
      margin: 20
    },
    map: {
        left:0,
        right:0,
        top:0,
        bottom:0,
        position: 'absolute'
    },
    container2: {
        flex: 2,
        backgroundColor: '#fff',

    }
});
