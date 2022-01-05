import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ScreenContainer } from "react-native-screens";
import Colors from "../constants/Colors";

const MealItem = (props) => {

  const { id,
    title,
    imageUrl,
    price,
    description,
   } = props.item;
  var cartIds = props.cartData?.map(item => item.id);

  return (
    <View style={styles.mealItem}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: imageUrl }}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText} numberOfLines={1}>{description}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>$ {price}</Text>
            {
              props.screen != 'Cart' &&
              (
                !cartIds.includes(id) ?
                  (
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => props.setCartData(prevState => [...prevState, props.item])}>
                      <Text style={styles.buttonText} >Add</Text>
                    </TouchableOpacity>
                  )
                  :
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => props.setCartData(prevState => prevState.filter(item => item.id != id))}>
                    <Text style={styles.buttonText}>Remove</Text>
                  </TouchableOpacity>
              )
            }
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 250,
    width: "90%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 6,
    margin: 10,
    alignContent: 'center'
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "70%",
  },
  description:{
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor:'#ccc'

  },
  descriptionText:{
fontWeight:'700'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: '15%'
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  title: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 2
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  }
});

export default MealItem;
