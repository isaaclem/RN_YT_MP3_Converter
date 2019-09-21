import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Container } from '../components';
// import Config from 'react-native-config';


export default () => {
  const [count, setCount] = useState(0);


  return (
    <Container>
      <Button onPress={() => setCount(count + 1)} title="Increase" />
      <Button onPress={() => setCount(count - 1)} title="Decrease" />
      <Button onPress={() => setCount(0)} title="Reset" />
      <Text>{count}</Text>
    </Container>
  );
};
