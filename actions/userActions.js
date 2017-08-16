import {
  OPEN_SIDE_MENU,
  NAVIGATE_SCREEN,
  BACK_SCREEN,
} from "../constants";

export const openSideMenu = (flag = true) => {
  return {
    type: OPEN_SIDE_MENU,
    flag
  }
};

export const navigateScreen = (flag = null) => {
  return {
    type: NAVIGATE_SCREEN,
    flag
  }
};

export const backScreen = (flag = null) => {
  return {
    type: BACK_SCREEN,
    flag
  }
};