import React from 'react';
import { Alert, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, deleteHobby } from '../actions/addHobby';
import ToDoScreen from '../components/ToDoScreen';

function HomePage(props){
    const toDoList = useSelector(state => state.add.list);
    const activeId = useSelector(state => state.add.activeId);

    const dispatch = useDispatch();

    function handlerSubmitInput(value){
        if(value=='') return;
        const action = addNewHobby(value);
        dispatch(action);
    }

    function handlerOnClickItem(item){
        console.log(item);
        Alert.alert('Thành Công', `Xóa ${item}`);
        const action = deleteHobby(item);
        dispatch(action);
    }
    return(
        <View style={styles.container}>
            <ToDoScreen toDoList={toDoList} activeId={activeId} handlerSubmitInput={handlerSubmitInput} handlerOnClickItem={handlerOnClickItem}/>
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  