import React from 'react';
import {styles} from './styles';
import {Image, Pressable, Text, View} from 'react-native';
import Button from '../../../components/Button';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/images/splash_images.png')}
      />
      <Text style={styles.title}>You'll find</Text>
      <Text style={[styles.title, styles.innerTitle]}> All you need</Text>
      <Text style={styles.title}>Here!</Text>

      <Button
        onPress={() => navigation.navigate('SignUp')}
        title="Sign Up"></Button>

      <Pressable onPress={()=>navigation.navigate('SignIn')}>
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};
export default Splash;
