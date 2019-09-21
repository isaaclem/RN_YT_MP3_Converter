import React from 'react';
import { View } from 'react-native';
import Colors from '../Config/colors';
import { create } from '../utilities/normalize';

export default ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = create({
  container: {
    height: 40,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'row',
    paddingHorizontal: 10
  }
});
