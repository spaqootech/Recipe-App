import { View, Text } from 'react-native'
import React from 'react'
import Circle from '@/assets/Circle'
import className from 'twrnc'
const Ingredients = () => {
  return (
    <View style={className`flex-row justify-start items-center gap-3 pl-5`}>
        <Circle/>
      <Text style={className`text-lg font-bold`}>Amount</Text>
      <Text style={className`text-lg`}>Thing</Text>
    </View>
  )
}

export default Ingredients