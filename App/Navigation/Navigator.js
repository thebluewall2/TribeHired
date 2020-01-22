import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import MainAppScreen from '../Containers/Home';
import PostDetailsScreen from '../Containers/Home/PostDetails';

const Navigator = createStackNavigator({
    App: MainAppScreen,
    PostDetails: PostDetailsScreen
}, {
    initialRouteName: 'App',
});

export default Navigator;
