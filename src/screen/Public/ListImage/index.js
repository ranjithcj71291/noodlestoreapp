import React from 'react'
import { Container, Content } from 'native-base'

import AsyncStorage from '@react-native-community/async-storage'

import Header from '@component/Header'
import theme from '@theme/styles'
import { bind } from '@utility/component'
import request from '@utility/request'
import { __ } from '@utility/translation'

import Noodle from './Noodle'
import noodleList from './data/noodle'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      noodleList: [],
      fetchingNoodleList: true
    }

    bind(this)
    this.fetchNoodleList = this.fetchNoodleList.bind(this)
  }

  async componentDidMount() {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })
    await this.fetchNoodleList()
  }

  async fetchNoodleList() {
    await this.promisedSetState({
      fetchingNoodleList: true
    })
    const list = await request(noodleList)
    await this.promisedSetState({
      noodleList: list,
      fetchingNoodleList: false
    })
  }

  render() {
    return (
      <Container style={theme.layout}>
        <Header
          navLeftType='back'
          statusBarType='dark'
          navMiddleType='medium'
          title={__('Listing Image')}
          navRightType='grid'
        />
        <Content contentContainerStyle={theme.layoutFx}>
          <Noodle
            language={this.state.language}
            list={this.state.noodleList}
            fetching={this.state.fetchingNoodleList}
          />
        </Content>
      </Container>
    )
  }
}