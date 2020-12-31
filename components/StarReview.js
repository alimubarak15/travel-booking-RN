import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import icons from '../constants/icons';
import {COLOR, SIZE} from '../constants/theme';

const StarReview = ({rate}) => {
  const StarComponents = [];

  const FullStar = Math.floor(rate);
  const EmptyStar = Math.floor(5 - rate);
  const HalfStar = 5 - FullStar - EmptyStar;
  //   console.log(FullStar, EmptyStar, HalfStar);

  for (let i = 0; i < FullStar; i++) {
    StarComponents.push(
      <Image
        key={`full${i}`}
        source={icons.star_full}
        resizeMode="cover"
        style={{width: 15, height: 15}}
      />,
    );
  }

  for (let k = 0; k < HalfStar; k++) {
    StarComponents.push(
      <Image
        key={`half${k}`}
        source={icons.star_half}
        resizeMode="cover"
        style={{height: 15, width: 15}}
      />,
    );
  }

  for (let j = 0; j < EmptyStar; j++) {
    StarComponents.push(
      <Image
        key={`empty${j}`}
        source={icons.star_empty}
        resizeMode="cover"
        style={{width: 15, height: 15}}
      />,
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZE.base,
      }}>
      {StarComponents}
      <Text style={{color: COLOR.gray, marginLeft: SIZE.base}}>{rate}</Text>
    </View>
  );
};

export default StarReview;

const styles = StyleSheet.create({});
