import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

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
        <View style={styles.itemImage}>
          <Image source={{ uri: item.Image }} style={styles.itemImg} />
        </View>
      </TouchableOpacity>
    )
  }
}