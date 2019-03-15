import React from 'react'
import { StyleSheet, Picker, View, TextInput, Button, Text,Image } from 'react-native'
import { Icon, Header} from 'native-base'

export default class Text_to_Speech extends React.Component {

    static navigationOptions = {
        title: 'Sprache'
    };

    state = {
        text: '',
        language: 'de'
    };

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/Text_to_Speech.png')}
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
                        <Text style={{fontSize: 20, color: 'white'}}>Text to Speech</Text>
                    </View>
                </Header >
                <View style={styles.container2}>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', textAlign: 'center', marginBottom: 10}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Picker
                        selectedValue={this.state.language}
                        style={styles.picker}
                        itemStyle={styles.itemStyle}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Deutsch" value="de" />
                        <Picker.Item label="Englisch" value="en" />
                        <Picker.Item label="Französisch" value="fr" />
                        <Picker.Item label="Japanisch" value="ja" />
                    </Picker>
                    <Button
                        onPress={()=>{speak(this.state.text, this.state.language)}}
                        title="Text zu Sprache"
                        color="#841584"
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
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    picker: {
        width: '60%',
    },
});

const speak = function (text, lang) {
    Expo.Speech.speak(text, {
        language: lang
    });
};