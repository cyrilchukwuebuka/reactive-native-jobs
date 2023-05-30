import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/useFetch'

const Popularjobs = () => {
  const router = useRouter()
  const { data, isLoading, error, reFetchData } = useFetch(
    'search',
    {
      query: 'React developer',
      page: '1',
      num_pages: '1'
    }
  )
  const [selectedJob, setSelectedJob] = useState()
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item => Math.random(5) + 'item?.job?.id')}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            renderItem={({ item }) => (
              <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={() => handleCardPress(item)} />
            )} />
        )}
      </View>
    </View>
  )
}

export default Popularjobs