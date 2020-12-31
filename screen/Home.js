import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Buttonheader from '../components/Buttonheader';
import DestinationItem from '../components/DestinationItem';
import OptionItem from '../components/OptionItem';
import icons from '../constants/icons';
import images from '../constants/images';
import {COLOR, FONTS, SIZE} from '../constants/theme';
import {destination, iconButton} from '../mock';
import {convertTo2dArray} from '../util';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {removeItem} = useAsyncStorage('AuthLogin');
  const nav = useNavigation();

  // const handleCleanAsyncStrge = async () => {
  //   await removeItem('AuthLogin');
  // };

  const handleLogout = async (onPress) => {
    try {
      await removeItem();
    } catch (error) {
      console.log(error);
    }
    // handleCleanAsyncStrge();
    nav.navigate('Login');
    // alert('clicked');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.white}}>
      <View
        style={{
          height: 50,
          // backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: SIZE.padding,
        }}>
        <Buttonheader icon={icons.back} label="Back" />
        <Buttonheader icon={icons.power} onPress={handleLogout} />
      </View>
      <View style={{flex: 1, marginHorizontal: SIZE.padding}}>
        <Image
          source={images.home_banner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
        />
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          paddingHorizontal: SIZE.padding,
        }}>
        {convertTo2dArray(iconButton, 4).map((row, i) => (
          <View key={i} style={{flexDirection: 'row', marginTop: SIZE.padding}}>
            {row.map((col, i) => (
              <OptionItem
                key={i}
                icon={col.icon}
                bgColor={col.bgColor}
                label={col.label}
              />
            ))}
          </View>
        ))}
      </View>
      <View
        style={{
          flex: 1.5,
          marginHorizontal: SIZE.padding,
          marginTop: SIZE.padding,
        }}>
        <Text style={{...FONTS.h2}}>Destination</Text>
        <ScrollView
          horizontal
          style={{marginTop: SIZE.padding}}
          showsHorizontalScrollIndicator={false}>
          {destination.map((i) => (
            <DestinationItem key={i.id} label={i.text} img={i.img} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
