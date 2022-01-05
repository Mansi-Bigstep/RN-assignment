import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
} from "react-native";
//push is used when want to go to same screenr already on (maybe with diff data)
//pop is used only with stack navigator
//replace (login signup)
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealItem from "../components/MealItem";
import HeaderButton from "../components/HeaderButton";
import { useState } from "react";
import { useEffect } from "react";
import Colors from "../constants/Colors";

let cartVal = [];

const Meals = (props) => {
  const [cartData, setCartData] = useState([]);
  const [meals, setMeals] = useState([]);
  const [allMeals,setAllMeals]=useState([])
  cartVal = cartData;

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
        cartData={cartData}
        setCartData={setCartData}
        screen="Meals"
      />
    );
  };
  const changeHandler = (val) => {
    const filteredMeals = allMeals.filter((item) => {
      return item.title.toLowerCase().includes(val.toLowerCase());
    });
    setMeals(filteredMeals);
  };

  const getdata = async () => {
    const response = await fetch("http://192.168.29.157:3000/data");
    const resData = await response.json();
    setAllMeals(resData.data)
    setMeals(resData.data)
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Search"
        style={styles.textinput}
        onChangeText={changeHandler}
      />
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%" }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Total Items Added : {cartData.length}
        </Text>
      </View>
    </View>
  );
};

Meals.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meals",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName="shoppingcart"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "Cart",
              params: { cartVal: cartVal },
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderWidth: 1,
    width: "60%",
    margin: 10,
    padding: 5,
  },
  footer: {
    width: "100%",
    backgroundColor: Colors.primaryColor,
  },
  footerText: {
    color: "white",
    fontSize: 18,
    padding: 5,
    textAlign: "center",
  },
});

export default Meals;
