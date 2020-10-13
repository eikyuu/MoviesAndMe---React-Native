import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import Search from '../Search';

const SearchStackNavigator = createStackNavigator({
  Search: { 
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  }
})

export default createAppContainer(SearchStackNavigator)