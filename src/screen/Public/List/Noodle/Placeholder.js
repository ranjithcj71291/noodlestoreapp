import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.itemBtn}>
          <View style={styles.itemBrandCol}>
            <PlaceholderLine width={30} style={styles.itemBrand} />
            <PlaceholderLine width={10} style={styles.itemTop} />
          </View>
          <PlaceholderLine width={20} style={styles.itemVariety} />
          <View style={styles.itemCountryCol}>
            <PlaceholderLine width={10} style={styles.itemCountry} />
            <PlaceholderLine width={15} style={styles.itemStyle} />
          </View>
          <View style={styles.itemStarRow}>
            <PlaceholderLine width={10} style={styles.itemStars} />
          </View>
        </View>
      </Placeholder>
    )
  }
}