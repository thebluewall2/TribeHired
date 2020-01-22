import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import MainAppScreen from '../Containers/Home';

const Navigator = createStackNavigator({
    App: MainAppScreen,
}, {
    initialRouteName: 'App',
});

export default Navigator;
