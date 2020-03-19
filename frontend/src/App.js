import React, { useEffect, useState } from 'react';
import './App.css';
import './global.css'
import './Aside.css'
import api from './services/Api'
import DevItem from './components/DevItems'
import DevForm from './components/DevForm'
//acessando a localização




function App() {

  const [ devs, setDevs ] = useState([]) 


  //buscar os devs na api
  useEffect(()=> {
    async function loadDevs(){
      const response = await api.get('/devs')
      setDevs(response.data)
    }

    loadDevs()
  }, [])



  async function handleAddDev(data){

    const response = await api.post('/devs', data)
    console.log(response.data)
  
    setDevs([...devs, response.data])
  }



  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
        
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          { devs.map(dev => (

            <DevItem key= {dev._id} dev={dev} />
          ))
          
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
