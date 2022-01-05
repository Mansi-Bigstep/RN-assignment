import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import MealItem from '../components/MealItem';
import Colors from '../constants/Colors';

const Cart = props => {
    const data = props.navigation.getParam('cartVal')
    const Total = data.reduce((prevTotal, curItem) => {
        return parseInt(prevTotal) + parseInt(curItem.price)
    }, 0)
    let content = "Your cart is empty"
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                item={itemData.item}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetails', params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
                screen='Cart'
            />
        );
    };

    return (
        <View style={styles.screen}>
            {
                !data.length &&
                (
                    <View style={styles.empty}>
                        <Text>{content}</Text>
                    </View>
                )
            }
            <FlatList
                data={data}
                renderItem={renderMealItem}
                contentContainerStyle={{ alignItems: 'center' }}
                style={{ width: "100%" }}
            />
            <View style={styles.footer}>
                <Text style={styles.footerText}>Cart Total : ${Total}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    text: {
        fontSize: 22,
        padding: 5
    },
    footer: {
        width: '100%',
        backgroundColor: Colors.primaryColor,
    },
    footerText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textAlign: 'center'
    },
    empty: {
        textAlign: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5,
    }
});

export default Cart;