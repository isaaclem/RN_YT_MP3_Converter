import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { create } from '../utilities/normalize';
import Colors from '../Config/colors';

export default ({ text }) => (
  <View style={styles.rowStyle}>
    <TouchableOpacity style={styles.btnStyle}>
      <Icon name="history" size={20} color="#ddd" />
    </TouchableOpacity>
    <Text style={styles.textStyle}>
      {text}
    </Text>
    <TouchableOpacity style={styles.btnStyle}>
      <Icon name="angle-up" size={20} color="#ddd" />
    </TouchableOpacity>
  </View>
);

const styles = create({
  btnStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    flex: 8,
    marginVertical: 5,
    alignSelf: 'center',
    paddingHorizontal: 10
  },
  rowStyle: {
    height: 30,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingHorizontal: 10
  }
});
