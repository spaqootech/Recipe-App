import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { useRouter } from 'expo-router'
const index = () => {
    const router = useRouter()
  return (
    <Pressable onPress={()=>router.push('/home')}
     style={className`p-5 py-30 gap-5 flex-1 justify-between items-center bg-orange-500`}>
        <View></View>

        <View style={className`shadow-xl p-5 rounded-full`}>
            <Image style={className`bg-gray-100 h-50 w-50 rounded-full`}/>
        </View>
        <View>
        <Text style={className`text-6xl font-bold text-white text-center`}>Foody</Text>
        <Text style={className`text-xl mt-2 font-semibold text-white text-center`}>Food is always right</Text>
        </View>
    </Pressable>
  )
}

export default index