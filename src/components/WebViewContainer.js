/**
 * WebView Component
 */

import React, { Component } from 'react';
import {
  WebView,
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from '../styles';
import constants from '../constants';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class WebViewContainer extends Component<{}> {
  renderOfflineWidget() {
    return (
      <View style={styles.welcome}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }

  renderSpinner() {
    return (
      <ActivityIndicator
        animating={true}
        color={constants.colors.primary}
        size={'small'}
      />
    );
  }

/**
Maybe useful:

onShouldStartLoadWithRequest?: function (iOS)
Function that allows custom handling of any web view requests.
Return true from the function to continue loading the request and false to stop loading.

onError?: function
Function that is invoked when the WebView load fails.

onLoad?: function
Function that is invoked when the WebView has finished loading.

onLoadEnd?: function
Function that is invoked when the WebView load succeeds or fails.

onLoadStart?: function
Function that is invoked when the WebView starts loading.

onNavigationStateChange?: function
Function that is invoked when the WebView loading starts or ends.

renderError?: function
Function that returns a view to show if there's an error.

renderLoading?: function
Function that returns a loading indicator.

dataDetectorTypes?: (iOS)
  enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'),
  [enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all')]
Determines the types of data converted to clickable URLs in the web view’s content.
By default only phone numbers are detected. You can provide one type or an array of many types.
*/

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: 'https://www.leasingrechnen.at'}}
          style={styles.webView}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          mixedContentMode={constants.enableMixedContentMode ? 'compatibility' : 'never'}
          userAgent={constants.userAgent + constants.userAgentPostfix}
        />
      </View>
    );
  }
}
