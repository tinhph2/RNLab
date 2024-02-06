import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {styles} from '../lab5/styles';
import {TouchableOpacity} from 'react-native';
const Lab5 = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        source={require('../../assets/images/travel.png')}
        style={styles.image}>
        <View style={styles.details}>
          <Text style={styles.text}>
            <Text style={styles.firstLine}>Discover {'\n'}</Text>
            <Text style={styles.secondLine}>world with us</Text>
          </Text>
          <Text style={styles.textStyle}> Discoer world with us </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Get Stated</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Lab5;
