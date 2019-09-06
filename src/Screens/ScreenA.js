import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Config from 'react-native-config';

import { Form, TextInput, Switch } from '../components/Form';
import { Button } from '../components/Button';

export default () => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Form
        header={Config.API_URL}
        subheader={__DEV__.toString()}
        test={(e) => console.log(e)}
      >
        <TextInput
          label="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput label="Password" secureTextEntry />
        <TextInput label="Confirm Password" secureTextEntry />
        <Switch label="Agree To Terms" />
        <Button>Sign Up</Button>
        <Button outline>Sign In</Button>
      </Form>
    </SafeAreaView>
  );
};
