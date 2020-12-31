import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, SIZE} from '../constants/theme';

const DestinationItem = ({img, label}) => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => nav.navigate('DetailDestination')}
      style={{marginVertical: SIZE.base, marginHorizontal: SIZE.base}}>
      <Image
        source={img}
        resizeMode="cover"
        style={{
          width: SIZE.width * 0.24,
          height: '80%',
          borderRadius: 12,
        }}
      />
      <Text style={{...FONTS.h4, marginTop: SIZE.base / 2}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DestinationItem;

const styles = StyleSheet.create({});
