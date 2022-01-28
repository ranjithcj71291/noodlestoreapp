import React from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render() {
    return (
      <Placeholder
        Animation={Fade}
      >
        <View style={styles.itemBtn}>
          <View style={styles.itemImage}>
            <PlaceholderMedia style={styles.itemImg} />
          </View>
        </View>
      </Placeholder>
    )
  }
}