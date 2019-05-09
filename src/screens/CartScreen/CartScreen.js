import React, { Component } from "react";
import { Headers } from "../common";
import { Dimensions, FlatList , Text ,StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { deleteCartItem, updateCart } from '../actions';
import {
Container,
Content,
Button,
Icon,
Card,
CardItem,
Body,
Left,
Right,
List,
ListItem,
View,
Thumbnail
} from "native-base";
import Toast, {DURATION} from 'react-native-easy-toast'
let { height } = Dimensions.get("window");

 class CartScreen extends Component {

   constructor(props){
     super(props);
     this.state= {
       cards:this.props.cart
     }
   }

   onDelete = (_id) =>{
       this.toast.show('hello world!',DURATION.LENGTH_LONG);
        const currentProductToDelete = this.props.cart;
    const indexToDelete = currentProductToDelete.findIndex(
      function (cart) {
        return cart.id === _id;
      }
    )
    let cartAfterDelete = [...currentProductToDelete.slice(0, indexToDelete),
      ...currentProductToDelete.slice(indexToDelete + 1)]

      this.props.deleteCartItem(cartAfterDelete);

    }
    onIncrement = (_id) => {
        this.props.updateCart(_id ,1)
    }
    onDecrement = (_id, quantity) => {
        if(quantity > 1){
            this.props.updateCart(_id ,-1)
        }
    }


render() {
return (
  <Container style={{ backgroundColor: "white" }}>
    <Headers routes={this.props.navigation} />
    <View
      style={{
        height: height - 150,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
      }}
    >
      <Content padder>
        <FlatList
          data={this.props.cart}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              style={{
                elevation: 3,
                marginBottom: 15,
                marginTop: 10
              }}
            >
              <CardItem header bordered>
              <Left>
                     <Thumbnail square large source={ { uri :item.image}} />
              </Left>
                <Body style={{ alignItems: "flex-start", paddingTop: 10 }}>
                  <Text>ITEM :</Text>
                  <Text>QTY :</Text>
                  <Text>PRICE :</Text>
                  <Text>TOTAL PRICE :</Text>
                </Body>
                <Right>
                  <Body
                    style={{ alignItems: "flex-start", paddingTop: 10 }}
                  >
                    <Text>{item.name}</Text>
                    <Text>{item.quantity}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.quantity * item.price}</Text>
                  </Body>
                </Right>
              </CardItem>

              <CardItem footer bordered>
                <Left>
                  <Button iconLeft transparent danger onPress= { () => { this.onDelete(item.id)} }>
                    <Icon name="ios-trash" />
                    <Text>Remove</Text>
                  </Button>
                  <Toast ref={toast => {
                       this.toast = toast;
                    }}
                    style={{backgroundColor:'red'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'red'}}
                    />
                </Left>

                <Right>

                  <Button iconLeft transparent info onPress= { () => { this.onIncrement(item.id)} }>
                    <View style={styles.button,{backgroundColor:'green'}}>
                     <Text style={styles.buttonContent}>    +    </Text>
                    </View>
                  </Button>
                  <Button iconLeft transparent info onPress= { () => { this.onDecrement(item.id,item.quantity)} }>
                    <View style={styles.button,{backgroundColor:'red'}}>
                     <Text style={styles.buttonContent}>     -    </Text>
                    </View>
                  </Button>

                </Right>
              </CardItem>
            </Card>
          )}
          keyExtractor={item => ""+item.id}
        />
        <Button block primary>
          <Text>Make Payment</Text>
        </Button>
      </Content>
    </View>
  </Container>
);
}
}
const styles = StyleSheet.create ({
   button:{

     width:28,
     height:28,
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center'
   },
   buttonContent:{
     fontWeight:'bold',
     fontSize:16,
     color:'white'
   }
});

const mapStateToProps = state => {
    return {
      cart: state.cart.cart ,
      totalAmount: state.cart.totalAmount
     };
};

export default connect(mapStateToProps, { deleteCartItem, updateCart })(CartScreen);
