import { View, Text, Image, Pressable, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import className from 'twrnc';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current; // For opacity
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // For scaling

  // Trigger animations when the component is mounted
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Pressable onPress={() => router.push('home')} style={className`bg-orange-500 flex-1 justify-center items-center`}>
      {/* Animated Logo */}
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
        <Image source={require('../assets/logo.webp')} style={className`w-70 h-70`} />
      </Animated.View>

      {/* Animated Texts */}
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
        <Text style={className`text-6xl font-bold text-white`}>Foody</Text>
        <Text style={className`text-lg text-white font-semibold mt-2`}>Food is always right!</Text>
      </Animated.View>
    </Pressable>
  );
}

export default Index;
