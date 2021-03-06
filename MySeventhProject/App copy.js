import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.containerButton}>
       <Button
        onPress =  {() => {
          alert('You tapped a button 1');
        }}
        title = 'Press Button 1'
       />
        </View>  

      <View style = {styles.containLayoutButton}>
        <Button
          onPress =  {() => {
            alert('You tapped a button 2');
          }}
          title = 'Press Button 2'
        />

        <Button
          onPress =  {() => {
            alert('You tapped a button Great');
          }}
          title = 'Great'
          color = 'green'
        />
        </View>   

      <View style ={styles.containerButton} >
        <Button
            onPress =  {() => {
              alert('You tapped a Tap Me!');
            }}
            title = 'Tap Me!'
          />
        
        
        
        </View> 



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25,
  },

  containLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
