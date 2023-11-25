import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, SafeAreaView, TouchableOpacity, Dimensions, } from 'react-native';


const MainMenu2 = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate("KazaBilgileri")}>
                <Text style={styles.buttonText}>Kaza Bilgileri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate("AracA")}>
                <Text style={styles.buttonText}>Araç A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate("AracB")}>
                <Text style={styles.buttonText}>Araç B</Text>
            </TouchableOpacity>

                        
            <TouchableOpacity style={styles.buttonView2} onPress={() => null }>  //buraya basıldıgı zaman reduxlara girilen variabller yazdırılacak   
                <Text style={styles.buttonText}>Tutanağı Oluştur</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center'
  },
  innerContainer: {
    alignSelf:'center',
    justifyContent:'center',
    gap:40
  },
  buttonView:{
    backgroundColor:'blue',
    padding:30,
    borderRadius:60,
    alignItems:'center'
  },
  buttonView2:{
    backgroundColor:'orange',
    padding:30,
    borderRadius:60,
    alignItems:'center'
  },
  buttonText:{
    color:'white',
    fontSize:38
  }
});

export default MainMenu2;