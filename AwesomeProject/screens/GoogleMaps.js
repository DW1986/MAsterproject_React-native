import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Icon, Header} from 'native-base'
import MapView from 'react-native-maps'

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO




export default class GoogleMaps extends React.Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/maps.png')}
                style={{ width: 24, height:24}}
            />
        ),
    };
        constructor(props) {
            super(props)

            this.state = {
                initialPosition: {
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: 0,
                    longitudeDelta: 0
                },
                markerPosition: {
                    latitude: 0,
                    longitude: 0
                }
            }

        }

        componentDidMount() {
            navigator.geolocation.getCurrentPosition((position) => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)

                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATTITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }
                this.setState({initialPosition: initialRegion})
                this.setState({markerPosition: initialRegion})
            })


        }




    render() {
        return (
            <View style={styles.container}>
                <Header style={{height: 60,alignItems:'flex-end', justifyContent:'flex-start' }}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                          style={{marginBottom:5 }}/>
                    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Google Maps</Text>
                    </View>
                </Header >
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        region={this.state.initialPosition}>

                    <MapView.Marker
                        coordinate={this.state.markerPosition}>
                    </MapView.Marker>
                    </MapView>


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
