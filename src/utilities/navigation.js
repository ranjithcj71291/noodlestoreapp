import * as React from 'react'
import { CommonActions, DrawerActions, StackActions } from '@react-navigation/native'

export const navigationRef = React.createRef()

const drawerScreens = ['PublicHome']
const resetScreens = ['PublicHome']

export const navigate = (routeName, params = []) => {
  if (resetScreens.includes(routeName)) {
    navigateReset(routeName, params)
    return
  }

  let args = []
  if (drawerScreens.includes(routeName)) {
    args = ['Drawer', { screen: routeName, params }]
  } else {
    args = [routeName, params]
  }
  let action = StackActions.push(...args)
  navigationRef.current?.dispatch(action)
}

export const navigateReset = (routeName, params = []) => {
  let args = []
  if (drawerScreens.includes(routeName)) {
    args = [{ name: 'Drawer', params }]
  } else {
    args = [{ name: routeName, params }]
  }
  navigationRef.current?.dispatch(state => {
    console.log(state.routes)
    // Remove the home route from the stack
    const routes = state.routes.filter(r => r.name !== 'Home');
  
    return CommonActions.reset({
      routes: args,
      index: 1,
    });
  });
}

export const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer())
}
export const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer())
}

export const back = () => {
  navigationRef.current?.dispatch(CommonActions.goBack())
}
