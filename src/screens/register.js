import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    state = {
      phone: '',
      email   : '',
      password: '',
      location:'',
      Title:''
    }
  }

  onClickListener = (viewId) => {
    fetch('http://daisyarea.com/api/login.php',
   {
       method: 'POST',
       headers:
       {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(
       {
         name : this.state.email,
         password : this.state.password,
         location: this.state.location,
         title:this.state.Title,
         phone_number:this.state.phone

       })

   }).then((response) => response.json()).then((text) =>
   {



   }).catch(() =>
   {
  

   });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="User name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/contact/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Title"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(Title) => this.setState({Title})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/location/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Location"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(location) => this.setState({location})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/phone/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Phone number"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(phone) => this.setState({phone})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});
