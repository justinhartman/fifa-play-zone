/**
 * LoadingScreen is a React component that renders a loading screen with an
 * activity indicator.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 * @license   MIT
 * @since     1.0.0
 */
import { PureComponent } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LoadingStyles } from '../styles/StyleSheet';

/**
 * A class that returns a React component that renders the loading screen with
 * an activity indicator.
 * @extends {PureComponent}
 */
class LoadingScreen extends PureComponent {
  /**
   * Render activity indicator and return the loading screen.
   * @returns {JSX.Element} Activity Indicator View component.
   */
  render() {
    return (
      <View style={LoadingStyles.wrapper}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  }
}

export default LoadingScreen;
