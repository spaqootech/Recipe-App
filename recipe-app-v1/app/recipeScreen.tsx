import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowLeft from '@/assets/ArrowLeft'
import HeartIcon from '@/assets/HeartIcon'
import TimeIcon from '@/assets/TimeIcon'
import Ingredients from '@/components/Ingredients'

const recipeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

<View style={className`p-2 flex-1 gap-5`}>
        <Image style={className`fixed bg-gray-200 h-100 rounded-3xl`}/>
        <View style={className`p-2 flex-row justify-between items-center absolute left-5 top-5 right-5`}>
            <ArrowLeft/>
            <HeartIcon/>
        </View>

        {/* texts */}
        <View style={className`p-2`}>
        <Text style={className`text-2xl font-semibold`}>Recipe Name </Text>
        <Text style={className`text-lg font-semibold text-gray-500`}>Country</Text>
        </View>
        {/* texts */}


        {/* icons & details */}
          <View style={className`flex-row justify-between items-center`}>
            
          <View style={className`bg-gray-200 p-2 rounded-full shadow-inner justify-center items-center gap-1`}>
              <TimeIcon/>
              <Text style={className`text-xl font-bold`}>35</Text>
              <Text style={className`text-md font-semibold`}>Mins</Text>
            </View>

            <View style={className`bg-gray-200 p-2 rounded-full shadow-inner justify-center items-center gap-1`}>
              <TimeIcon/>
              <Text style={className`text-xl font-bold`}>35</Text>
              <Text style={className`text-md font-semibold`}>Mins</Text>
            </View>

            <View style={className`bg-gray-200 p-2 rounded-full shadow-inner justify-center items-center gap-1`}>
              <TimeIcon/>
              <Text style={className`text-xl font-bold`}>35</Text>
              <Text style={className`text-md font-semibold`}>Mins</Text>
            </View>

            <View style={className`bg-gray-200 p-2 rounded-full shadow-inner justify-center items-center gap-1`}>
              <TimeIcon/>
              <Text style={className`text-xl font-bold`}>35</Text>
              <Text style={className`text-md font-semibold`}>Mins</Text>
            </View>

          </View>
        {/* icons & details */}


        {/* ingridient */}
        <View style={className`gap-2`}>
          <Text style={className`text-xl font-bold`}>Ingredients</Text>
          <Ingredients/>
          <Ingredients/>
          <Ingredients/>
          <Ingredients/>
          <Ingredients/>
        </View>
        {/* ingridient */}

        {/* instructions */}
        <Text style={className`text-xl font-bold`}>Instruction</Text>
        {/* instructions */}

    </View>
    </ScrollView>
  )
}

export default recipeScreen