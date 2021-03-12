
import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductListItem from '../components/ProductListItem'
import ValueContext from '../contexts/ValueContext'

export default function Category(props) {
  const [ cartItems, handleDecrese, handleIncrese ] = useContext(ValueContext);
  // console.log(cartItems.images);
  return (
    <FlatList 
      data={cartItems}
      // numColumns={2}
      renderItem={({item}) => 
        <View style={styles.wrapper}>
          <ProductListItem cartItems={item} handleBuy={handleIncrese} />
        </View>
      }
      keyExtractor={(item) => `${item.id}`}
    />
    
  
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 8,
    paddingTop: 16
  }
});
