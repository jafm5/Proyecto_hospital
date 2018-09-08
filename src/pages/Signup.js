import React from 'react';
import {ScrollView, StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import  Logo2 from '../components/Logo2';
import  Form2 from '../components/Form2';

export default class Signup extends React.Component {
    render(){
      return(
          <ScrollView >
              <Logo2/>
              <Form2 type="Ingresar"/>
          </ScrollView>
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
    color:'#1919ff',
    fontSize:16,
    fontWeight:'500'
  },
  signupText:{
    color:'#1919ff',
    fontSize:16
  }

});
