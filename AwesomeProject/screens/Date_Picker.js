import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Icon, Header} from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import 'moment/locale/de'





export default class Date_Picker extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/Date.png')}
                style={{ width: 24, height:24}}
            />
        ),
    };

    constructor(){
        super()
        this.state = {
            isVisible:false,
            chosenDate:''
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('LL')
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    hidePicker = () => {
        this.setState({
            isVisible: false

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={{height: 60,alignItems:'flex-end', justifyContent:'flex-start' }}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                          style={{marginBottom:5 }}/>
                    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Date Picker</Text>
                    </View>
                </Header >
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: 'red', fontSize: 20}}>
                        {this.state.chosenDate}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                        <Text style={{color:'white'}}>Show Date Picker</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
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

    },
    button:{
        width: 250,
        height: 50,
        backgroundColor: '#065FB8' ,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 15,
    }
});
