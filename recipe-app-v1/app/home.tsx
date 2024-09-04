import { View, Text, TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import PersonIcon from '@/assets/PersonIcon'
import BellIcon from '@/assets/BellIcon'
import SearchIcon from '@/assets/SearchIcon'
import Category from '@/components/Category'
import Categories from '@/components/Categories'
import Recipe from '@/components/Recipe'
import Recipies from '@/components/Recipies'

const home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={className`p-5 gap-5 flex-1`}>
      
      {/* header */}
      <View style={className`flex-row justify-between items-center`}>
        <PersonIcon/>
        <BellIcon/>
      </View>
      {/* header */}


      {/* texts */}
      <View>
        <Text style={className`font-semibold text-lg`}>Hello, Spaqoo</Text>
        <Text style={className`mt-2 font-bold text-3xl`}>Make yourr own food, Stay at 
            <Text style={className`text-orange-500`}> home</Text>
        </Text>
      </View>
      {/* texts */}


      {/* Search Bar */}
      <View style={className`flex-row  justify-start items-center gap-3 p-1 px-2 bg-gray-200 rounded-full`}>
        <TextInput placeholder='Search any recipe' style={className`text-gray-500 font-semibold text-lg flex-1 rounded-l-full p-3`}/>
        <SearchIcon/>
      </View>
      {/* Search Bar */}


      {/* Categories */}
      <Categories/>
      {/* Categories */}

      {/* Recipies */}
      <Recipies/>
      {/* Recipies */}

    </View>
    </ScrollView>
  )
}

export default home