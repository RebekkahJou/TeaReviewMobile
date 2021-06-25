import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Home from './Home';

import SingleTea from './SingleTea';

const Tea = createStackNavigator();

const TeaHome = () => {
  const sections = useSelector(state => state.sections);
  console.log(sections);

  return (
    <Tea.Navigator>
      {sections.map(({id, title}) => {
        return <Tea.Screen name={title} key={id} component={SingleTea} />;
      })}
    </Tea.Navigator>
  );
};

export default TeaHome;