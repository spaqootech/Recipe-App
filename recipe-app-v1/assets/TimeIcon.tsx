import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'

const TimeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={className`size-10 bg-white drop shadow-inner p-3 rounded-full`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

  )
}

export default TimeIcon