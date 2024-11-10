import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

function Screen04() {
  // State variables for bike input fields and loading state
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [sales, setSales] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle the API call for adding a bike
  const addBike = async () => {
    setLoading(true);
    setError('');
    
    // API URL to post new bike data
    const url = 'https://67301e4266e42ceaf15f678b.mockapi.io/bikestore/bikes';

    const newBike = {
      name,
      price,
      oldPrice,
      sales,
      image,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBike),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert('Bike added successfully!');
      } else {
        setError('Failed to add bike');
      }
    } catch (err) {
      setLoading(false);
      setError('Error adding bike');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add New Bike</Text>

        {/* Name input */}
        <TextInput
          style={styles.input}
          placeholder="Bike Name"
          value={name}
          onChangeText={setName}
        />

        {/* Price input */}
        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        {/* Type input */}
        <TextInput
          style={styles.input}
          placeholder="Old price"
          value={oldPrice}
          onChangeText={setOldPrice}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Sales"
          value={sales}
          onChangeText={setSales}
        />

        {/* Image URL input */}
        <TextInput
          style={styles.input}
          placeholder="Image name"
          value={image}
          onChangeText={setImage}
        />

        {/* Error message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Submit button */}
        <TouchableOpacity style={styles.button} onPress={addBike} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Add Bike</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Screen04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Adds shadow for a nice effect
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
