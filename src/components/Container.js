import React from 'react';
import { SafeAreaView } from 'react-native';
import Colors from '../Config/colors';
import { create } from '../utilities/normalize';

export default ({ children }) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
);

const styles = create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});
