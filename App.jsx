/**
 * Application entry point to render the application.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BracketChallenge from './screens/BracketChallenge';
import DailyChallenge from './screens/DailyChallenge';
import DailyFantasy from './screens/DailyFantasy';
import FantasyLeague from './screens/FantasyLeague';
import MatchPredictor from './screens/MatchPredictor';

const Tab = createBottomTabNavigator();

/**
 * A function that returns a React component that renders the bottom tab navigator.
 *
 * @function App
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Daily Challenge"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Daily Challenge"
          component={DailyChallenge}
          options={{
            headerShown: false,
            tabBarLabel: 'Challenge',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="check-decagram" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Fantasy League"
          component={FantasyLeague}
          options={{
            headerShown: false,
            tabBarLabel: 'Fantasy',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="soccer" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Daily Fantasy"
          component={DailyFantasy}
          options={{
            headerShown: false,
            tabBarLabel: 'Daily',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-today" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Match Predictor"
          component={MatchPredictor}
          options={{
            headerShown: false,
            tabBarLabel: 'Predictor',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="counter" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Bracket Challenge"
          component={BracketChallenge}
          options={{
            headerShown: false,
            tabBarLabel: 'Bracket',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sitemap" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
