import { View, Text } from 'react-native'
import React from 'react'
import Recipe from './Recipe'
import className from 'twrnc'
import { useRouter } from 'expo-router'

const Recipies = () => {
    const router = useRouter()
  return (
    <View style={className`flex-1 flex-col gap-3`}>

        {/* row */}
        <View style={className`flex-row justify-between items-center`}>
        <Recipe onPress={()=>router.push('recipeScreen')}/>
        <Recipe onPress={()=>router.push('recipeScreen')}/>
    </View>
        {/* row */}

        {/* row */}
        <View style={className`flex-row justify-between items-center`}>
        <Recipe onPress={()=>router.push('recipeScreen')}/>
        <Recipe onPress={()=>router.push('recipeScreen')}/>
    </View>
        {/* row */}

        {/* row */}
        <View style={className`flex-row justify-between items-center`}>
        <Recipe onPress={()=>router.push('recipeScreen')}/>
        <Recipe onPress={()=>router.push('recipeScreen')}/>
    </View>
        {/* row */}

    </View>
  )
}



export default Recipies
