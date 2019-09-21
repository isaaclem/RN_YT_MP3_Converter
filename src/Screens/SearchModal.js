import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Container, Header, SearchPanel, SearchResultRow
} from '../components';
import { create } from '../utilities/normalize';


export default () => {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
        <SearchPanel />
      </Header>
      <SearchResultRow text="iPhone 11 drop test" />
      <SearchResultRow text="huawei mate 30 pro" />
    </Container>
  );
};
