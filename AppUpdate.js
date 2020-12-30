import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Modal,TextInput, FlatList, ScrollView } from 'react-native';


const AddUpdate = () => {
    const [posts,setPosts] = useState('')
    const [modal,setModal] = useState(false)
    const [array,setArray] = useState([])

    const AddToArray = () => {
        setArray(array =>[...array,posts])
        alert(array)
        setModal(false)

    }

    return (
        <View >
            <TouchableOpacity style = {styles.button} 
                onPress={() => setModal(true)} >
                <Text style = {styles.subTitle} >Post An Update</Text>
            </TouchableOpacity>
            <Modal 
                animationType='slide'
                visible={modal}
            >
                <View>
                    <View style={styles.modalHeader}/>
                    <TextInput
                        multiline 
                        placeholder="Write your message"
                        style={styles.content}
                        onChangeText={(val) => setPosts(val)}
                        value={posts}
                        maxLength={300}
                    />
                    <TouchableOpacity style = {styles.sendButton} 
                        //onPress={() => setModal(false)} 
                        onPress = {AddToArray} 
    
                    >
                        <Text style = {styles.sendTitle}>Post</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
 
   
            {/* <FlatList //this is meant to be coded out.
  data={array}
 renderItem={({item}) => ( 
 
   <Text style={styles.postText}>{item}</Text>
 )}
  >
  {array.map((item,key) => (
     <TouchableOpacity>
      <Text key={key} style={styles.postText}>{item}</Text>
      </TouchableOpacity>
    
    ))}  
  
    </FlatList>
 */}

            <FlatList
                data={array}
                renderItem={({item}) => ( 
                    <Text style={styles.item}>{item}</Text>
                )}

            />   

        </View>

    );
}


const styles = StyleSheet.create({
 
    button: {
        elevation:8,
        margin: 5,
        top:-56,
        alignItems:'center',
        padding:30,
        backgroundColor:'#BEBEBE',
        borderRadius:25,
    
    },

    sendButton: {
        elevation:8,
        position:'absolute',
        top:20,
        right:10,
        left:200,
        alignItems:'center',
        padding:9,
        backgroundColor:'#8B0000',
        borderRadius:5,
    
    },

    subTitle: {
        fontSize:30, 
        color: 'white',
        marginLeft:-150,

    },

    sendTitle: {
        fontSize:20, 
        color: 'white',
        justifyContent:'center',

    },

    content: {
        flex:1,
        position:'absolute',
        fontSize:25,
        color:'black',
        top:130,
        right:20,
        left:20,
  
    },

    modalHeader: {
        height:90,
        backgroundColor:'#CC9900'

    },

    postText: {
        top: -60,
        marginTop:20,
        color:'black',
        fontSize:25,
        elevation:8,
        //alignItems:'center',
        padding:30,
        backgroundColor:'#BEBEBE',
        borderRadius:25,
    
    },

    item: {
        color:'black',
        fontSize:25,
    
    },


  
});

export default AddUpdate; 