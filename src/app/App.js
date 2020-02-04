import React, {Component} from 'react';
import {createGenerateClassName, jssPreset} from '@material-ui/core';
import {FuseAuthorization, FuseLayout, FuseTheme} from '@fuse';
import JssProvider from 'react-jss/lib/JssProvider';
import Provider from 'react-redux/es/components/Provider';
import {Router} from 'react-router-dom';
import {create} from 'jss';
import jssExtend from 'jss-extend';
import history from '../history';
import {Auth} from './auth';
import store from './store';
import AppContext from './AppContext';
import routes from './fuse-configs/routesConfig';

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();


class App extends Component{
    
    componentWillMount(){
        const user = sessionStorage.getItem("user");
        //fait le test, si user a des données.
        if((user===null || user===undefined || user==="")){
            history.push("/login");
        }
        //sauegarder les données de luser dans le store
        store.dispatch({
            type   : 'SET_USER_DATA',
            payload: user
        });
    }

    render(){

        return (
            <AppContext.Provider
             
                value={{
                    routes
                 }}
            >
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <Provider store={store}>  
                        <Auth>          
                            <Router history={history}>                       
                                 <FuseAuthorization>
                                    <FuseTheme>
                                        <FuseLayout/>
                                    </FuseTheme>
                                  </FuseAuthorization>
                            </Router>
                        </Auth>   
                    </Provider>
                </JssProvider>
            </AppContext.Provider>
        );
    }
};

export default App;