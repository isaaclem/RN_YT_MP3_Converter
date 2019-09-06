import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import colors from '../Config/colors';

const { width: deviceWidth } = Dimensions.get('window');

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error) {
    console.log('isaac', error);
    this.setState({ hasError: true });
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    if (this.state.hasError) {
      return (
        <SafeAreaView style={Styles.safeArea}>
          <View
            style={{
              width: deviceWidth - 30,
              height: 50,
              backgroundColor: colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}
            >
              Something broken
            </Text>
          </View>
        </SafeAreaView>
      );
    }

    return children;
  }
}

const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorBoundary;
