/**
 * Style sheet for the application.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 * @license   MIT
 * @since     1.0.0
 */
import { StyleSheet } from 'react-native';

/**
 * A constant that defines global styles to be reused throughout the app.
 * @type {object}
 * @property {object} container - Defines the container styles.
 */
const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

/**
 * A constant that defines styles to be used by the LoadingScreen component.
 * @type {object}
 * @property {object} wrapper - Defines the wrapper style.
 */
const LoadingStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgb(17, 153, 250)',
    padding: 10,
  },
});

/**
 * A constant that defines styles to be used by the WebviewScreen component.
 * @type {object}
 * @property {object} webview - Defines webview style.
 */
const WebviewStyles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
});

export { GlobalStyles, LoadingStyles, WebviewStyles };
