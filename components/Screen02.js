import React, { useEffect, useState, useReducer } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import image01 from '../assets/image01.png';
import image02 from '../assets/image02.png';
import image03 from '../assets/image03.png';

// Reducer function
const bikeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BIKES':
      return { ...state, data: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

function Screen02({ navigation }) {
  const [state, dispatch] = useReducer(bikeReducer, { data: [], filter: 'All' });

  const fetchData = async () => {
    try {
      const response = await fetch('https://67301e4266e42ceaf15f678b.mockapi.io/bikestore/bikes');
      const result = await response.json();
      dispatch({ type: 'SET_BIKES', payload: result });
    } catch (error) {
      console.error('Error fetching bike data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  const getImageSource = (imagePath) => {
    switch (imagePath) {
      case 'image1':
        return image01;
      case 'image2':
        return image02;
      case 'image3':
        return image03;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontWeight: '700', fontSize: 24, color: 'red' }}>
        The world's Best Bike
      </Text>
      <View style={styles.filter}>
        {['All', 'Roadbike', 'Mountain'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.filterContainer,
              state.filter === type && styles.selectedButton, // Apply selected button styles
            ]}
          >
            <Text style={[styles.text, state.filter === type && styles.selectedText]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={state.data} 
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Screen03', {
                  name: item.name,
                  price: item.price,
                  sale: item.sale,
                  old_price: item.old_price,
                  image: item.image,
                })
              }
            >
              <Image source={getImageSource(item.image)} style={{ width: 100, height: 100 }} />
              <Text style={{ marginTop: 10 }}>{item.name}</Text>
              <Text style={{ fontWeight: '700', marginTop: 10 }}>${item.price}</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2} // Display items in two columns
      />
      <View> 
        <TouchableOpacity 
            onPress={()=>navigation.navigate('Screen04')}
            style={{alignSelf:"center", backgroundColor:"red", width:150, height:40, justifyContent:"center", alignItems:"center", marginTop: 20, borderRadius: 10}}>
            <Text style={{color:"white", fontSize: 18, fontWeight: '700'}}>
                Add new bike
            </Text>
        </TouchableOpacity> </View>
    </View>
    
  );
}

export default Screen02;

const styles = StyleSheet.create({
  filter: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  filterContainer: {
    width: 100,
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'gray',
  },
  selectedText: {
    color: 'red',
  },
  itemContainer: {
    width: 150,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#F7BA8326',
  }
});
