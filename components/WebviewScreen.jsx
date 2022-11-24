/**
 * WebviewScreen is a React component that renders a webview based on a URI
 * prop passed to the component.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 */
import { Component } from 'react';
import { Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import LoadingScreen from '../components/LoadingScreen';

/**
 * Create the style sheet.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
});

/**
 * A class that returns a React component that renders the webview.
 *
 * @class WebviewScreen
 * @interface WebviewScreen
 * @extends {Component}
 * @returns {JSX.Element}
 * @param {object} props
 * @param {string} props.uri
 */
class WebviewScreen extends Component {
  /**
   * Constructor that sets the initial state.
   *
   * @param {object} props
   * @param {string} props.uri
   */
  constructor(props) {
    // Call the parent constructor.
    super(props);
    // Set the initial value of the uri using the prop.
    const { uri } = props;
    // Set the initial state as the uri constant.
    this.state = { uri };
  }

  /**
   * Render the webview.
   *
   * @returns {JSX.Element}
   */
  render() {
    // Destructure the uri from the state.
    const { uri } = this.state;

    // Return the webview.
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <WebView
          style={styles.container}
          bounces={false}
          originWhitelist={['*']}
          source={{ uri }}
          renderLoading={() => <LoadingScreen />}
          startInLoadingState
          onError={() => {
            Alert.alert(
              'Error loading page',
              'Please check your Internet connection and try again.',
              [{ text: 'OK' }],
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

export default WebviewScreen;
