import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { styles, chatStyles } from '../styles/Styles';





const Chat = () => {
    return (
        <View style={chatStyles.MainBox}>

            <View style={chatStyles.Header}>
                <View style={chatStyles.HeaderLeft}>
                    <Image style={chatStyles.BackBtn} source={require('../assets/images/back.png')} />
                </View>
                <View style={chatStyles.HeaderCenter}><Text style={chatStyles.PersonTitle}>Towhid</Text></View>
                <View style={chatStyles.HeaderRight}></View>
            </View>
            <View style={chatStyles.Container}>
                <View style={chatStyles.Body}>
                    <ScrollView>
                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.Frnd}>
                            <Text>HI There This Is Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={chatStyles.MeWrapper}>
                            <View style={chatStyles.Me}>
                                <Text>HI There This Is Me</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>


                </View>

                <View style={chatStyles.Footer}>
                    <TextInput style={chatStyles.TextInput} placeholder='Write your text' />
                    <View style={chatStyles.CameraImageWrapper}>
                        <TouchableOpacity>
                            <Image style={chatStyles.Camera} source={require('../assets/images/camera.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={chatStyles.Camera} source={require('../assets/images/image.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default Chat