import React, {useState} from 'react';
import {useLayoutEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Buttonheader from '../components/Buttonheader';
import icons from '../constants/icons';
import {COLOR, FONTS, SIZE} from '../constants/theme';
import images from '../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../components/GradientButton';
import InputText from '../components/InputText';

const Login = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      title: null,
      headerLeft: ({onPress}) => (
        <Buttonheader icon={icons.back} label="Back" onPress={onPress} />
      ),
      headerTransparent: true,
    });
  });

  const [formInput, setFormInput] = useState({
    username: '',
    password: '',
  });

  const handleFormInput = (value, name) => {
    // console.log(value, name);
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  console.log(formInput);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: SIZE.padding * 1.5,
        justifyContent: 'center',
        paddingTop: SIZE.padding * 2,
      }}>
      <View style={{marginTop: -SIZE.padding * 3}}>
        <Image
          source={images.login}
          style={{width: '100%', height: 190}}
          resizeMode="contain"
        />
        <Text
          style={{...FONTS.body3, color: COLOR.gray, marginTop: SIZE.padding}}>
          Proceed with your
        </Text>
        <Text style={{...FONTS.h1, color: '#655'}}>Login</Text>
      </View>
      <View style={{marginVertical: SIZE.padding * 2}}>
        <InputText
          label="Username"
          placeholder="username"
          icon={icons.user}
          defaultValue={formInput.username}
          onChangeText={(value) => handleFormInput(value, 'username')}
        />
        <InputText
          label="Password"
          placeholder="password"
          icon={icons.edit}
          defaultValue={formInput.password}
          onChangeText={(value) => handleFormInput(value, 'password')}
          secureTextEntry={true}
        />
      </View>
      <GradientButton text="Sign In" onPress={() => nav.navigate('Home')} />
      <Text
        style={{
          ...FONTS.body3,
          color: COLOR.gray,
          textAlign: 'center',
          marginTop: SIZE.padding,
        }}>
        Forgot Password
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
