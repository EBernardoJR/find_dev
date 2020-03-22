import React from 'react';
import Routes from './src/routes'
import { StatusBar } from 'react-native'


export default function App() {


  function hello(){
    alert('Iae, tudo bem?')
  }

  return (
    <>
      <StatusBar 
      barStyle='light-content'//branco
      backgroundColor='#7d40e7' //no android
      />
      <Routes />
    </>
  ); 
}
