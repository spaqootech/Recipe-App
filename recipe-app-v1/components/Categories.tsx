import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Category from './Category'
import className from 'twrnc'

const Categories = () => {
  return (
    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={className`flex-row justify-start items-center gap-4`}>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
    </View>
    </ScrollView>
    </View>
  )
}

export default Categories