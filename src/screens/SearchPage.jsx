import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles, searchPage } from '../styles/Styles'

const SearchPage = () => {
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
                <View style={searchPage.SearchResultWrapper}>
                    <TouchableOpacity style={searchPage.SearchItem}>
                        <View style={searchPage.SearchIcon}>
                            <Image style={searchPage.Icon} source={require('../assets/images/search.png')}/>
                        </View>
                        <View style={searchPage.SearchTitle}>
                            <Text>Luis Hosen</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={searchPage.SearchItem}>
                        <View style={searchPage.SearchIcon}>
                            <Image style={searchPage.Icon} source={require('../assets/images/search.png')}/>
                        </View>
                        <View style={searchPage.SearchTitle}>
                            <Text>Midul Fonsi</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={searchPage.SearchItem}>
                        <View style={searchPage.SearchIcon}>
                            <Image style={searchPage.Icon} source={require('../assets/images/search.png')}/>
                        </View>
                        <View style={searchPage.SearchTitle}>
                            <Text>Emon Fonsi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SearchPage