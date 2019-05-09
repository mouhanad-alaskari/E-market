import React, { Component } from "react";
import {
Header,
Button,
Icon,
Text,
Badge,
Left,
Body,
Right,
Title
} from "native-base";

export class Headers extends Component {
render() {

return (
  <Header style={{ backgroundColor: "#2c8ef4" }}>
    <Left>
      <Button
        transparent
        onPress={() => {
          this.props.routes.openDrawer();
        }}
      >
        <Icon name="ios-menu" style={{ color: "white" }} />
      </Button>
    </Left>
    <Body>
    </Body>

  </Header>
);
}
}
