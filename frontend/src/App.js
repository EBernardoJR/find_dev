import React, { useEffect, useState } from 'react';
import './App.css';
import './global.css'
import './Aside.css'
import './Main.css'

//acessando a localização




function App() {
  const [ github_username, setGithubUsername] = useState('')
  const [ techs, setTechs ] = useState('') 

  const [latitude, setLatitude ] = useState(0)
  const [longitude, setLongitude ] = useState(0)

  useEffect(() => navigator.geolocation.getCurrentPosition( position => {
    const { latitude, longitude } = position.coords
    setLatitude(latitude)
    setLongitude(longitude)
  }, erro => {
    console.log(erro)
  },
  {
    //opções
    timeout: 30000, //30s
    //localização precisa (no celular precisa ta com o gps habilitado)
    //enableHighAccuracy
  }
  )
  , [])

  async function handleAddDev(e){
    e.preventDefault() //evitar q saia da page ao enviar

    

  }



  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">
              Usuário do Github
            </label>
            <input name="github_username" id="github_username" required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">
              Tecnologias
            </label>
            <input name="techs" id="techs" required
            value={techs}
            onChange={e => setTechs(e.target.value)} />
          </div>


          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">
                Latitude
              </label>
              <input name="latitude" type="number" id="latitude" required value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
            <label htmlFor="longitude">
              Longitude
            </label>
            <input name="longitude" type="number" id="longitude" required value={longitude}
            onChange={e => setLongitude(e.target.value)}
            />
            </div>

          </div>
          <button type="submit">Enviar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50339193?s=460&u=6f7c9b8bae25d3fbdf5a9a8c4f6d5fa2afd1ddcf&v=4" alt="User"/>
              <div className="user-info">
                <strong>Emanoel Bernardo</strong>
                <span>ReactJS, React Native, VueJS</span>
              </div>
            </header>
            <p>Eletronic Engineer, Programmer Python, JavaScript(React - Frontend, NodeJS - Backend, React native - Mobile).</p>
            <a href="https://github.com/EBernardoJR">Acessar Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50339193?s=460&u=6f7c9b8bae25d3fbdf5a9a8c4f6d5fa2afd1ddcf&v=4" alt="User"/>
              <div className="user-info">
                <strong>Emanoel Bernardo</strong>
                <span>ReactJS, React Native, VueJS</span>
              </div>
            </header>
            <p>Eletronic Engineer, Programmer Python, JavaScript(React - Frontend, NodeJS - Backend, React native - Mobile).</p>
            <a href="https://github.com/EBernardoJR">Acessar Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50339193?s=460&u=6f7c9b8bae25d3fbdf5a9a8c4f6d5fa2afd1ddcf&v=4" alt="User"/>
              <div className="user-info">
                <strong>Emanoel Bernardo</strong>
                <span>ReactJS, React Native, VueJS</span>
              </div>
            </header>
            <p>Eletronic Engineer, Programmer Python, JavaScript(React - Frontend, NodeJS - Backend, React native - Mobile).</p>
            <a href="https://github.com/EBernardoJR">Acessar Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
