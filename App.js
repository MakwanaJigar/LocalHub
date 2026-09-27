import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
    // SafeAreaProvider is required for SafeAreaView from
    // react-native-safe-area-context to get the insets
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
