import { StyleSheet, Text, View ,TouchableOpacity,} from 'react-native'
import React from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome"

const App = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#801a82',
    }}>
    <View style={{
      flex:2,
    marginTop:100,
      
    }}>
    <Text style={{
      fontSize:30,
      fontWeight:"bold",
      color:'white',
      marginLeft:20,
    }}>Welcome To The{'\n'}Matchmaking{'\n'}Application
    </Text>

    </View>
    <View style={{
      flex:2,
    
    }}>
<TouchableOpacity style={{
  height:35,
  width:300,
  backgroundColor:'green',
  borderRadius:10,
color:'#000000',
  alignSelf:'center',
  marginTop:40,
  justifyContent:'center',
}}>
<Text style={{
  alignSelf:'center',
  color:'#ffff',
}}>
LOGIN</Text>

</TouchableOpacity>
<TouchableOpacity style={{
  height:35,
  width:300,
  borderColor:'white',
  borderRadius:10,
  alignSelf:'center',
 marginTop:10,
 justifyContent:'center',
}}>
<Text style={{
  alignSelf:'center',
  color:'#ffff',
}}>REGISTER</Text>

</TouchableOpacity>
<Text style={{
  color:'#ffff',
  fontSize:10,
  alignSelf:'center',
  marginTop:30,
}}>Login with</Text>

    
<View style={{
  letterSpacing:15,
  alignSelf:'center',
  marginTop:15,
  flexDirection:'row',
 
}}>
<TouchableOpacity>
<FontAwesome style={{
  letterSpacing:15,
}}

 name="facebook-f" size={15} color={"white"}></FontAwesome>
 </TouchableOpacity>
 <TouchableOpacity>
  <FontAwesome style={{
    letterSpacing:15,
  }}
 
name="twitter" size={15} color={"white"}></FontAwesome>
</TouchableOpacity>

<TouchableOpacity>
<FontAwesome style={{
  letterSpacing:15,
}}

name="google" size={15} color={"white"} >

</FontAwesome>
</TouchableOpacity>
</View>
 
</View>

</View>



    
   
  
  
  )
}

export default App

const styles = StyleSheet.create({})