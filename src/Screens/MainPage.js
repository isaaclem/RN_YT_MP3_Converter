import React, { useState } from 'react';
import {
  Text, TextInput, View, TouchableOpacity
} from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-navigation-hooks';

import { Container } from '../components';
import { create } from '../utilities/normalize';
import Colors from '../Config/colors';

export default () => {
  const [searchString, setSearchString] = useState('');
  const { navigate } = useNavigation();

  return (
    <Container>
      <View style={styles.inputGroupStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(txt) => setSearchString(txt)}
          value={searchString}
        />
        <TouchableOpacity
          style={styles.searchBtnStyle}
          onPress={() => navigate('SearchModal')}
        >
          <Icon name="search" size={20} color="#ddd" />
        </TouchableOpacity>
      </View>

      <Text>{searchString}</Text>
      {/* <Text>{Config.YT_API_KEY}</Text> */}

    </Container>
  );
};

const styles = create({
  inputStyle: {
    height: 20,
    borderColor: Colors.border,
    borderWidth: 1,
    flex: 4
  },
  inputGroupStyle: {
    flexDirection: 'row',
    marginHorizontal: 10
  },
  searchBtnStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
