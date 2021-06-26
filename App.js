/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import Home from './components/Home';
import Touchables from './components/Touchables';
import SingleTea from './components/SingleTea';
import store from './store';
import TeaHome from './components/TeaHome';

const Stack = createStackNavigator();

const App = () => {
  // const sections = useSelector(state => state.sections);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TeaHome" component={TeaHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
