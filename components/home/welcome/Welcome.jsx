import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

const jobTypes = ['Full-time', 'Part-time', 'Contract']

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobTypes[0])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Cyril</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search} resizeMode='contain'
            style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity key={index} style={styles.tab(activeJobType, item)} onPress={() => {
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome