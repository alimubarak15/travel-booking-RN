import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR, SIZE} from '../constants/theme';

const OptionItem = ({label, bgColor, icon}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LinearGradient
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
        colors={bgColor}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{tintColor: COLOR.white, width: 30, height: 30}}
        />
      </LinearGradient>
      <Text style={{marginTop: SIZE.base}}>{label}</Text>
    </View>
  );
};

export default OptionItem;
