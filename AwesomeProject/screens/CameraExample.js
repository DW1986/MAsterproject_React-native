import React from 'react';
import { Text, View, TouchableOpacity, Image, CameraRoll } from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Header, Icon} from "native-base";

export default class CameraExample extends React.Component {

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../assets/Kamera.png')}
                style={{width: 24, height: 24}}
            />
        ),
    };

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        activePic: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native-1024x631.png'
    };

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    render() {
        const {hasCameraPermission} = this.state;
        if (hasCameraPermission === null) {
            return <View/>;
        } else if (hasCameraPermission === false) {
            return <Text style={{AlignItems:'center', justifyContent:'center'}}>No access to camera</Text>;
        } else {
            return (
                <View style={{flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch'}}>
                    <Header style={{height: 60,alignItems:'flex-end', justifyContent:'flex-start' }}>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}
                              style={{marginBottom:5 }}/>
                        <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, color: 'white'}}>Kamera</Text>
                        </View>
                    </Header >
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Camera style={{position:'absolute', width:300 , height:400}} type={this.state.type} ref={ref => {
                        this.camera = ref;
                    }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',

                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Ionicon name="ios-refresh-circle-outline" size={20} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center'
                                }}
                                onPress={async () => {
                                    if (this.camera) {
                                        let photo = await this.camera.takePictureAsync();
                                        CameraRoll.saveToCameraRoll(photo.uri).then(() => {
                                            this.setState({activePic: photo.uri});
                                        });
                                    }
                                }}>
                                <FontAwesome name="camera" size={50} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{alignSelf: 'flex-end'}}
                                onPress={() => {
                                    ImagePicker.launchImageLibraryAsync();
                                }}>
                                <Image
                                    style={{width: 90, height: 120}}
                                    source={{uri: this.state.activePic}}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
                </View>
            );
        }
    }


}
