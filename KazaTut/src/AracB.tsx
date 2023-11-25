
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

const AracB = ({navigation}) => {
    
const dispatch = useDispatch();

const [adsoyadB, setAdSoyadB] = useState('');
const [tcB , settcB] = useState('');
const [belgeNoB , setbelgeNoB] = useState('');
const [alindigiYerB , setalindigiYerB] = useState('');
const [adresB , setadresB] = useState('');
const [cepTelB , setcepTelB] = useState('');
const [sasiNoB , setsasiNoB] = useState('');
const [markaModelB , setmarkaModelB] = useState('');
const [plakaB , setplakaB] = useState('');
const [kullanimSekliB , setkullanimSekliB] = useState('');
const [sigortalininAdSoyadB , setsigortalininAdSoyadB] = useState('');
const [tcVergiNoB , settcVergiNoB] = useState('');
const [sigortaUnvanB , setsigortaUnvanB] = useState('');
const [acenteNoB , setacenteNoB] = useState('');
const [tramerBelgeNoB , settramerBelgeNoB] = useState('');
const [hizDurumuB , sethizDurumuB] = useState('');
const [frenUzunluguB , setfrenUzunluguB] = useState('');
const [yesilKartNoB , setyesilKartNoB] = useState('');
const [ulkeB , setulkeB] = useState('');
const [pasaportB , setpasaportB] = useState('');
const [surucuGorusB , setsurucuGorusB] = useState('');

  const initialFormValues = {
      adsoyadB:'',
      tcB:'',
      belgeNoB :'',
      alindigiYerB :'',
      adresB : '',
      cepTelB :'',
      sasiNoB : '',
      markaModelB : '',
      plakaB : '',
      kullanimSekliB : '',
      sigortalininAdSoyadB :'',
      tcVergiNoB : '',
      sigortaUnvanB : '',
      acenteNoB :'',
      tramerBelgeNoB : '',
      hizDurumuB : '',
      frenUzunluguB : '',
      yesilKartNoB : '',
      ulkeB : '',
      pasaportB : '',
      surucuGorusB: '',
    };



    const handleSubmit = (values) => {
      // Perform any actions you need with the form values here
      dispatch({type : 'adsoyadB' , payload : {adsoyadB}})
      dispatch({type : 'tcB' , payload : {tcB}})
      dispatch({type : 'belgeNoB' , payload : {belgeNoB}})
      dispatch({type : 'alindigiYerB' , payload : {alindigiYerB}})
      dispatch({type : 'adresB' , payload : {adresB}})
      dispatch({type : 'cepTelB' , payload : {cepTelB}})
      dispatch({type : 'sasiNoB' , payload : {sasiNoB}})
      dispatch({type : 'markaModelB' , payload : {markaModelB}})
      dispatch({type : 'plakaB' , payload : {plakaB}})
      dispatch({type : 'kullanimSekliB' , payload : {kullanimSekliB}})
      dispatch({type : 'sigortalininAdSoyadB' , payload : {sigortalininAdSoyadB}})
      dispatch({type : 'tcVergiNoB' , payload : {tcVergiNoB}})
      dispatch({type : 'sigortaUnvanB' , payload : {sigortaUnvanB}})
      dispatch({type : 'acenteNoB' , payload : {acenteNoB}})
      dispatch({type : 'tramerBelgeNoB' , payload : {tramerBelgeNoB}})
      dispatch({type : 'hizDurumuB' , payload : {hizDurumuB}})
      dispatch({type : 'frenUzunluguB' , payload : {frenUzunluguB}})
      dispatch({type : 'yesilKartNoB' , payload : {yesilKartNoB}})
      dispatch({type : 'ulkeB' , payload : {ulkeB}})
      dispatch({type : 'pasaportB' , payload : {pasaportB}})
      dispatch({type : 'surucuGorusB' , payload : {surucuGorusB}})
      console.log(values);
    };

    
    const darbeCizimA = () => {
      console.log('Darbe Çizmek için Buttona tıklandı')
    }
    const imzaCizimB = () => {
      console.log('İmza Atmak için Buttona tıklandı')
    }
    const tutanakEkleButton = () => {
      console.log('Girilen Bilgileri Tutanağa Eklemek İçin Buttona Basıldı')
    }

    // geçici TextInput içerisi def str tanımladım 
    const defaultValue = "Poliçenin Başlangıç Bitiş Tarihi"
    const defaultValue2 = "Başlangıç                                                   Bitiş"
    const defaultValue3 = "6Nov 2023                                                   6Nov 2023"

return(
  <SafeAreaView style={styles.container}>
      <ScrollView>

      <View style={styles.headerView}>
          <Text style={{fontSize:24, fontWeight:'bold',color : "black"}}>Araç B</Text>
      </View>

      <View style={styles.containerbottom}>
      <Formik initialValues={initialFormValues} onSubmit={(values) => handleSubmit(values)}>
      {({values,handleChange,handleSubmit}) => (
      <>
          <View style={styles.inputscontainer}>
              
              <Text style={styles.inputheader}>Sürücü BILGILERI</Text>
              <TextInput style={styles.inputContainer}  
               value={values.adsoyadB}
               placeholder='Adı Soyadı (Zorunlu Alan)'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adsoyadB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tcB}
               placeholder='TC Kimlik No (Zorunlu Alan)                                    11 karakter'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tc')}
              />
               <TextInput style={styles.inputContainer}  
               value={values.belgeNoB}
               placeholder='Sürücü Belge No ve Sınıf'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('belgeNo')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.alindigiYerB}
               placeholder='Alındığı Yer'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('alindigiYer')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.adresB}
               placeholder='Adres'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adres')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.cepTelB}
               placeholder='Cep Telefonu'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('cepTel')}
              />


              <Text style={styles.inputheader}>Araç BILGILERI</Text>

              <TextInput style={styles.inputContainer}  
               value={values.sasiNoB}
               placeholder='Şasi No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sasiNo')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.markaModelB}
               placeholder='Marka ve Modeli'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('markaModel')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.plakaB}
               placeholder='Plaka'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('plaka')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.kullanimSekliB}
               placeholder='Kullanım Şekli'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('kullanimSekli')}
              />

              <Text style={styles.inputheader}>TRAFIK SIGORTASI POLIÇE BILGILERI</Text>

              <TextInput style={styles.inputContainer}  
               value={values.sasiNoB}
               placeholder='Sigortalının Adı Soyadı'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sasiNo')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tcVergiNoB}
               placeholder='TC Kimlik/Vergi No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tcVergiNo')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.sigortaUnvanB}
               placeholder='Sigorta Şirketinin Unvanı'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sigortaUnvan')}
              />
                <TextInput style={styles.inputContainer}  
               value={values.acenteNoB}
               placeholder='Acente No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('acenteNo')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tramerBelgeNoB}
               placeholder='TRAMER Belge No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tramerBelgeNo')}
              />
              
              <TextInput style={styles.inputContainer}  //geçici
               value={defaultValue} 
              />
              <TextInput style={styles.inputContainer}  
               value={defaultValue2} 
              />
              <TextInput style={styles.inputContainer}  
               value={defaultValue3} //buraya kadar
              /> 

              <Text style={styles.inputheader}>ARAÇ HIZ DURUMU</Text>
              <TextInput style={styles.inputContainer}  
               value={values.hizDurumuB}
               placeholder='Hız Durumu (km/s)'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('hizDurumu')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.frenUzunluguB}
               placeholder='Tespit Edildi İse Fren İzi Uzunluğu'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('frenUzunlugu')}
              />
              
              <Text style={styles.inputheader}>ARAÇ YEŞİL KART (GREEN CARD) BELGESINE SAHIPSE DOLDURULACAK BÖLÜM</Text>
              <TextInput style={styles.inputContainer}  
               value={values.yesilKartNoB}
               placeholder='Yeşil Kart No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('yesilKartNo')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.ulkeB}
               placeholder='Ülke'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('ulke')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.pasaportB}
               placeholder='Pasaport'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('pasaport')}
              />

              <Text style={styles.inputheader}>SÜRÜCÜ GÖRÜŞLERİ ARAÇ B</Text>
              <TextInput style={styles.inputContainer} 
                value={values.surucuGorusB}
                  multiline = {true}  //Bir alt satıra geçmek için
              />

              <Text style={styles.inputheader}>ARACIN DARBE ALDIĞI YERİ ÇIZIN</Text>
              <View style = {styles.headerView}>
                <Button title = 'Çiziminizi Yapmak İçin Tıklayınız' onPress={darbeCizimA} />
              </View>
              

              <Text style={styles.inputheader}>B SÜRÜCÜSÜNÜN İMZASI</Text>
              <View style = {styles.headerView}>
                <Button title = 'İmzanızı Atmak İçin Tıklayınız' onPress={imzaCizimB} />
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

export default AracB;

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
