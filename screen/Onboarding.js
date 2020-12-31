import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Buttonheader from '../components/Buttonheader';
import GradientButton from '../components/GradientButton';
import icons from '../constants/icons';
import images from '../constants/images';
import {COLOR, FONTS, SIZE} from '../constants/theme';

const Onboarding = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      title: null,
      headerRight: () => (
        <View style={{marginRight: SIZE.padding}}>
          <Buttonheader icon={icons.bar} onPress={() => alert('clicked')} />
        </View>
      ),
      headerTransparent: true,
    });
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.white}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Image
          source={images.onboarding}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <View style={{alignItems: 'center', marginHorizontal: SIZE.padding}}>
          <Text style={{...FONTS.h2}}>Digital Ticket</Text>
          <Text
            style={{
              color: COLOR.gray,
              marginTop: SIZE.padding,
              textAlign: 'center',
              ...FONTS.body3,
            }}>
            Easy solution to buy ticket for your travel, business trip,
            transportation, lodging, and culinary
          </Text>
        </View>
        <View style={{width: '80%', marginTop: SIZE.padding * 2}}>
          <GradientButton text="Login" onPress={() => nav.navigate('Login')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
