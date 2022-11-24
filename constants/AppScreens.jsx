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
const BracketPredictor = () => {
  return (
    <WebviewScreen uri={'https://play.fifa.com/bracket-predictor/brackets'}></WebviewScreen>
  );
};

/**
 * A function that returns a React component that renders the Daily Challenge webview.
 *
 * @function BracketPredictor
 * @returns {JSX.Element}
 * @constructor
 */
const DailyChallenge = () => {
  return (
    <WebviewScreen uri={'https://play.fifa.com/daily-challenge/'}></WebviewScreen>
  );
};

/**
 * A function that returns a React component that renders the Daily Fantasy webview.
 *
 * @function DailyFantasy
 * @returns {JSX.Element}
 * @constructor
 */
const DailyFantasy = () => {
  return (
    <WebviewScreen uri={'https://play.fifa.com/fantasy-daily/team'}></WebviewScreen>
  );
};

/**
 * A function that returns a React component that renders the Fantasy League webview.
 *
 * @function FantasyLeague
 * @returns {JSX.Element}
 * @constructor
 */
const FantasyLeague = () => {
  return (
    <WebviewScreen uri={'https://play.fifa.com/fantasy-classic/team'}></WebviewScreen>
  );
};

/**
 * A function that returns a React component that renders the Match Predictor webview.
 *
 * @function MatchPredictor
 * @returns {JSX.Element}
 * @constructor
 */
const MatchPredictor = () => {
  return (
    <WebviewScreen uri={'https://play.fifa.com/match-predictor/match'}></WebviewScreen>
  );
};
export {
  BracketPredictor,
  DailyChallenge,
  DailyFantasy,
  FantasyLeague,
  MatchPredictor,
};
