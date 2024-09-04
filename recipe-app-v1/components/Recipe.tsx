import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Recipe = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={className` w-42`}>
      <Image style={className`h-50 w-[100%]  rounded-3xl bg-gray-200`}/>
      <Text style={className`text-gray-500 font-semibold text-md text-center`}>Recipe</Text>
    </Pressable>
  )
}

export default Recipe