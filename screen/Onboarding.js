import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Buttonheader from '../components/Buttonheader';
import GradientButton from '../components/GradientButton';
import icons from '../constants/icons';
import images from '../constants/images';
import {COLOR, FONTS, SIZE} from '../constants/theme';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const Onboarding = () => {
  const nav = useNavigation();
  const [isLogin, setIsLogin] = useState(false);
  const {getItem} = useAsyncStorage('AuthLogin');
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

  const getFromAsyncStorage = async () => {
    const info = await getItem();
    if (info !== null) {
      setIsLogin(true);
      console.log(info);
    }
  };
  useEffect(() => {
    getFromAsyncStorage();
  }, []);

  const handleSubmit = () => {
    if (isLogin) {
      nav.navigate('Home');
    } else {
      nav.navigate('Login');
    }
    console.log(isLogin);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={images.onboarding}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.innerWrapper}>
        <View style={{alignItems: 'center', marginHorizontal: SIZE.padding}}>
          <Text style={{...FONTS.h2}}>Digital Ticket</Text>
          <Text style={styles.text}>
            Easy solution to buy ticket for your travel, business trip,
            transportation, lodging, and culinary
          </Text>
        </View>
        <View style={{width: '80%', marginTop: SIZE.padding * 2}}>
          <GradientButton text="Start" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.white},
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  innerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: COLOR.gray,
    marginTop: SIZE.padding,
    textAlign: 'center',
    ...FONTS.body3,
  },
});
