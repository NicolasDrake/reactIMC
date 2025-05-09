
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {

  function calcularImc(){
    alert("Calculo do IMC");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> IMC </Text>
      
      <View style={styles.bloco}>
          <Text style={styles.label}>Peso</Text>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
          />
      </View>
      <View style={styles.bloco}>
          <Text style={styles.label} >Altura</Text>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            
          />
      </View>
      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={calcularImc} >
              <Text style={styles.btnTxt}>Calcular</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:80
  },
  bloco:{
    width:'100%',
    marginTop:20
  },
  label:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%',
    borderWidth:1,
    borderRadius:10
  },
  btn:{
    width:'80%',
    marginLeft:'10%',
    backgroundColor:'#000'
  },
  btnTxt:{
    fontSize:30,
    color:"#FFF",
    textAlign:'center'
  }
});
