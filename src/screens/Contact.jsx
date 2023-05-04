import { View, Text, _ScrollView, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { contactStyles, styles } from '../styles/Styles';

const Contact = () => {
  return (
    <ScrollView style={styles.MainBox}>
      <View style={styles.Container}>

        {/* Header code start from here */}

        <View style={contactStyles.Header}>
          <Text style={contactStyles.HeaderTitle}>Chats</Text>
        </View>

        {/* Header code end from here */}

        {/* Body code start from here */}

        <View style={contactStyles.Body}>

          <TouchableOpacity style={contactStyles.ContactItem}>
            <View style={contactStyles.ProfileImageWrapper}>
              <Image style={contactStyles.ProfileImage} source={require('../assets/images/userImage.jpg')} />
            </View>
            <View style={contactStyles.ProfileTitle}>
              <Text style={contactStyles.Title}>Midul Hosen</Text>
              <Text style={contactStyles.SubTitle}>Hi there how are you?...</Text>
            </View>
            <View style={contactStyles.LastTextTime}>
              <Text>12:37 PM</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={contactStyles.ContactItem}>
            <View style={contactStyles.ProfileImageWrapper}>
              <Image style={contactStyles.ProfileImage} source={require('../assets/images/akashBhai.jpg')} />
            </View>
            <View style={contactStyles.ProfileTitle}>
              <Text style={contactStyles.Title}>Akash Bhai</Text>
              <Text style={contactStyles.SubTitle}>Hi there how are you?...</Text>
            </View>
            <View style={contactStyles.LastTextTime}>
              <Text>12:37 PM</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={contactStyles.ContactItem}>
            <View style={contactStyles.ProfileImageWrapper}>
              <Image style={contactStyles.ProfileImage} source={require('../assets/images/istiakBhai.jpg')} />
            </View>
            <View style={contactStyles.ProfileTitle}>
              <Text style={contactStyles.Title}>Istiak Bhai</Text>
              <Text style={contactStyles.SubTitle}>Hi there how are you?...</Text>
            </View>
            <View style={contactStyles.LastTextTime}>
              <Text>12:37 PM</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={contactStyles.ContactItem}>
            <View style={contactStyles.ProfileImageWrapper}>
              <Image style={contactStyles.ProfileImage} source={require('../assets/images/emonBhai.jpg')} />
            </View>
            <View style={contactStyles.ProfileTitle}>
              <Text style={contactStyles.Title}>Emon Bhai</Text>
              <Text style={contactStyles.SubTitle}>Hi there how are you?...</Text>
            </View>
            <View style={contactStyles.LastTextTime}>
              <Text>12:37 PM</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={contactStyles.ContactItem}>
            <View style={contactStyles.ProfileImageWrapper}>
              <Image style={contactStyles.ProfileImage} source={require('../assets/images/towhidBhai.jpg')} />
            </View>
            <View style={contactStyles.ProfileTitle}>
              <Text style={contactStyles.Title}>Towhid Bhai</Text>
              <Text style={contactStyles.SubTitle}>Hi there how are you?...</Text>
            </View>
            <View style={contactStyles.LastTextTime}>
              <Text>12:37 PM</Text>
            </View>
          </TouchableOpacity>


        </View>

        {/* Body code end from here */}

      </View>
    </ScrollView>
  )
}

export default Contact