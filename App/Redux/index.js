import { combineReducers } from 'redux';
import App from './app';
import Ui from './ui';

export default combineReducers({
    app: App.reducer,
    ui: Ui.reducer,
});
