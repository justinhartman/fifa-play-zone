/**
 * WebviewScreen is a React component that renders a webview based on a URI
 * prop passed to the component.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 * @license   MIT
 * @since     1.0.0
 */
import { Component } from 'react';
import { Alert, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import LoadingScreen from './LoadingScreen';
import { GlobalStyles, WebviewStyles } from '../styles/StyleSheet';

/**
 * A class that returns a React component that renders the webview.
 * @extends {React.Component}
 */
class WebviewScreen extends Component {
  /**
   * Constructor that sets the initial state.
   * @param {object} props - The props passed to the component.
   * @param {string} props.uri - The URI to load in the webview.
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
   * @returns {JSX.Element} Webview component.
   * @throws {Alert} Alert if the webview fails to load.
   */
  render() {
    // Destructure the uri from the state.
    const { uri } = this.state;

    // Return the webview.
    return (
      <SafeAreaView style={GlobalStyles.container}>
        <StatusBar barStyle="dark-content" />
        <WebView
          style={WebviewStyles.webview}
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

/**
 * Define the prop types.
 *
 * @type {{uri: string}}
 * @property {string} uri - The URI to load in the webview.
 */
WebviewScreen.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default WebviewScreen;
