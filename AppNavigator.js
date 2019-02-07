import {createStackNavigator, createAppContainer} from 'react-navigation';
import JobsScreen from './src/screens/JobsScreen';
import AttendeesScreen from './src/screens/AttendeesScreen';
import RatingsScreen from './src/screens/Ratings';

const Navigator = createStackNavigator({
    Jobs: {
        screen: JobsScreen
    },
    Attendees: {
        screen: AttendeesScreen
    },
    Ratings: {
        screen: RatingsScreen
    }
});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;