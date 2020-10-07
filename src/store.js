import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //Variación de redux que permite trabajar funciones asincronas
import reducer from './reducers'; //como el archivo se llama index.js no es necesario colocar /index

/* Maneja el state de toda la aplicación
esta es la nueva implementación que funciona apartir de recat 7 */

const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk), //"applyMiddleware" Permite agregar un middleware
    //Validación para que funcione cuando tenemos redux devtool y cuando no se tebga tambienx
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f //Para que detecte que se esta usando redux
    )
);

export default store;