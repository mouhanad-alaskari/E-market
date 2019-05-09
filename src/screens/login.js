import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';
import {  connect } from 'react-redux' ;
import {emailChange , passChange , userLogin,tryDumpLogin } from './actions';

class LoginView extends Component {

  constructor(props) {
    super(props);

  }
  DumpLogin = () =>{
    const { email , pass, navigation , navigate } = this.props ;
     this.props.tryDumpLogin({navigation,navigate});
  }
  onEmailChange = (text) => {

    this.props.emailChange(text);
  }
  onPassChange = (text) => {
    this.props.passChange(text);
  }


  onRegister = () =>{
    this.props.navigation.navigate("Register");
  }
  onLogin = () =>{

    const { email , pass, navigation , navigate } = this.props ;
       this.props.userLogin({email,pass,navigation,navigate});

  }
  onClickListener = (viewId) => {
    if ( viewId === "register") this.onRegister();
    if ( viewId === "login") this.onLogin();
  //  Alert.alert("Alert", "Button pressed "+viewId);
  }
  renderButton(){
    if (this.props.loading){
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return  (
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>
    );
  }
  componentDidMount(){
     this.DumpLogin();
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/phone/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Phone number"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={ (text) => {this.onEmailChange(text)}}
              value={this.props.email}
              />

        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={ (text) => {this.onPassChange(text)} }
              value={this.props.pass}
              />

        </View>
        <Text style={styles.errStyle}> {this.props.error} </Text>

         {this.renderButton()}

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style={{color:'blue'}}>Register</Text>
        </TouchableHighlight>

      {/*  <Text style={styles.NidaeeStyle}> Manavciniz Project © 2018-2019 </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
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
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  NidaeeStyle :{
    fontSize:14,
    color:'#111',
    alignSelf:'center',
    padding:20,
    fontWeight:'bold'
  },
  errStyle :{
    fontSize:12,
    color:'red',
    alignSelf:'center'
  }

});

const mapStateToProps = state => {
  return {
    email:state.auth.email,
    pass:state.auth.pass,
    error:state.auth.error,
    loading:state.auth.loading,
    ok:state.auth.ok,
    dump:state.auth.dump
  }
};

export default connect(mapStateToProps,{ emailChange , passChange , userLogin , tryDumpLogin }) (LoginView);
