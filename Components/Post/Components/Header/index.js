import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../../ProfilePicture'
import { styles } from './style'

const Header = ({uri,name}) => {
    
    return (
        <View style={styles.container}>
            <ProfilePicture uri={uri} size={'small'}/>
            <Text style={styles.name}>{name}</Text>
            <FontAwesomeIcon icon={faEllipsisV} size={20} color={ 'gray' }/>
        </View>
    )
}

export default Header
