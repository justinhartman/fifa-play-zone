/**
 * LoadingScreen is a React component that renders a loading screen with an
 * activity indicator.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 */
import { PureComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

/**
 * Create the style sheet.
 */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

/**
 * A class that returns a React component that renders the loading screen with
 * an activity indicator.
 *
 * @class LoadingScreen
 * @interface LoadingScreen
 * @extends {PureComponent}
 * @returns {JSX.Element}
 */
class LoadingScreen extends PureComponent {
  /**
   * Render activity indicator view.
   *
   * @returns {JSX.Element}
   */
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#067CFD" />
      </View>
    );
  }
}

export default LoadingScreen;
