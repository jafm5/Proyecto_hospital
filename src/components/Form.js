import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default class Form extends React.Component {

//  constructor(props){
  //  super()
//  }

  render(){
    return(
      <View style={styles.container}>
         <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="USUARIO"
              placeholderTextColor = "#ffffff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
         <TextInput style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="CONTRASEÑA"
               secureTextEntry={true}
               placeholderTextColor = "#ffffff"
               ref={(input) => this.password = input}
               />
         <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
         </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#00004c',
    borderRadius: 30,
    paddingHorizontal: 16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button:{
    width:300,
    backgroundColor:'#00004c',
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical:13

  },
  buttonText:{
    fontSize: 16,
    fontWeight: '500',
    color:'#ffffff',
    textAlign:'center'
  }


});
