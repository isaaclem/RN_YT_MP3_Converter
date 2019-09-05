import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../../Config/colors';
import { create } from '../../utilities/normalize';

const styles = create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  headerText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 23,
    marginBottom: 12,
  },
  topRow: {
    marginBottom: 28,
  },
  subheaderText: {
    color: colors.gray,
    fontSize: 20,
    marginBottom: 12,
  },
});

export default ({ children, header, subheader }) => (
  <View style={styles.container}>
    {(header || subheader) && (
      <View style={styles.topRow}>
        {header && <Text style={styles.headerText}>{header}</Text>}
        {subheader && <Text style={styles.subheaderText}>{subheader}</Text>}
      </View>
    )}
    {children}
  </View>
);
