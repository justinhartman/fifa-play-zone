/**
 * Daily Fantasy Webview Screen Component.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 */
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import LoadingScreen from '../components/LoadingScreen.jsx';

/**
 * A function that returns a React component that renders the Daily Fantasy webview.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function DailyFantasy() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <WebView
        style={styles.container}
        bounces={false}
        originWhitelist={['*']}
        source={{ uri: 'https://play.fifa.com/fantasy-daily/team' }}
        renderLoading={() => <LoadingScreen />}
        startInLoadingState={true}
        onError={(syntheticEvent) => {
          alert('Error loading page');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
});

export default DailyFantasy;
