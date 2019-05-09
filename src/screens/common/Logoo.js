import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image
} from 'react-native';

export default class Logoo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:220, height: 200}}
             source={require("./icon.png")}/>

       </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
	marginVertical: 15,
  fontSize:22,
  color:"#111"
  }
});
