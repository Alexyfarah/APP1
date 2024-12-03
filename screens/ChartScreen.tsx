import React from 'react'; // Importing React library for creating components
import { View, Text, StyleSheet, Dimensions } from 'react-native'; // Importing components and utilities from React Native
import { LineChart } from 'react-native-chart-kit'; // Importing the LineChart component from react-native-chart-kit library

// Functional component for rendering the chart screen
const ChartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Displaying a title for the chart */}
      <Text style={styles.text}>Chart Screen</Text>

      {/* Rendering the LineChart component */}
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43], // Y-axis data points
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // Dynamically setting the chart width based on screen size
        height={220} // Fixed height of the chart
        yAxisLabel="$" // Prefix for Y-axis values (e.g., representing currency)
        chartConfig={{
          backgroundColor: '#e26a00', // Background color for the chart area
          backgroundGradientFrom: '#fb8c00', // Start color for the gradient
          backgroundGradientTo: '#ffa726', // End color for the gradient
          decimalPlaces: 2, // Number of decimal places for Y-axis values
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Line color with opacity
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Label color with opacity
        }}
        style={styles.chartStyle} // Applying custom styles to the chart
      />
    </View>
  );
};

// Defining styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes the full available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20, // Adds padding around the container
  },
  text: {
    fontSize: 18, // Font size for the title text
    marginBottom: 20, // Adds space below the title text
  },
  chartStyle: {
    marginVertical: 8, // Adds vertical margin for spacing
    borderRadius: 16, // Rounds the corners of the chart
  },
});

// Exporting the component for use in the application
export default ChartScreen;
