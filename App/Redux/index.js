import { combineReducers } from 'redux';
import App from './app';

export default combineReducers({
    app: App.reducer,
});
