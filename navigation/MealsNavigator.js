import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Meals from '../screens/Meals';
import Colors from '../constants/Colors';
import Cart from '../screens/Cart';

const MealsNavigator = createStackNavigator({
    Meals: {
        screen: Meals,
    },
    Cart: {
        screen: Cart,
    }
}, {
    // mode:'modal', //ios
    //initialRouteKey:''
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "white",
    }
});

export default createAppContainer(MealsNavigator);