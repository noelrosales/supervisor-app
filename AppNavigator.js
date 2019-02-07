import {createStackNavigator, createAppContainer} from 'react-navigation';
import JobsScreen from './screens/JobsScreen';
import AttendeesScreen from './screens/AttendeesScreen';
import RatingsScreen from './screens/Ratings';

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