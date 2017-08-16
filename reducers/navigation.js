import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../components/Navigation';
import { NAVIGATE_SCREEN, BACK_SCREEN } from "../constants";
import { config } from '../components/config';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(config.initialRouteName));

const navigation = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case NAVIGATE_SCREEN:
      if(state.routes[state.index].routeName === action.flag) break;
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.flag }),
        state
      );
      break;
    case BACK_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        state.routes.length > 1 ?
          NavigationActions.back() :
          NavigationActions.navigate({ routeName: config.initialRouteName }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default navigation