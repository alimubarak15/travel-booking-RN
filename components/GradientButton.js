import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR, FONTS} from '../constants/theme';

const GradientButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.shadow} onPress={onPress}>
      <LinearGradient
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}
        colors={['#a45aef', '#588aff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={{...FONTS.h3, color: COLOR.white}}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.42,
    shadowRadius: 5.8,
    elevation: 5,
  },
});
