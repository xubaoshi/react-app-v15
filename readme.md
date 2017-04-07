## redux集成Immutable ##
### 前言 ###
<p>
Immutable Data一旦创建就不能再更改的数据，，对Immutable对象的任何添加修改都会返回一个新的Immutable对象，其实现原理来源于持久化数据结构。使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时避免深拷贝带来的性能损耗，Immutable使用了即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。</p>
<p>React中使用Immutable对提升应用性能有很大帮助。</p>
Immutable api文档 [http://facebook.github.io/immutable-js/](http://facebook.github.io/immutable-js/)<br>
示例代码  [https://github.com/xubaoshi/react-app-v15](https://github.com/xubaoshi/react-app-v15)
### redux-immutable ###
将immutable集成到redux可以使用redux-immutable插件
	
	// 1.替换redux 原有的combineReducers  
	// ===============================================
	// old
	import { combineReducers } from 'redux'

	// new 
	import { combineReducers } from 'redux-immutable'

	// initialState 需要是immutable的
	// 完整代码如下 configureStore.jsx
	import { createStore, applyMiddleware } from 'redux'
	import { combineReducers } from 'redux-immutable'
	import thunkMiddleware from 'redux-thunk'	
	import createLogger from 'redux-logger'
	import routerReducer from '../reducers/routeReducer'
	import rootReducer from '../reducers/index'
	import immutable from 'immutable';

	const combinedReducers = combineReducers({
	    rootReducer,
	    routing: routerReducer
	})

	export default function configureStore() {
	    const store = createStore(
	        combinedReducers,
	        applyMiddleware(thunkMiddleware, createLogger)
	    )
	    return store
	}

	
	// 2. 如果使用react-router-redux 
	// ==================================================

	// routerReducer需要进行重构 完整代码如下 /reducers/routerReducer.js
	import immutable from 'immutable';
	import {
	  LOCATION_CHANGE
	} from 'react-router-redux';
	
	const initialState = immutable.fromJS({
	  locationBeforeTransitions: null
	});
	
	export default (state = initialState, action) => {
	  if (action.type === LOCATION_CHANGE) {
	    return state.set('locationBeforeTransitions', action.payload);
	  }
	
	  return state;
	};

	// 3.react-router-redux能够访问到挂载在全局 state 上的路由信息
	// ==========================================================
	
	// Container.jsx

	import React from 'react'
	import { Router, browserHistory } from 'react-router'
	import { Provider } from 'react-redux'
	import { syncHistoryWithStore } from 'react-router-redux'
	import Routes from '../routes.jsx'
	export default class Container extends React.Component {
	    render() {
	        const { store } = this.props
	        const history = syncHistoryWithStore(browserHistory, store, {
	            selectLocationState(state) {
	                return state.get('routing').toObject()
	            }
	        })
	
	        return (
	            <Provider store={store}>
	                <Router children={Routes} history={history}></Router>
	            </Provider>
	        )
	    }
	}
	



