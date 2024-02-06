import React from 'react';
import {Alert, Button} from 'react-native';
const Button1 = () => {
  return (
    <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
  );
};

export default React.memo(Button1);
