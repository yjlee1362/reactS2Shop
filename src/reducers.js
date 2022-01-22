
import { combineReducers, createStore } from 'redux';



let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === '닫기') {
    return !state
  }
  else {

    return state
  }
}

let 기본state = [];

function reducer(state = 기본state, 액션) {
  if (액션.type === '항목추가') {

    let found = state.findIndex((a) => { return a.id === 액션.payload.id })

    if (found >= 0) {
      const copy = [...state];
      copy[found].quan++
      return copy;
    } else {
      const copy = [...state];
      copy.push(액션.payload);
      copy.sort(function (a, b) {
        return a.id - b.id
      });
      return copy
    }
  }
  else if (액션.type === '수량증가') {
    let copy = [...state];
    copy[액션.데이터].quan = copy[액션.데이터].quan + 1;
    return copy
  } else if (액션.type === '수량감소' ) {
    if(state[액션.데이터].quan === 0){return state}
    else{
    let copy = [...state];
    copy[액션.데이터].quan--;
    return copy}
  } else if (액션.type === '수량변경'){
    let copy = [...state];
    copy[액션.데이터.번호].quan = 액션.데이터.수량;
    return copy
  }
    else if (액션.type ==='빼기'){
      let copy = [...state];
      copy.splice(액션.데이터,1);
      return copy;
    }
  else {
    return state
  }
}


let store = createStore(combineReducers({ reducer, reducer2 }));


export default store;