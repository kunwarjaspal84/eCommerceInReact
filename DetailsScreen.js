import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View,FlatList, SafeAreaView, TouchableOpacity,Button,Image,Card } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// class DetailsScreen extends React.Component {
//     render() {
//       return (
//         <View>
//             <Text>Details</Text>
//         </View>
//       );
//     }
// }


// export default DetailsScreen;

 export default function DetailsScreen({navigation}){

      return (
        <View>
            <Text>Details</Text>
        </View>
      );
    }
