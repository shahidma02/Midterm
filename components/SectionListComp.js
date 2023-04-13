import React from 'react'
import { Text, View ,TouchableOpacity,SectionList} from 'react-native';
import {styles} from '../mycss'

const SectionListComp = ({mydata}) => {
  return (
    <View>
        <SectionList
        sections={mydata}
        keyExtractor={item=>item.key}
        renderSectionHeader={({section:{title}})=>(
            <Text>{title}</Text>
        )}
        renderItem={({item})=>
        <TouchableOpacity>
            <Text style={styles.FlatText}>{item.title}</Text>
        </TouchableOpacity>}
        />
    </View>
  )
}

export {SectionListComp}