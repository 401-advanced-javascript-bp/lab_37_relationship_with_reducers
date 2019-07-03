import {combineReducers} from 'redux';
import player from './player-reducer';
import team from './team-reducer';

export default combineReducers({
    player,
    team,
});
