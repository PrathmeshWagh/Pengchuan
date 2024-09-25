import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  useEffect(() =>{
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000);
  })
  return (
    <WebView source={{ uri: 'https://erp.pcgroup.com.sg/mobile/login' }} style={{ flex: 1 }} />
  )
}

export default App

const styles = StyleSheet.create({})