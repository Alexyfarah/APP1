import React from 'react'; // Importing React library to use components
import { View, Text, Button, StyleSheet } from 'react-native'; // Importing components from React Native for UI

// Functional component for the Home Screen
// Accepts a `navigation` prop to enable navigation between screens
const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Display a welcome message */}
      <Text style={styles.text}>Welcome to the Home Screen!</Text>

      {/* Button to navigate to the "Chart" screen */}
      <Button
        title="Go to Chart" // Label for the button
        onPress={() => navigation.navigate('Chart')} // Function to navigate to the 'Chart' screen
      />
    </View>
  );
};

// Defining styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the full screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  text: {
    fontSize: 18, // Font size for the welcome text
    marginBottom: 20, // Adds space below the text
  },
});

// Exporting the component for use in the application
export default HomeScreen;
