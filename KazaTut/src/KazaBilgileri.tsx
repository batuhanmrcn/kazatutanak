import React, { useState } from 'react';
import {
  View,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  NativeModules,
  ImageBackground,
  Button
} from 'react-native';
import {Formik , Form , Field} from "formik";

import {useDispatch , useSelector} from 'react-redux';

// KAZA BİLGİLERİ EKRANI 

const kazaBilgileri = ({navigation}) => {

const dispatch = useDispatch();

const [kazaTarihi , setKazaTarihi] = useState('');
const [kazaSaati , setKazaSaati] = useState('');
const [il , setil] = useState('');
const [ilce , setilce] = useState('');
const [mahalle , setmahalle] = useState('');
const [cadde , setcadde] = useState('');
const [semt , setsemt] = useState('');
const [sokak , setsokak] = useState('');
const [adSoyad , setadSoyad] = useState('');
const [adres , setadres] = useState('');
const [telNo , settelNo] = useState('');



    
  const initialFormValues = {
      kazaTarihi:'',
      kazaSaati :'',
      il : '',
      ilce : '',
      mahalle : '',
      cadde : '',
      semt : '',
      sokak : '',
      adSoyad : '',
      adres : '',
      telNo :'',

    };


    const handleSubmit = (values) => {
      
      // Perform any actions you need with the form values here
      dispatch({type : 'kazaTarihi' , payload : {kazaTarihi}})
      dispatch({type : 'kazaSaati' , payload : {kazaSaati}})
      dispatch({type : 'il' , payload : {il}})
      dispatch({type : 'ilce' , payload : {ilce}})
      dispatch({type : 'mahalle' , payload : {mahalle}})
      dispatch({type : 'cadde' , payload : {cadde}})
      dispatch({type : 'semt' , payload : {semt}})
      dispatch({type : 'sokak' , payload : {sokak}})
      dispatch({type : 'adSoyad' , payload : {adSoyad}})
      dispatch({type : 'adres' , payload : {adres}})
      dispatch({type : 'telNo' , payload : {telNo}})

      
      
      console.log(values)
      
    };


    const carpismaYeriCizim = () => {
      console.log('Carpısma Yeri Çizmek için Buttona tıklandı')
    }
    const imzaCizim = () => {
      console.log('İmza Atmak için Buttona tıklandı')
    }
   


return(
  <SafeAreaView style={styles.container}>
      <ScrollView>

      <View style={styles.headerView}>
          <Text style={{fontSize:24, fontWeight:'bold',color : "black"}}>Kaza Bilgileri</Text>
      </View>

      <View style={styles.containerbottom}>
        
      <Formik initialValues={initialFormValues} onSubmit={(values) => handleSubmit(values)}>
      {({values,handleChange,handleSubmit}) => (
      <>
          <View style={styles.inputscontainer}>
              
              <Text style={styles.inputheader}>KAZA TARIHI VE SAATLERI</Text>
              <TextInput style={styles.inputContainer}  
               value={values.kazaTarihi}
               placeholder='Kaza Tarihi                                             9 Nov 2023'
               placeholderTextColor={'gray'}
               onChangeText={setKazaTarihi}
              />
              <TextInput style={styles.inputContainer}  
               value={values.kazaSaati}
               placeholder='Kaza Saati                                    15:13'
               placeholderTextColor={'gray'}
               onChangeText={setKazaSaati}
              />

              <Text style={styles.inputheader}>KAZA YERİ</Text>

              <TextInput style={styles.inputContainer}  
               value={values.il}
               placeholder='İl'
               placeholderTextColor={'gray'}
               onChangeText={setil}
              />
              <TextInput style={styles.inputContainer}  
               value={values.ilce}
               placeholder='İlçe'
               placeholderTextColor={'gray'}
               onChangeText={setilce}
              />
              <TextInput style={styles.inputContainer}  
               value={values.mahalle}
               placeholder='Mahalle'
               placeholderTextColor={'gray'}
               onChangeText={setmahalle}
              />
              <TextInput style={styles.inputContainer}  
               value={values.cadde}
               placeholder='Cadde'
               placeholderTextColor={'gray'}
               onChangeText={setcadde}
              />
              <TextInput style={styles.inputContainer}  
               value={values.semt}
               placeholder='Semt'
               placeholderTextColor={'gray'}
               onChangeText={setsemt}
              />
              <TextInput style={styles.inputContainer}  
               value={values.sokak}
               placeholder='Sokak'
               placeholderTextColor={'gray'}
               onChangeText={setsokak}
              />
                  
              <Text style={styles.inputheader}>GÖRGÜ TANIKLAR</Text>

              <TextInput style={styles.inputContainer}  
               value={values.adSoyad}
               placeholder='Adı Soyad'
               placeholderTextColor={'gray'}
               onChangeText={setadSoyad}
              />
              <TextInput style={styles.inputContainer}  
               value={values.adres}
               placeholder='Adres'
               placeholderTextColor={'gray'}
               onChangeText={setadres}
              />
              <TextInput style={styles.inputContainer}  
               value={values.telNo}
               placeholder='Tel No'
               placeholderTextColor={'gray'}
               onChangeText={settelNo}
              />
              
              <Text style={styles.inputheader}>ÇARPIŞMA YERININ VE ANININ TASLAĞINI ÇIZIN</Text>
              <View style = {styles.headerView}>
                <Button title = 'Çiziminizi Yapmak İçin Tıklayın' onPress={carpismaYeriCizim} />
              </View>
              
          </View> 
          <View style = {styles.headerView}>
                <Button title = 'Girilen Bilgileri Tutanağa Ekle' onPress={handleSubmit} />
              </View>
      </>
    
    )}
    </Formik>
      </View>
      </ScrollView>
  </SafeAreaView>
);
}

export default kazaBilgileri;

const styles = StyleSheet.create({
container:{
  backgroundColor:'lightgray',
  flex:1
},
headerView:{
backgroundColor:'white',
alignItems:'center',
padding:10,
width:Dimensions.get('window').width/1.05,
alignSelf:'center',
borderRadius:10
},

containerbottom:{
  //justifyContent: 'center','
},
inputscontainer:{
  padding:10
},

buttonekle: {
  marginTop: 100,
   alignSelf: 'center',
   backgroundColor: 'purple',
   width: Dimensions.get('window').width/2,
   justifyContent: 'center',
   alignItems: 'center',
   height: 40,
   borderRadius: 20,
 },



inputContainer: {
  // flexDirection: 'row',

  backgroundColor:'white',
   borderRadius: 5,
   color : "black",
   paddingHorizontal: 10,
   paddingVertical: 10,
   borderBottomWidth:1,
   borderBottomColor:'gray'
 },

inputheader: {
  marginTop: 10,
  fontSize:18,
  color: 'gray',
  marginBottom: 10
},

});
