import React, { Component } from "react";
import { Headers} from "../common";
import Product from './product'
import {
  Container,
  Content,
  Icon,
  Input,
  Item,
  Header,
  Button,
} from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  AsyncStorage
} from 'react-native';
 import { connect } from 'react-redux';
 
 class HomeScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };
  _storeData = async () => {

  try {

    await AsyncStorage.setItem('user', this.props.user);
    await AsyncStorage.setItem('pass', this.props.pass);

  } catch (error) {
    // Error saving data
  }
}


  constructor(props) {
    super(props);
    this.state={
      data : [
                {
                    "ID": "1",
                    "NAME": "Fresh Fruits",
                    "IMAGE": "./product16.png"
                },
                {
                    "ID": "2",
                    "NAME": "Fresh Vegetables",
                    "IMAGE": "./product16.png"
                },
                {
                    "ID": "3",
                    "NAME": "Fresh Meat & Seafood",
                    "IMAGE": "./product16.png"

               },
               {
                     "ID": "4",
                     "NAME": "Cheese and Dairy",
                     "IMAGE": "./product16.pn"

                 },
                 {
                       "ID": "5",
                       "NAME": "Olive",
                       "IMAGE": "./product16.pn"

                   }
            ]
          };
  }

  showCat = (x) =>{

        this.props.navigation.navigate("Show",{cat:x});
  }
  componentDidMount(){
    this._storeData();
  }

  render() {

    return (
      <Container >
        <Headers routes={this.props.navigation} />

        <FlatList style={styles.list}
        data={this.state.data}
        keyExtractor= {(item) => {
          return item.ID;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        renderItem={(post) => {
          const item = post.item;
          let mg ;
          switch (item.ID) {
            case "1": mg = require('./1.jpeg')
              break;
            case "2": mg = require('./2.jpg')
            break;
            case "3": mg = require('./3.jpg')
              break;
              case "4": mg = require('./4.jpg')
                break;
            default: mg = require('./5.jpg')

          }
          return (
            <TouchableOpacity onPress={() => this.showCat(item.ID)} >
              <View style={styles.card}>

                <Image style={styles.cardImage} source={mg}/>
                <View style={styles.cardContent}>
                  <View>
                    <Text style={styles.title}>{item.NAME}</Text>
                  </View>

                </View>
              </View>
            </TouchableOpacity>
          )
        }}/>



      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
const mapStateToProps = state => {
  return {
    user:state.auth.email,
    pass:state.auth.pass,
  }
};
export default connect(mapStateToProps,{ }) (HomeScreen);
