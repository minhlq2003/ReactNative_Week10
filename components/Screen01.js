import { Image, Text, TouchableOpacity, View } from "react-native";

function Screen01( {navigation} ){
    return (
        <View style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, alignItems: 'center'}}>
            <View style={{display: "flex", flexDirection:"column",justifyContent: "center", alignItems: "center", alignContent:"center"}}>
                <Text style={{textAlign:"center", fontSize: 24, fontWeight: '700'}}>A Premium online store for sporter and 
                their stylish choice</Text>
            </View>            
            <Image style={{height: 300, width: 300}} source={require('../assets/image01.png')}/>

            <Text style={{textAlign:"center", fontSize: 24, fontWeight: '700'}}>POWER BIKE SHOP</Text>
            <View >
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Screen02')}
                    style={{alignSelf:"center", backgroundColor:"red", width:200, height:50, justifyContent:"center", alignItems:"center", marginTop: 20, borderRadius: 10}}>
                    <Text style={{color:"white", fontSize: 24, fontWeight: '700'}}>
                        Get started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen01;