
import { combineReducers, createStore } from 'redux';



let alert초기값 = true;

function reducer2(state=alert초기값,액션){
  if(액션.type === '닫기'){
    return !state
  }
  else{

  return state
  }
}



let 기본state = [];

function reducer(state = 기본state, 액션) {
    if(액션.type ==='항목추가'){
        
        let copy = [...state];
        copy.push(액션.payload);
        return copy

    }
  else if (액션.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (액션.type === '수량감소' && state[0].quan > 0) {
    let copy = [...state];
    copy[0].quan--;
    return copy
  }
  else {
    return state
  }
}


let store = createStore(combineReducers({reducer,reducer2}));


export default store;