
import React from 'react'; // Importing React for component creation
import { NavigationContainer } from '@react-navigation/native'; // Provides the navigation context for the app
import { createStackNavigator } from '@react-navigation/stack'; // Creates a stack-based navigation structure
import HomeScreen from './screens/HomeScreen.tsx'; // Importing the HomeScreen component
import ChartScreen from './screens/ChartScreen.tsx'; // Importing the ChartScreen component

// Create a Stack Navigator instance
const Stack = createStackNavigator();

// Main App component
const App = () => {
  return (
    // Wrap the application in a NavigationContainer to provide navigation functionality
    <NavigationContainer>
      {/* Define the Stack Navigator */}
      <Stack.Navigator initialRouteName="Home">
        {/* Register the HomeScreen as the initial route */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Register the ChartScreen as another route */}
        <Stack.Screen name="Chart" component={ChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the App component as the entry point for the application
export default App;
