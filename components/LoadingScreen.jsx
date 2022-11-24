/**
 * Loading Screen Component.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 */
import { PureComponent } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

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
 * Class describes loading screen component to use with network activity requests.
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
        <ActivityIndicator size='large' color='#FF0000' />
      </View>
    );
  }
}

export default LoadingScreen;
