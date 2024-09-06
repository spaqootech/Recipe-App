import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Image, FlatList, ScrollView, Animated } from 'react-native';
import className from 'twrnc';
import PersonIcon from '@/assets/PersonIcon';
import BellIcon from '@/assets/BellIcon';
import SearchIcon from '@/assets/SearchIcon';
import categories from '../assets/data/categories.json';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredCategories, setFilteredCategories] = useState(categories); // State for filtered categories

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value
  const translateAnim = useRef(new Animated.Value(30)).current; // Initial position (off-screen)

  // Animation effect for fade and slide-in
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Filter categories based on search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCategories(categories); // Reset to full list when search is empty
    } else {
      const filtered = categories.filter((category) =>
        category.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered); // Update the filtered list
    }
  }, [searchQuery]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={className`flex-1`}>

        {/* Header */}
        <View style={className`p-5 flex-row items-center justify-between`}>
          <PersonIcon />
          <BellIcon />
        </View>

        {/* Greeting Texts */}
        <View style={className`p-5 pt-0`}>
          <Text style={className`font-semibold text-lg`}>Hello, Spaqoo!</Text>
          <Text style={className`font-bold text-3xl`}>
            Make your own food, stay at
            <Text style={className`text-orange-500`}> home</Text>
          </Text>
        </View>

        {/* Search input */}
        <View style={className`bg-gray-200 p-1 px-2 rounded-full mx-5 flex-row justify-start items-center gap-2`}>
          <TextInput
            placeholder='Search any recipe'
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            style={className`flex-1 text-lg font-semibold text-gray-500 p-3 rounded-l-full`}
          />
          <SearchIcon />
        </View>

        {/* Categories with Animation */}
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: translateAnim }] }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={className`gap-5 p-5`}
            data={filteredCategories}
            keyExtractor={(item) => item.idCategory}
            renderItem={({ item }) => (
              <View>
                <Image source={{ uri: item.strCategoryThumb }} style={className`h-12 w-15`} />
                <Text style={className`font-semibold text-gray-500 mt-1`}>{item.strCategory}</Text>
              </View>
            )}
          />
        </Animated.View>

        {/* Recipes with Animation */}
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: translateAnim }] }}>
          <Text style={className`px-5 text-3xl font-semibold`}>Recipes</Text>

          <FlatList
            data={filteredCategories}
            keyExtractor={(item) => item.idCategory}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={className`flex-1 p-5`}>
                <Image source={{ uri: item.strCategoryThumb }} style={className`h-28 w-42`} />
                <Text style={className`text-center font-semibold text-gray-500 mt-1`}>{item.strCategory}</Text>
              </View>
            )}
          />
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default Home;
