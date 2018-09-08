import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

export default class Logo extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Image  style={{width: 300, height: 90}}
            source={require('../img/Logo.png')}/>
        <Text style={styles.logoText}>Solicitud y Cancelación de citas</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize:18,
    color:'#00004c'
  }

});
