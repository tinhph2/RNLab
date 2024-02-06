import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
const Button2 = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button2);
