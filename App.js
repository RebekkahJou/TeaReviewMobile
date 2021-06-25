/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useSelector, Provider} from 'react-redux';
import Home from './components/Home';
import Touchables from './components/Touchables';
import SingleTea from './components/SingleTea';
import {store} from './store';
import {fetchAllSections} from './store/sections';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const sections = useSelector(state => state.sections);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TouchUs" component={Touchables} />
          {sections.map(({id, title}) => {
            return <Stack.Screen name={title} key={id} component={SingleTea} />;
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
