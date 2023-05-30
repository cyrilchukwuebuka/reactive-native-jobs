import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageUrl } from '../../../../utils'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageUrl(job?.employer_logo) ? job?.employer_logo : 'https://upload.wikimedia.org/wikipedia/en/5/5b/Bass_Pro_Shops_logo.png' }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard