import React from 'react';
import { ScrollView, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default class Form2 extends React.Component {

//  constructor(props){
  //  super()
//  }

  render(){
    return(

      <View>
         <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Primer Nombre"
              placeholderTextColor = "#ffffff"
              keyboardType="email-address"
              />
         <TextInput style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Segundo Nombre"
               secureTextEntry={true}
               placeholderTextColor = "#ffffff"
               />
        <TextInput style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Primer Apellido"
               secureTextEntry={true}
               placeholderTextColor = "#ffffff"
                />
        <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Segundo Apellido"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
                />
        <TextInput style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Direccion E-mail"
               secureTextEntry={true}
               placeholderTextColor = "#ffffff"
                 />
        <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                 />
         <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Eps"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                 />
          <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Sexo"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                 />
          <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Direccion"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                 />
                  <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Estado Civil"
                        secureTextEntry={true}
                        placeholderTextColor = "#ffffff"
                         />
      </View>



    )
  }
}

const styles = StyleSheet.create({
  container: {

    flexGrow: 200,
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
