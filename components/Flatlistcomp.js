import React from 'react'
import { Text, View, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { styles } from '../mycss'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Flatlistcomp = ({ vardata }) => {
  const myOnClick = (item) => {
    Alert.alert(item.description)
  }
return (
    <View>
      <FlatList
        data={vardata}
        // keyExtractor={item=>item.id}

        renderItem={({ item }) =>

          <TouchableOpacity onPress={()=>myOnClick(item)}>
            <View style={{ marginHorizontal: 15 }}>
              <View style={{ backgroundColor: 'white', padding: 10, marginVertical: 10, borderRadius: 10, flexDirection:'row'}} >
                <View style={{width:'35%'}}>
                  <Image source={{ uri: item.image }} style={{ resizeMode: 'center', width: 100, height: 100, marginTop: 25, marginHorizontal: 8 }} />
                </View>
                <View style={{width:'65%',justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={styles.FlatText}>{item.title}</Text>
                  <Text style={styles.FlatText}>$ {item.price}</Text>
                  <View style={{ flexDirection: 'row'}}>
                                    <AntDesign name='staro' style={{ color: 'orange', paddingRight: 4, paddingTop: 1, fontSize: 15 }} />
                                    <Text style={styles.FlatText}>{item.rating.rate}</Text>
                                </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        } />
    </View>
  )
}
export { Flatlistcomp }