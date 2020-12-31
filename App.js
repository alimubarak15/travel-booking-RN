import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './screen/Onboarding';
import {COLOR, FONTS, SIZE} from './constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import icons from './constants/icons';
import TabNavigation from './components/TabNavigation';
import Destinationdetail from './screen/Destinationdetail';
import Buttonheader from './components/Buttonheader';
import Login from './screen/Login';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DetailDestination" component={Destinationdetail} />
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
