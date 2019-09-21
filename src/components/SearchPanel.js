import React from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-navigation-hooks';

import { create } from '../utilities/normalize';

export default () => {
  const { goBack } = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => goBack()} style={styles.btnStyle}>
        <Icon name="arrow-left" size={20} color="#ddd" />
      </TouchableOpacity>
      <TextInput style={styles.searchInputStyle} />
      <TouchableOpacity style={styles.btnStyle}>
        <Icon name="microphone" size={20} color="#ddd" />
      </TouchableOpacity>
    </>
  )
};

const styles = create({
  btnStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInputStyle: {
    flex: 8,
    marginVertical: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 10
  }
});
