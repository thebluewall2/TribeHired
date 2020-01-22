import { NavigationActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
};

const navBack = () => {
    _navigator.dispatch(
        NavigationActions.back()
    );
};

export default {
    setTopLevelNavigator,

    navBack,
};
