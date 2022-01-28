import React from 'react'
import { Dimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* Public Screens */
import PublicList from '@screen/Public/List'
import PublicListImage from '@screen/Public/ListImage'
import PublicListView from '@screen/Public/ListView'

/* Navigation */
import { navigationRef } from '@utility/navigation'
import { setDefaultLocale } from '@utility/translation'

const Stack = createStackNavigator()

const { width } = Dimensions.get('window')

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress
  }
})

const options = {
  cardStyleInterpolator: forFade
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAppInitiated: false
    }

    this.checkIsAppInitiated = this.checkIsAppInitiated.bind(this)
  }

  async componentDidMount() {
    await this.checkIsAppInitiated()
  }

  async checkIsAppInitiated() {
    await setDefaultLocale()
    this.setState({
      isAppInitiated: true
    })
  }

  render() {
    if (!this.state.isAppInitiated) {
      return null
    }

    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='PublicList' headerMode='none'>

          <Stack.Screen name='PublicList' component={PublicList} />
          <Stack.Screen name='PublicListImage' component={PublicListImage} />
          <Stack.Screen name='PublicListView' component={PublicListView} />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}