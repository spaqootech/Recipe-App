import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Category = () => {
  return (
    <Pressable style={className`flex-col justify-center items-center`}>
      <Image style={className`bg-gray-500 rounded-full h-15 w-15 `}/>
      <Text style={className`text-gray-500 font-semibold text-md text-center`}>category</Text>
    </Pressable>
  )
}

export default Category