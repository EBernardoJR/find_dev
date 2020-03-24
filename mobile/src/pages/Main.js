import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps'
import { Image, StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
//pedir permissao ao usuario - pegar localização
import { MaterialIcons } from '@expo/vector-icons'//icones
import api from '../services/api'
// import { Container } from './styles';

function Main({ navigation }){

  const [currentRegion, setCurrentRegion ] = useState(null)
  const [ devs, setDevs ] = useState([])
  const [ text, setText ] = useState('')

  useEffect(()=>{
    async function loadInitialPosition(){
      //pegar a localização do usuário
      const { granted } = await requestPermissionsAsync()//se foi dada permissao

      if(granted){//se foi dada permissao
        const { coords }= await getCurrentPositionAsync({
          enableHighAccuracy: true //o gps tem que ta habilitado
        })

  
        const { latitude, longitude } = coords
        setCurrentRegion({
          latitude, 
          longitude,
          latitudeDelta: 0.02,//zoom
          longitudeDelta: 0.02,
        })
      }
    }

    loadInitialPosition()
  },[])


  async function loadDevs(){
    const { latitude, longitude } = currentRegion //localização do usuário

    const response = await api.get('/search', {
      //query params
      params: {
        latitude,
        longitude, 
        techs: text
      },
    })

    console.log(response.data.devs)
    setDevs(response.data.devs)
  }

  function handleRegionChange(region){
    setCurrentRegion(region)//vai mudar a localização quando for pra outra area
  }

  if(!currentRegion){
    return null //so vai retornar o mapa se pegar a localização
  }

  //marker coloca marcadores
  //onRegionChangeComplete => quando o usuário mudar a localização no mapa
  return (
  <>
  <MapView onRegionChangeComplete={handleRegionChange} 
    style={styles.map}
    initialRegion={currentRegion}
    >
      { devs.map(dev=> (
        <Marker key={dev._id} coordinate={{ latitude: dev.location.coordinates[1], longitude: dev.location.coordinates[0] }}>
        <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />
        {/*O que vai aparecer quando o marker for clicado*/}
        <Callout onPress={()=>{
          //nevagar para proxima page
          navigation.navigate('Profile', 
          {
            //parametros para serem enviados
            github_username: dev.github_username
          })
        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>{dev.name}</Text>
            <Text style={styles.devBio}>{dev.bio}</Text>
            <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
          </View>
        </Callout>
      </Marker>
      ))}
    </MapView>
    <SafeAreaView style={styles.searchForm}>
        <TextInput 
        style={styles.searchInput}
        placeholder='Buscar Usuários'
        placeholderTextColor='#999'
        autoCapitalize='words' 
        autoCorrect={false}
        value={text}
        onChangeText={text => setText(text)}
        />
        <TouchableOpacity style={styles.loadButton}onPress={loadDevs}>
          <MaterialIcons name='my-location' style={styles.icon}/>
        </TouchableOpacity>
    </SafeAreaView>
    </>
  )
  }

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff'
  },
  callout: {
    width: 200,

  },
  devName: {
    fontSize: 16,
    fontWeight: 'bold'
  }, 
  devBio: {
    color: '#666',
    marginTop: 5
  },
  devTechs: {
    marginTop: 5,
    fontWeight: '200'
  },
  searchForm: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    zIndex: 5, //forçar para ficar em cima do mapa
    flexDirection: 'row'
  },
  searchInput:{
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    //ios
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    //android
    elevation: 2,
    opacity: 0.8
  },
  loadButton: {
    width: 50, 
    height: 50,
    backgroundColor: '#8e4dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
  icon: {
    fontSize: 25
  }
})

export default Main;
