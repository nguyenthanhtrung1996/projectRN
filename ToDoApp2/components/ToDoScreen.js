import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ToDoScreen(props){
    const { toDoList, activeId, handlerSubmitInput, handlerOnClickItem } = props;
    const [ term, setTerm ] = useState();
    const Term = useRef('');
    // console.log(toDoList,activeId);
    return (

        <View style={styles.container}>
            <Text style={styles.title}>ToDoApp</Text>
            <View style={styles.formInput}>
                <TextInput 
                style={styles.input}
                onChangeText={(text) => setTerm(text)}
                value={term}
                placeholder='Nhập....'
                />
                <TouchableOpacity>
                    <Button style={styles.btn} title={'Add'} onPress={()=>{
                        handlerSubmitInput(term);
                        setTerm('');
                    }}/>
                </TouchableOpacity>
             </View>
             <View style = {{width: '100%'}}>
                {toDoList.map(function(item){
                    return (
                        <View style={styles.content}>
                            <Text style={styles.text}>
                                {item}
                            </Text>
                            <Ionicons name='close-circle-outline' size={24}  onPress={() => handlerOnClickItem(item)}/>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default ToDoScreen;

const styles = StyleSheet.create({
    formInput:{
        flexDirection: 'row',
    },
    title:{
        fontSize: 32,
        fontWeight: '500',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '50%',
        backgroundColor: '#fff',
        paddingTop: 16
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        flex:1,
        // borderStyle: none
    },
    btn: {
        backgroundColor: '#3498db',
        color: 'white',
        borderStyle: 'solid'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    text: {
        fontSize: 24
    }
})