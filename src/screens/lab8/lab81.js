import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Lab81 = () => {
  const [data, setData] = useState([]);
  const getAPI = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPI();
  }, []);

  return (
    <View>
      {data.length
        ? data.map(item => (
            <View style={styles.container}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.birthday}>{item.birthday}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default Lab81;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#B0E0E6',
    borderRadius: 4,
    padding: 16,
    margin: 10,
  },

  name: {
    textAlign: 'left',
    marginRight: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  birthday: {
    textAlign: 'right',
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
