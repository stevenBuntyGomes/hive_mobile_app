import React, {useEffect, useRef, useState} from 'react'
import WebView from 'react-native-webview';
import {BackHandler, View, Text} from 'react-native'


const Main = () => {
  const webviewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [baseUrl, setBaseUrl] = useState('no');
  const handleReload = () => {
    
    // webviewRef.current.reload();
  };

  const handleExit = () => {
    
  }

  const handleLoadProgress = (event) => {
    const { url } = event.nativeEvent;
    if(url !== 'https://hive-fexdevers.netlify.app/'){
        const handleReload = () => {
          if (webviewRef.current) {
            webviewRef.current.goBack();
          }
          return true;
        }
        BackHandler.addEventListener(
          "hardwareBackPress", handleReload
        );
    }else if(url == 'https://hive-fexdevers.netlify.app/'){
        const handleReload = () => {
              if (webviewRef.current) {
                BackHandler.exitApp();
              }
              return true;   
            }
          
            BackHandler.addEventListener(
              "hardwareBackPress", handleReload
            );
        
      
    }
    // if(url == 'https://hive-fexdevers.netlify.app/'){
    //   BackHandler.addEventListener("hardwareBackPress", handleExit);
    // }
  };


  useEffect(() => {
    BackHandler.addEventListener(
      "hardwareBackPress", handleReload
    );
  }, []);
  return (
    <>
    <View>
      
    </View>
      <WebView 
        source={{ uri: 'https://hive-fexdevers.netlify.app/' }} style={{ flex: 1 }} 
        ref={webviewRef}
        onLoadProgress={handleLoadProgress}
      />
    </>
  )
}

export default Main