/**
 * AppScreens is a series of React components that render the app screens using
 * the WebviewScreen component.
 *
 * @author    Justin Hartman <code@justhart.com>
 * @copyright Copyright (c) 2022 Justin Hartman <https://justhart.com>
 */
import WebviewScreen from '../components/WebviewScreen';

/**
 * A function that returns a React component that renders the Bracket Challenge webview.
 *
 * @function BracketPredictor
 * @returns {JSX.Element}
 * @constructor
 */
function BracketPredictor() {
  return (
    <WebviewScreen uri="https://play.fifa.com/bracket-predictor/brackets" />
  );
}

/**
 * A function that returns a React component that renders the Daily Challenge webview.
 *
 * @function BracketPredictor
 * @returns {JSX.Element}
 * @constructor
 */
function DailyChallenge() {
  return (
    <WebviewScreen uri="https://play.fifa.com/daily-challenge/" />
  );
}

/**
 * A function that returns a React component that renders the Daily Fantasy webview.
 *
 * @function DailyFantasy
 * @returns {JSX.Element}
 * @constructor
 */
function DailyFantasy() {
  return (
    <WebviewScreen uri="https://play.fifa.com/fantasy-daily/team" />
  );
}

/**
 * A function that returns a React component that renders the Fantasy League webview.
 *
 * @function FantasyLeague
 * @returns {JSX.Element}
 * @constructor
 */
function FantasyLeague() {
  return (
    <WebviewScreen uri="https://play.fifa.com/fantasy-classic/team" />
  );
}

/**
 * A function that returns a React component that renders the Match Predictor webview.
 *
 * @function MatchPredictor
 * @returns {JSX.Element}
 * @constructor
 */
function MatchPredictor() {
  return (
    <WebviewScreen uri="https://play.fifa.com/match-predictor/match" />
  );
}

/**
 * Export the app screens.
 */
export {
  BracketPredictor,
  DailyChallenge,
  DailyFantasy,
  FantasyLeague,
  MatchPredictor,
};
