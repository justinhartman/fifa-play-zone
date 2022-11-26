/**
 * AppScreens is a series of React components that render the app screens using
 * the WebviewScreen component.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 * @license   MIT
 * @since     1.0.0
 */
import {
  BracketPredictorUri, DailyChallengeUri, DailyFantasyUri, FantasyLeagueUri, MatchPredictorUri,
} from '../constants/AppConstants';
import WebviewScreen from './WebviewScreen';

/**
 * A function that returns a React component that renders the Bracket Challenge webview.
 * @returns {JSX.Element} Bracket Predictor webview.
 * @constructor
 */
function BracketPredictor() {
  return (
    <WebviewScreen uri={BracketPredictorUri} />
  );
}

/**
 * A function that returns a React component that renders the Daily Challenge webview.
 * @returns {JSX.Element} Daily Challenge webview.
 * @constructor
 */
function DailyChallenge() {
  return (
    <WebviewScreen uri={DailyChallengeUri} />
  );
}

/**
 * A function that returns a React component that renders the Daily Fantasy webview.
 * @returns {JSX.Element} Daily Fantasy webview.
 * @constructor
 */
function DailyFantasy() {
  return (
    <WebviewScreen uri={DailyFantasyUri} />
  );
}

/**
 * A function that returns a React component that renders the Fantasy League webview.
 * @returns {JSX.Element} Fantasy League webview.
 * @constructor
 */
function FantasyLeague() {
  return (
    <WebviewScreen uri={FantasyLeagueUri} />
  );
}

/**
 * A function that returns a React component that renders the Match Predictor webview.
 * @returns {JSX.Element} Match Predictor webview.
 * @constructor
 */
function MatchPredictor() {
  return (
    <WebviewScreen uri={MatchPredictorUri} />
  );
}

export {
  BracketPredictor,
  DailyChallenge,
  DailyFantasy,
  FantasyLeague,
  MatchPredictor,
};
