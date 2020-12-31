import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../constants/icons';
import {COLOR, FONTS, SIZE} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import StarReview from '../components/StarReview';
import {detailDestination} from '../mock';
import DetailInfo from '../components/DetailInfo';
import Buttonheader from '../components/Buttonheader';
import images from '../constants/images';

const Destinationdetail = () => {
  const data = detailDestination;
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      title: null,
      headerLeft: ({onPress}) => (
        <Buttonheader onPress={onPress} icon={icons.back} label="Back" />
      ),
      headerTransparent: true,
    });
  });

  return (
    <View style={{flex: 1, backgroundColor: COLOR.white}}>
      <View style={{flex: 2}}>
        <Image
          source={data.baner}
          resizeMode="cover"
          style={{height: '80%', width: '100%'}}
        />
        <View style={[styles.cardWrapper, styles.shadow]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={data.image}
              resizeMode="cover"
              style={{width: 70, height: 70, borderRadius: 12}}
            />
            <View style={{marginLeft: SIZE.radius}}>
              <Text style={{marginBottom: SIZE.padding / 8, ...FONTS.h3}}>
                {data.title}
              </Text>
              <Text style={{color: COLOR.gray, ...FONTS.body3}}>
                {data.location}
              </Text>
              <StarReview rate={4.6} />
            </View>
          </View>
          <Text
            style={{fontSize: 11, color: COLOR.gray, marginTop: SIZE.radius}}>
            {data.caption}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.6,
          marginHorizontal: SIZE.padding,
        }}>
        <View style={{flexDirection: 'row', marginTop: SIZE.radius}}>
          {data.info.map((data, i) => (
            <DetailInfo key={i} icon={data.icon} lable={data.labal} />
          ))}
        </View>
        <Text style={{...FONTS.h2, marginTop: SIZE.radius}}>About</Text>
        <Text style={{marginTop: SIZE.radius, color: COLOR.gray, ...FONTS.h3}}>
          {data.desc}
        </Text>
      </View>
      <View style={{flex: 0.4, paddingHorizontal: SIZE.padding}}>
        <LinearGradient
          style={[{height: 60, width: '100%', borderRadius: 15}]}
          colors={['#edf0fc', '#d6dfff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: SIZE.padding,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.h2}}>${data.price}</Text>
            </View>

            <TouchableOpacity
              style={{
                width: 130,
                height: '70%',
                marginHorizontal: SIZE.radius,
              }}
              onPress={() => {
                console.log('Booking on pressed');
              }}>
              <LinearGradient
                style={[
                  {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  },
                ]}
                colors={['#46aeff', '#5884ff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={{color: COLOR.white, ...FONTS.h3}}>BOOKING</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Destinationdetail;

const styles = StyleSheet.create({
  shadow: {
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  cardWrapper: {
    position: 'absolute',
    right: '5%',
    left: '5%',
    bottom: '5%',
    backgroundColor: COLOR.white,
    padding: SIZE.padding,
    borderRadius: 15,
  },
});
