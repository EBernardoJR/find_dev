import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//pages
import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        //rotas,
        Main: {
            screen: Main, //qual o componente q vai ser renderizado
            navigationOptions: {
                title: 'Home',
                // headerTitle: caso fosse um componente
            }
        }, 
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no Github'
            }
        }
    }, {//config
    defaultNavigationOptions: {
        headerBackTitleVisible: false,//não mostra o nome da rota no botão voltar
        headerTintColor: '#fff',//cor do texto
        headerStyle:{
            backgroundColor: '#7d40e7',
        }
    }
    }
    )
);//unica vez na aplicação


export default Routes