import React, { useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { activeWork, addNewWork, allWork, completeWork, deleteWork, setActiveWork, allCompleteWork, fetchToDo } from '../actions/addWork';
import ToDoScreen from '../components/ToDoScreen';

function HomePage(props){
    const toDoList = useSelector(state => state.add.list);
    const toDoToTal = useSelector(state => state.add.arrayClone);

    const dispatch = useDispatch();

    useEffect(()=> {
        fetchToDo();
    }, []);
    function check(item){
        if(item == '' || item == 'undefined') {
            Alert.alert('Error', `Work isn't empty or undefined!!`)
            return true;
        }
        item = item.replace(/\s+/g,' ').trim();
        for (const obj of toDoToTal) {
            if(item.toLowerCase() === obj.work.toLowerCase()){
                Alert.alert('Error', 'Work haved!!')
                return true;
            }
        }
        return false;
    }

    function handlerSubmitInput(item){
        if(check(item) == true){
            return;
        } else {
            const action = addNewWork(item);
            dispatch(action);
        }
    }

    function handlerOnFilterItem(text){
        const filterName = text;
        if(filterName == 'All'){
            const action = allWork(filterName);
            dispatch(action);
        } else if ( filterName == 'Active') {
            const action = activeWork(filterName);
            dispatch(action);
        } else if ( filterName == 'Completed') {
            const action = completeWork(filterName);
            dispatch(action);
        } else if ( filterName == 'Clear Completed') {
            const action = deleteWork('DELETE_WORK');
            dispatch(action);
        }
        
    }

    function handlerAllCompleted(){
        const action = allCompleteWork('ALL_COMPLETE_WORK');
        dispatch(action);
    }

    function handlerChangeActive(item){
        console.log(item);
        const action = setActiveWork(item);
        dispatch(action);
    }
    return(
        <View style={styles.container}>
            <ToDoScreen 
                toDoList={toDoList}
                handlerSubmitInput={handlerSubmitInput} 
                handlerOnFilterItem={handlerOnFilterItem} 
                handlerOnChangActive={handlerChangeActive}
                handlerAllCompleted={handlerAllCompleted}
            />
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
    // paddingHorizontal: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)', 
    shadowOffset: {width: 0, height: 20}, 
    shadowRadius: 40, 
    borderRadius: 50
    },
  });
  