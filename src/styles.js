/**
 * App Styles
 */

import {
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import constants from './constants';

var styles = function() {
  var {height, width} = Dimensions.get('window');
  var webViewMarginTop = Platform.select({
    ios: DeviceInfo.getSystemVersion().indexOf('X') === -1
      ? 20
      : 45,
    android: 20,
  });

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    webView: {
      margin: 0,
      marginTop: webViewMarginTop,
      height: height - webViewMarginTop,
      width: width,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
};

export default styles;
