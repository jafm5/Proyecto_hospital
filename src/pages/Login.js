import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar,TouchableOpacity} from 'react-native';
import  Logo from '../components/Logo';
import  Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import { KeyboardAvoidingView } from 'react-native';


export default class Login extends React.Component {
    signup(){
      Actions.signup()
    }
    render(){
      return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.container}>
             <Logo/>
             <Form type="Login"/>
             <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>¿No tienes una cuenta?</Text>
              <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Registrate</Text></TouchableOpacity>
             </View>
          </View>
</KeyboardAvoidingView>




      );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont:{
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical:16,
    flexDirection:'row'
  },
  signupButton:{
    color:'#000066',
    fontSize:16,
    fontWeight:'500'
  },
  signupText:{
    color:'#000066',
    fontSize:16
  }

});
