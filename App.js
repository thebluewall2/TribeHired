import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import Navigator from './App/Navigation/Navigator';
import NavigatorService from './App/Navigation/NavActions';
import configureStore from './App/Store/Store';

const AppContainer = createAppContainer(Navigator);

class App extends React.PureComponent {
    _renderApp = () => {
        return (
            <Provider store={configureStore()}>
                <AppContainer
                    ref={ref => NavigatorService.setTopLevelNavigator(ref)}
                />
            </Provider>
        );
    }

    render() {
        return this._renderApp();
    }
}

export default App;
