/**
 * Application entry point to render the application.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 * @license   MIT
 * @since     1.1.0 Introduce Player of the Match and Who Am I? tabs.
 * @since     0.0.1
 */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BracketPredictor,
  DailyChallenge,
  DailyFantasy,
  FantasyLeague,
  MatchPredictor,
  PlayerMatch,
  WhoAmI,
} from './components/AppScreens';

/**
 * A constant that defines the bottom tab navigator.
 */
const Tab = createBottomTabNavigator();

/**
 * Main application constructor that returns a React Navigation Container
 * component and renders the bottom tab navigator.
 * @constructor
 * @returns {JSX.Element} Navigation Container component with bottom tab navigator.
 */
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Daily Challenge"
        screenOptions={{
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          tabBarStyle: {
            backgroundColor: 'rgb(85, 0, 101)',
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Daily Challenge"
          component={DailyChallenge}
          options={{
            headerShown: false,
            tabBarLabel: 'Challenge',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="check-decagram" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'rgb(17, 153, 250)',
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
            tabBarActiveTintColor: 'rgb(3, 207, 184)',
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
            tabBarActiveTintColor: 'rgb(255, 255, 255)',
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
            tabBarActiveTintColor: 'rgb(246, 69, 1)',
          }}
        />
        <Tab.Screen
          name="Player Of The Match"
          component={PlayerMatch}
          options={{
            headerShown: false,
            tabBarLabel: 'POTM',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="run-fast" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'rgb(220, 0, 25)',
          }}
        />
        <Tab.Screen
          name="Who Am I?"
          component={WhoAmI}
          options={{
            headerShown: false,
            tabBarLabel: 'Guess',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="head-question" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'rgb(138, 21, 56)',
          }}
        />
        <Tab.Screen
          name="Bracket Challenge"
          component={BracketPredictor}
          options={{
            headerShown: false,
            tabBarLabel: 'Bracket',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sitemap" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'rgb(255, 0, 76)',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
