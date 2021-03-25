// EXERCISE: Break this into presentation and container components and let me presentation component receive the required state data and the required function(s) to dispatch action(s) as props
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {updateUsername} from '../actions/creators';

import { selectUsername } from '../reducers/form';


function UserForm (){
    
    const dispatch = useDispatch();
    const username = useSelector( selectUsername );

        return (
            <React.Fragment>
                <input type="text" name="username" onChange={( event ) => dispatch(updateUsername( event.target.value ))} value={username} />
                {username}
            </React.Fragment>
        );
    
}

export default UserForm;