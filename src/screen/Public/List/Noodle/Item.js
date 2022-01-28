import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'native-base'

import styles from '../styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {

  render() {
    const item = this.props.item

    return (
      <TouchableOpacity style={styles.itemBtn} onPress={() => {
        navigate('PublicListView')
      }}>
        <View style={styles.itemBrandCol}>
          <Text style={styles.itemBrand}>{item.Brand}</Text>
          <Text style={styles.itemTop}>{item.Top_Ten}</Text>
        </View>
        <Text style={styles.itemVariety}>{item.Variety}</Text>
        <View style={styles.itemCountryCol}>
          <Text style={styles.itemCountry}>{item.Country}</Text>
          <Text style={styles.itemStyle}>{item.Style}</Text>
        </View>
        <View style={styles.itemStarRow}>
          <Text style={styles.itemStars}>{item.Stars}</Text>
          <View style={styles.itemStarCol}>
            <Icon name='star' type='FontAwesome' style={styles.itemStarIcon} />
            <Icon name='star' type='FontAwesome' style={styles.itemStarIcon} />
            <Icon name='star' type='FontAwesome' style={styles.itemStarIcon} />
            <Icon name='star-half-o' type='FontAwesome' style={styles.itemStarIcon} />
            <Icon name='star-o' type='FontAwesome' style={styles.itemStarIcon} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}