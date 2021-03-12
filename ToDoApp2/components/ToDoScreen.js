import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
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
                <Button style={styles.btn} title={'Add'} onPress={()=>{
                    handlerSubmitInput(term);
                    setTerm('');
                }}/>
             </View>
             <View>
                {toDoList.map(function(item){
                    return (
                        <Text style={styles.content}>
                            <Ionicons name='close-circle-outline' size={24}  onPress={() => handlerOnClickItem(item)}/>
                            {item}
                        </Text>
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
        fontSize: 24
    }
})