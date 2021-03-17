import React, { useState } from 'react';
import { Dimensions, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ToDoScreen(props){
    const { toDoList, handlerSubmitInput, handlerOnFilterItem, handlerOnChangActive,handlerAllCompleted } = props;
    const [ term, setTerm ] = useState();
    const [ focus, setFocus ]= useState(false);
    
    // const screenWidth = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <View style={styles.formInput}>
                <View style={{justifyContent: 'center'}}>
                    <Ionicons 
                        name='chevron-down-outline' 
                        size={24} 
                        style={styles.checkAll}
                        onPress={() => handlerAllCompleted()}
                    />
                </View>
                
                <TextInput 
                    style={focus ? styles.focusInput : styles.input}
                    onChangeText={(text) => setTerm(text)}
                    value={term}
                    placeholder='What Need To Be Done?'
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <TouchableOpacity>
                    <Button 
                        style={styles.button} 
                        title={'Add'} 
                        onPress={()=>{
                            handlerSubmitInput(term);
                            setTerm('');}}
                        color='#74b9ff'
                            />
                </TouchableOpacity>
             </View>
            <View style = {{flex: 1,width: '100%'}}>
                <ScrollView>
                {toDoList.map(function(item){
                    if(item.isComplete == false){
                        return (
                            <Text style={styles.contentFalse}>
                                <Ionicons name='checkmark-outline' size={24}  onPress={() => handlerOnChangActive(item)}/>
                                {item.work}
                            </Text>
                    )} else if ( item.isComplete == true){
                        return(
                            <Text style={styles.contentTrue}>
                                <Ionicons name='checkmark-outline' size={24}  onPress={() => handlerOnChangActive(item)}/>
                                {item.work}
                            </Text>
                    )}
                })}
                
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.leftFooter}>
                    <Button 
                        style={focus ? styles.focusBtnFooter : styles.btnFooter} 
                        onPress={() => handlerOnFilterItem('All')} 
                        onFocus={() => setFocus(true)}
                        title={'All'} 
                        color='#74b9ff'
                    />
                    {/* <Text 
                        style={focus ? styles.focusBtnFooter : styles.btnFooter} 
                        onPress={() => {
                            handlerOnFilterItem('All');
                        }}
                        
                        >
                            All
                    </Text> */}
                    <Button
                        style={styles.btnFooter} 
                        onPress={() => handlerOnFilterItem('Active')} 
                        title={'Active'}
                        color='#74b9ff'
                    />
                    <Button 
                        style={styles.btnFooter} 
                        onPress={() => handlerOnFilterItem('Completed')} 
                        title={'Completed'}
                        color='#74b9ff'
                    />
                </View>
                <View>
                    <Button 
                        onPress={() => handlerOnFilterItem('Clear Completed')} 
                        title={'Clear Completed'} 
                        color='#74b9ff'
                    >
                    </Button>
                    {/* <Text style={styles.btnFooter} onPress={() => handlerOnFilterItem('Clear Completed')}>Clear Completed</Text> */}
                </View>
            </View>
        </View>
    )
}

export default ToDoScreen;

const styles = StyleSheet.create({
    formInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        // flex: 1,
    },
    checkAll: {
        opacity: 0.5
    },
    
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: 16
    },
    input: {
        height: 40,
        borderColor: 'gray',
        // borderWidth: 0,
        flex:1,
        
        // borderStyle: none
    },
    focusInput: {
        height: 40,
        flex:1,
        // borderColor: 'gray',
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        borderStyle: 'solid'
    },
    contentFalse: {
        paddingVertical: 5,
        width: '100%',
        fontSize: 24,

    },
    contentTrue: {
        paddingVertical: 5,
        width: '100%',
        fontSize: 24,

        opacity: 0.5,
        textDecorationLine: 'line-through',
    },
    footer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: '#dfe6e9',
    },
    leftFooter: {
        flexDirection: 'row',
    },
   
})