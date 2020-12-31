import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, FONTS, SIZE} from '../constants/theme';

const Buttonheader = ({onPress, icon, label}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginLeft: SIZE.padding,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{width: 20, height: 20, tintColor: COLOR.black}}
      />
      <Text style={{color: COLOR.black, ...FONTS.h4}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Buttonheader;

const styles = StyleSheet.create({});
