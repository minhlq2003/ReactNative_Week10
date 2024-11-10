import { Image, Text, TouchableOpacity, View } from "react-native";

function Screen03( {route} ){
    const { name, price, sale, old_price, image } = route.params;
    return (
        <View style={{display: "flex", flexDirection: "column", justifyContent: "center", flex: 1,  padding: 10}}>
            <Image source={image} style={{width: 400, height: 400}}/>
            <Text style={{fontSize: 26, fontWeight: '700'}}>{name}</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
             <Text style={{color: 'gray', fontSize: 24}}>{sale} OFF {old_price}</Text>
            <Text style={{fontSize: 24, fontWeight: '700', marginLeft: 20, textDecorationLine: 'line-through'}}>{price}</Text>
            </View>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Description</Text>
            <Text style={{color: 'gray'}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            <View >
                <TouchableOpacity 
                    style={{alignSelf:"center", backgroundColor:"red", width:200, height:50, justifyContent:"center", alignItems:"center", marginTop: 20, borderRadius: 10}}>
                    <Text style={{color:"white", fontSize: 24, fontWeight: '700'}}>
                        Add to card
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen03;