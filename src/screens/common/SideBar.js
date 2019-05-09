import React, { Component } from "react";
import { TouchableWithoutFeedback, Dimensions , AsyncStorage , BackHandler } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Thumbnail,
  Content,
  List,
  ListItem,
  Separator,
  Button,
  Text,
  Left,
  Body,
  Icon,
  Right,
  View
} from "native-base";
let { height } = Dimensions.get("window");
 class SideBar extends Component {
   async removeItemValue(key) {
     try {
       await AsyncStorage.removeItem(key);
       return true;
     }
     catch(exception) {
       return false;
     }
   }
  OnLogOut = () => {
    this.removeItemValue('pass');
    this.removeItemValue('user');
         BackHandler.exitApp();
  }
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#2c8ef4",
            height: 150,
            alignItems: "center"
          }}
        >
          <Thumbnail
            style={{ marginTop: 40 }}
            source={{
              uri:
                "l"
            }}
          />
          <Text style={{ marginTop: 5, color: "white" }}>
            {this.props.name}
          </Text>
          <Text style={{ marginTop: 5, color: "white" }}>
            {this.props.email}
          </Text>
        </View>
        <View
          style={{
            height: height - 150
          }}
        >
          <Content>
            <List
              style={{
                backgroundColor: "white"
              }}
            >
              <ListItem icon>
                <Left>
                  <Icon name="ios-reorder" />
                </Left>
                <Body>
                  <Text>Your Orders</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-help-circle" />
                </Left>
                <Body>
                  <Text>Help And Support</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-settings" />
                </Left>
                <Body>
                  <Text>Settings</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-paper" />
                </Left>
                <Body>
                  <Text>Abouts Us</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-clipboard" />
                </Left>
                <Body>
                  <Text>Terms And Service</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-exit" />
                </Left>
                <Body>
                  <TouchableWithoutFeedback
                     onPress ={ () => this.OnLogOut()}
                  >
                    <Text
                      style={{
                        paddingLeft: 5,
                        textDecorationLine: "underline"
                      }}
                    >
                      Sign Out
                    </Text>
                  </TouchableWithoutFeedback>
                </Body>
                <Right />
              </ListItem>
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    user:state.auth.email,
    pass:state.auth.pass,
  }
};
export default connect(mapStateToProps,{  }) (SideBar);
