import React from 'react';
import {Text, View, FlatList, Image, StatusBar} from 'react-native';
import {styles} from './styles';
const DATA = [
  {
    id: '1',
    title: 'Data Structures',
    imageSource: require('../../assets/images/jonh.png'),
  },
  {
    id: '2',
    title: 'STL',
    imageSource: require('../../assets/images/mary.png'),
  },
  {
    id: '3',
    title: 'C++',
    imageSource: require('../../assets/images/jonh.png'),
  },
  {
    id: '4',
    title: 'Java',
    imageSource: require('../../assets/images/mary.png'),
  },
  {
    id: '5',
    title: 'Python',
    imageSource: require('../../assets/images/jonh.png'),
  },
  {
    id: '6',
    title: 'Java',
    imageSource: require('../../assets/images/mary.png'),
  },
  {
    id: '7',
    title: 'Java',
    imageSource: require('../../assets/images/mary.png'),
  },
];

const Item = ({title, imageSource}) => {
  return (
    <View style={styles.item}>
      <Image source={imageSource} style={styles.avatar}></Image>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const renderItem = ({item}) => (
  <Item imageSource={item.imageSource} title={item.title} />
);

const ListCourse = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={false}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default React.memo(ListCourse);
