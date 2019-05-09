import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { addToCart, updateCart } from '../actions';

 class Product extends Component {


  constructor(props) {
    super(props);
    this.state = {


    all:{
	"F":[
        {
            "ID": 1,
            "NAME": "Honeycrisp Apple",
            "DESCRIPTION": "One of the most popular, and diverse, fruits in America is known for being crisp, juicy and full of healthy benefits.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 8.00,
            "CURRENT_PRICE": 6.99,
            "DISCOUNT": 10,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",

            ]
        },
        {
            "ID": 2,
            "NAME": "Bananas",
            "DESCRIPTION": "Characterized by their bright yellow color and sweet taste, bananas are the ideal fruit for snacks and sports activities",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 4.00,
            "CURRENT_PRICE": 2.99,
            "DISCOUNT": 10,
            "WEIGHT": "1 bunch",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",

            ]
        },
        {
            "ID": 3,
            "NAME": "Organic D'Anjou Pear",
            "DESCRIPTION": "There are more than 3,000 varieties grown around the globe, though the best known in the U.S. is the Anjou.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 3.20,
            "CURRENT_PRICE": 1.99,
            "DISCOUNT": 20,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",

            ]
        },
        {
            "ID": 4,
            "NAME": "Strawberries",
            "DESCRIPTION": "While this berry's colorful cousins—the blueberry and red raspberry—are grown on bushes, this bright red fruit comes from vines close to the ground. It's picked when ready to eat, though a strawberry will become a little sweeter if left at room temperature for a day.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 5.40,
            "CURRENT_PRICE": 3.99,
            "DISCOUNT": 10,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg"
            ]
        },
        {
            "ID": 5,
            "NAME": "Green Seedless Grapes",
            "DESCRIPTION": "Grown across the globe since the 14th century, there are more than 60 species of grapes.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 6.00,
            "CURRENT_PRICE": 4.99,
            "DISCOUNT": 5,
            "WEIGHT": "1 Kg",
            "IMAGE": [
              "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg"
            ]
        },
        {
            "ID": 6,
            "NAME": "Organic Navel Orange",
            "DESCRIPTION": "Characterized by the small formation resembling a navel on the blossom end, Navel oranges are one of the most popular citrus varieties. Available from November through June, these winter oranges have a slightly thick skin, are seedless and easy to peel, and provide an excellent source of Vitamin C. They have a floral aroma and are refreshingly sweet and juicy.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 8.00,
            "CURRENT_PRICE": 6.80,
            "DISCOUNT": 0,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg"
            ]
        }]
		,
		"V":[
        {
            "ID": 7,
            "NAME": "Organic Broccoli",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 4.50,
            "CURRENT_PRICE": 2.90,
            "DISCOUNT": 0,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
            ]
        },
        {
            "ID": 8,
            "NAME": "Organic Roma Tomatoes",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 6.30,
            "CURRENT_PRICE": 4.66,
            "DISCOUNT": 10,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg"
            ]
        },
        {
            "ID": 9,
            "NAME": "Cucumber, Medium",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 7.00,
            "CURRENT_PRICE": 5.22,
            "DISCOUNT": 0,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg"
            ]
        },
        {
            "ID": 10,
            "NAME": "Butter Lettuce",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 8.50,
            "CURRENT_PRICE": 6.22,
            "DISCOUNT": 0,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg"
            ]
        },
        {
            "ID": 11,
            "NAME": "Red Bell Pepper",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 8.30,
            "CURRENT_PRICE": 6.11,
            "DISCOUNT": 0,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg"
            ]
        },
        {
            "ID": 12,
            "NAME": "Baby Carrots",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 2.00,
            "CURRENT_PRICE": 1.99,
            "DISCOUNT": 30,
            "WEIGHT": "1 Kg",
            "IMAGE": [
                "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg"
            ]
        }],
		"M":[
        {
            "ID": 13,
            "NAME": "Marconda's Meats",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 9.00,
            "CURRENT_PRICE": 6.90,
            "DISCOUNT": 0,
            "WEIGHT": "1 Kg",
            "IMAGE": [
              "http://daisyarea.com/imgs/product13.png"
            ]
        },
        {
            "ID": 14,
            "NAME": "Fresh Atlantic Salmon",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 7.20,
            "CURRENT_PRICE": 6.10,
            "DISCOUNT": 10,
            "WEIGHT": "1 Kg",
            "IMAGE": [
              "http://daisyarea.com/imgs/product14.png"
            ]
        }],
		"O":[
        {
            "ID": 15,
            "NAME": "Pompeian Extra Virgin Olive Oil",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 22.00,
            "CURRENT_PRICE": 20.99,
            "DISCOUNT": 20,
            "WEIGHT": "1 Kg",
            "IMAGE": [
             "http://daisyarea.com/imgs/product15.png"
            ]
        }
		]
		,
		"C": [
        {
            "ID": 16,
            "NAME": "Betty Crocker Bisquick Baking Mix",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 15.00,
            "CURRENT_PRICE": 12.15,
            "DISCOUNT": 20,
            "WEIGHT": "1 Kg",
            "IMAGE": [
              "http://daisyarea.com/imgs/product16.png"
            ]
        },
        {
            "ID": 17,
            "NAME": "White Hot Dog Buns",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 15.00,
            "CURRENT_PRICE": 12.15,
            "DISCOUNT": 0,
            "WEIGHT": "4 pcs",
            "IMAGE": [
              "http://daisyarea.com/imgs/product17.png"
            ]
        },
        {
            "ID": 18,
            "NAME": "Tandoori Naan Original",
            "DESCRIPTION": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "CATEGORY": "Food",
            "PREVIOUS_PRICE": 10.00,
            "CURRENT_PRICE": 8.11,
            "DISCOUNT": 0,
            "WEIGHT": "4 pcs",
            "IMAGE": [
               "http://daisyarea.com/imgs/product18.png"
            ]
        }]
},
      data:[]
    };
  }

  addProductToCart = ( item ) => {

          const product = [ ...this.props.cart, {
              id : item.ID,
              name : item.NAME,
              price : item.CURRENT_PRICE,
              image : item.IMAGE[0],
              category : item.CATEGORY,
              quantity : 1
          }]

          let _id = item.ID

          let cartIndex = this.props.cart.findIndex(function(cart){
              return cart.id === _id
          })
          if(cartIndex === -1){
          this.props.addToCart(product)
          }else{
              this.props.updateCart(_id ,1)
          }
          Alert.alert("success","product added!");
  }



  _get = () =>{

         fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
         {
             method: 'GET',
             headers:
             {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
     }).then((response) => response.json()).then((responseJson) => {

           this.setState({
             data:responseJson
           });

         }).catch(() =>
         {
            alert('تأكد من الاتصال بالانترنت');
         });

  }
  componentDidMount(){
  //  this._get();
 let x = this.props.navigation.getParam('cat','1');

  switch (x) {
    case "1": this.setState({
      data:this.state.all["F"]
    });
      break;
      case "2": this.setState({
        data:this.state.all["V"]
      });
        break;
        case "3": this.setState({
          data:this.state.all["M"]
        });
          break;
          case "4": this.setState({
            data:this.state.all["C"]
          });
            break;
            case "5": this.setState({
              data:this.state.all["O"]
            });
              break;
    default:

  }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return ""+item.ID;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>

               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.NAME}</Text>
                    <Text style={styles.price}>{item.CURRENT_PRICE}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.IMAGE[0]}}/>

                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart(item)}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Add To Cart</Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
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
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:14,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
    return { cart: state.cart.cart };
};

export default connect(mapStateToProps, { addToCart, updateCart })(Product);
