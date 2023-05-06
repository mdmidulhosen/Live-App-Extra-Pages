import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { styles, searchPage, SearchResultStyles } from '../styles/Styles'

const SearchResultPage = () => {
    return (
        <ScrollView style={searchPage.MainBox}>
            <View style={styles.Container}>
                <View style={searchPage.SearchWrapper}>
                    <View style={searchPage.Search}>
                        <TextInput placeholder='Username/ID/Live title' />
                    </View>
                    <TouchableOpacity style={searchPage.Cancel}>
                        <Text style={searchPage.CancelText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={SearchResultStyles.RelevantHostWrapper}>
                    <View style={SearchResultStyles.HostTextWrapper}>
                        <View style={SearchResultStyles.HostLeft}>
                            <Text style={SearchResultStyles.SectionLeftTitle}>Relevant Host</Text>
                        </View>
                        <View style={SearchResultStyles.HostRight}>
                            <Text>More</Text>
                        </View>
                    </View>

                    <ScrollView horizontal style={SearchResultStyles.HostWrapper}>
                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                <View style={SearchResultStyles.RelevantHostWrapper}>
                    <View style={SearchResultStyles.HostTextWrapper}>
                        <View style={SearchResultStyles.HostLeft}>
                            <Text style={SearchResultStyles.SectionLeftTitle}>Relevant Community</Text>
                        </View>
                        <View style={SearchResultStyles.HostRight}>
                            <Text>More</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={SearchResultStyles.CommunityWrapper}>
                        <View style={SearchResultStyles.CommunityItem}>
                            <View style={SearchResultStyles.RelevantLeft}>
                                <Image style={SearchResultStyles.CommunityUserImage} source={require('../assets/images/akashBhai.jpg')} />
                                <View style={SearchResultStyles.TitleSubTilteWrapper}>
                                    <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                                    <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchResultStyles.CommunityWrapper}>
                        <View style={SearchResultStyles.CommunityItem}>
                            <View style={SearchResultStyles.RelevantLeft}>
                                <Image style={SearchResultStyles.CommunityUserImage} source={require('../assets/images/emonBhai.jpg')} />
                                <View style={SearchResultStyles.TitleSubTilteWrapper}>
                                    <Text style={SearchResultStyles.UserName}>Ms Emon</Text>
                                    <Text style={SearchResultStyles.UserId}>Id: Msemon</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchResultStyles.CommunityWrapper}>
                        <View style={SearchResultStyles.CommunityItem}>
                            <View style={SearchResultStyles.RelevantLeft}>
                                <Image style={SearchResultStyles.CommunityUserImage} source={require('../assets/images/towhidBhai.jpg')} />
                                <View style={SearchResultStyles.TitleSubTilteWrapper}>
                                    <Text style={SearchResultStyles.UserName}>Towhidul Islam</Text>
                                    <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchResultStyles.CommunityWrapper}>
                        <View style={SearchResultStyles.CommunityItem}>
                            <View style={SearchResultStyles.RelevantLeft}>
                                <Image style={SearchResultStyles.CommunityUserImage} source={require('../assets/images/userImage.jpg')} />
                                <View style={SearchResultStyles.TitleSubTilteWrapper}>
                                    <Text style={SearchResultStyles.UserName}>Midul Hosen</Text>
                                    <Text style={SearchResultStyles.UserId}>Id: Midul12</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchResultStyles.CommunityWrapper}>
                        <View style={SearchResultStyles.CommunityItem}>
                            <View style={SearchResultStyles.RelevantLeft}>
                                <Image style={SearchResultStyles.CommunityUserImage} source={require('../assets/images/istiakBhai.jpg')} />
                                <View style={SearchResultStyles.TitleSubTilteWrapper}>
                                    <Text style={SearchResultStyles.UserName}>Istiak Hasan</Text>
                                    <Text style={SearchResultStyles.UserId}>Id: IstiakHasan</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchResultStyles.CommunityWrapper}>
                        <View style={SearchResultStyles.CommunityItem}>
                            <View style={SearchResultStyles.RelevantLeft}>
                                <Image style={SearchResultStyles.CommunityUserImage} source={require('../assets/images/akashBhai.jpg')} />
                                <View style={SearchResultStyles.TitleSubTilteWrapper}>
                                    <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                                    <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={SearchResultStyles.RelevantHostWrapper}>
                    <View style={SearchResultStyles.HostTextWrapper}>
                        <View style={SearchResultStyles.HostLeft}>
                            <Text style={SearchResultStyles.SectionLeftTitle}>Live</Text>
                        </View>
                        <View style={SearchResultStyles.HostRight}>
                            <Text>More</Text>
                        </View>
                    </View>

                    <ScrollView horizontal style={SearchResultStyles.HostWrapper}>
                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={SearchResultStyles.HostItem}>
                            <Image style={SearchResultStyles.UserImage} source={require('../assets/images/akashBhai.jpg')} />
                            <Text style={SearchResultStyles.UserName}>Akash Dash</Text>
                            <Text style={SearchResultStyles.UserId}>Id: Akash</Text>
                            <TouchableOpacity style={SearchResultStyles.FollowBtn}>
                                <Text style={SearchResultStyles.FollowBtnTxt}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}

export default SearchResultPage