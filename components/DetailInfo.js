import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLOR, SIZE} from '../constants/theme';

const DetailInfo = ({icon, lable}) => {
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Image source={icon} resizeMode="cover" style={{width: 50, height: 50}} />
      <Text style={{color: COLOR.gray, marginTop: SIZE.base}}>{lable}</Text>
    </View>
  );
};
export default DetailInfo;

const styles = StyleSheet.create({});
