import React from 'react'
import { Image, Text, View } from 'react-native'
import { Container, Content, Icon } from 'native-base'

import styles from './styles'

import Header from '@component/Header'
import theme from '@theme/styles'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render() {
    return (
      <Container style={theme.layout}>
        <Header
          navLeftType='back'
          statusBarType='dark'
          navMiddleType='medium'
          title={__('List View')}
        />
        <Content contentContainerStyle={theme.layoutFx}>
          <Image source={{ uri: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Hakka-Noodles-2-34755e38.jpeg' }} style={styles.img} />
          <View style={styles.content}>
            <View style={styles.contentCol}>
              <Text style={styles.title}>MAMA</Text>
              <Text style={styles.top}>2016 #10</Text>
            </View>
            <Text style={styles.desc}>Instant Noodles Coconut Milk Flavour</Text>
            <View style={styles.contentInfo}>
              <Text style={styles.country}>Myanmar</Text>
              <View style={styles.contentInfoCol}>
                <View style={styles.starRow}>
                  <Text style={styles.stars}>5</Text>
                  <View style={styles.starCol}>
                    <Icon name='star' type='FontAwesome' style={styles.starIcon} />
                    <Icon name='star' type='FontAwesome' style={styles.starIcon} />
                    <Icon name='star' type='FontAwesome' style={styles.starIcon} />
                    <Icon name='star' type='FontAwesome' style={styles.starIcon} />
                    <Icon name='star' type='FontAwesome' style={styles.starIcon} />
                  </View>
                </View>
                <Text style={styles.style}>Pack</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}