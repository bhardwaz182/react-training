//import React, { Component } from 'react';
import UserFormPresentation from '../components/UserForm';
//import store from '../store';
import { updateUsername } from '../actions/creators';


import {connect} from 'react-redux';

function mapStateToProps(state){
    return{
        username:state.form.username
    }
}

function mapDispatchToProps(dispatch){
    return{
        updateUsername(value){
            dispatch(updateUsername( value ));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(UserFormPresentation);

// export default class FormContainer extends Component {
//     updateUsername = ( username ) => {
//         store.dispatch( updateUsername( username ) );
//     }
    
//     render() {
//         return (
//             <UserFormPresentation
//                 username={store.getState().form.username}
//                 updateUsername={this.updateUsername} />
//         )
//     }

//     componentDidMount() {
//         store.subscribe( () => this.forceUpdate() );
//     }
// }