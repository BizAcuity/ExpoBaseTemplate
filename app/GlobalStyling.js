
import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import EStyleSheet from 'react-native-extended-stylesheet';


// Get height of the phone status bar
const statusBarHeight = Constants.statusBarHeight;

// Get Screen Dimensions
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

EStyleSheet.build({
    $rem: screenWidth / 380,
  });
// Globalstyle sheet to store styles of all componenets
const styles = EStyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statusContainer: {

        marginBottom: '10rem',
        justifyContent: "flex-end",
        alignItems: "center",
    },
    dialogContentView: {
      paddingLeft: 18,
      paddingRight: 18,
    },
    navigationBar: {
      borderBottomColor: '#b5b5b5',
      borderBottomWidth: 0.5,
      backgroundColor: '#ffffff',
    },
    navigationTitle: {
      padding: 10,
    },
    navigationButton: {
      padding: 10,
    },
    navigationLeftButton: {
      paddingLeft: 20,
      paddingRight: 40,
    },
    navigator: {
      flex: 1,
      // backgroundColor: '#000000',
    },
    customBackgroundModal: {
      opacity: 0.5,
      backgroundColor: '#000',
    }, 
  });

export default styles;