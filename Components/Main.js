import React from 'react'
import WebView from 'react-native-webview';

const Main = () => {
  return (
    <WebView source={{ uri: 'https://hive-fexdevers.netlify.app/' }} style={{ flex: 1 }} />
  )
}

export default Main