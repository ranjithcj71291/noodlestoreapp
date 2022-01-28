import React from 'react'
import { Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native'
import { Container, Content, Icon } from 'native-base'

import AsyncStorage from '@react-native-community/async-storage'
import Modal from 'react-native-modalbox'
import { RadioButton } from 'react-native-paper'

import styles from './styles'

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
      fetchingNoodleList: true,

      checkStar: 'two',
      checkBrand: ''
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
    const { checkStar } = this.state
    return (
      <Container style={theme.layout}>
        <Header
          navLeftType='menu'
          statusBarType='dark'
          navMiddleType='medium'
          title={__('Listing Grid')}
          navRightType='image'
        />
        <Content contentContainerStyle={theme.layoutFx}>
          <View style={styles.search}>
            <TextInput
              placeholder={__('Search by Brand')}
              placeholderTextColor='rgba(0, 0, 0, 0.5)'
              style={styles.searchInputText}
            />
            <TouchableOpacity onPress={() => this.refs.modalBrand.open()}>
              <Icon name='search' type='FontAwesome' style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <Noodle
            language={this.state.language}
            list={this.state.noodleList}
            fetching={this.state.fetchingNoodleList}
          />
        </Content>

        <Modal
          ref={'modalStar'}
          position={'center'}
          isOpen={this.state.isOpen}
          style={styles.modalStarContent}
        >
          <View>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>{__('Sort by Stars')}</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={() => this.refs.modalStar.close()}>
                <Icon name='close' type='AntDesign' style={styles.closeBtnIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.checkBtn}>
              <TouchableOpacity onPress={() => this.refs.modalStar.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('1 Star')}</Text>
                <RadioButton
                  value='one'
                  status={checkStar === 'one' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkStar: 'one' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalStar.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('2 Stars')}</Text>
                <RadioButton
                  value='two'
                  status={checkStar === 'two' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkStar: 'two' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalStar.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('3 Stars')}</Text>
                <RadioButton
                  value='three'
                  status={checkStar === 'three' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkStar: 'three' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalStar.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('4 Stars')}</Text>
                <RadioButton
                  value='four'
                  status={checkStar === 'four' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkStar: 'four' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalStar.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('5 Stars')}</Text>
                <RadioButton
                  value='five'
                  status={checkStar === 'five' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkStar: 'five' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalStar.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('No Stars')}</Text>
                <RadioButton
                  value='none'
                  status={checkStar === 'none' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkStar: 'none' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          ref={'modalBrand'}
          position={'center'}
          isOpen={this.state.isOpen}
          style={styles.modalBrandContent}
        >
          <View>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>{__('Sort by Brand')}</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={() => this.refs.modalBrand.close()}>
                <Icon name='close' type='AntDesign' style={styles.closeBtnIcon} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.checkBtn}>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('MAMA')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Prima Taste')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Tseng Noodles')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('A-Sha Dry Noodle')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('MyKuali')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('CarJEN')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Sapporo Ichiban')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Samyang Foods')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Paldo')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Indomie')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Koka')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Mi Sedaap')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Nissin')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Myojo')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.refs.modalBrand.close()} style={styles.checkBtnRow}>
                <Text style={styles.checkBtnText}>{__('Doll')}</Text>
                <RadioButton
                  onPress={() => { this.setState({ checkBrand: '' }) }}
                  color={'rgba(143, 72, 30, 1)'}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>

        <View>
          <View style={theme.footerCol}>
            <TouchableOpacity style={theme.footerBtn} onPress={() => this.refs.modalStar.open()}>
              <Icon name='sort' type='FontAwesome' style={theme.footerBtnIcon} />
              <Text style={theme.footerBtnText}>{__('Sort By')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={theme.footerBtn} onPress={() => this.refs.modalBrand.open()}>
              <Icon name='filter' type='FontAwesome' style={theme.footerBtnIcon} />
              <Text style={theme.footerBtnText}>{__('Brand')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    )
  }
}