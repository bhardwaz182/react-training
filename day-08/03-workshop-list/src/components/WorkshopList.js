import React from 'react';
//import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';

import {
    loadWorkshopsThunk,
    WORKSHOPS_LIST_LOADING,
    WORKSHOPS_LIST_LOADED,
    WORKSHOPS_LIST_ERROR_LOADING
} from '../actions';

import {getWorkshops} from '../reducers/workshops';

function WorkshopsList() {
    
    const dispatch = useDispatch();
    const { status, workshops, error } = useSelector(getWorkshops);
    
    React.useEffect(() => {
        dispatch(loadWorkshopsThunk());
    }, [ ]);

    let el;

    switch( status ) {
        case WORKSHOPS_LIST_LOADING:
            //console.log('loading');
            el = (
                <div>We are fetching workshops. Please wait</div>
            );
            break;
        case WORKSHOPS_LIST_LOADED:
            el = (
                <ul>
                {
                    workshops.map( workshop => (
                        <li key={workshop.id}>{workshop.name}</li>
                    ))
                }
                </ul>
            );
            break;
        case WORKSHOPS_LIST_ERROR_LOADING:
            el = (
                <div>{error.message}</div>
            );
            break;
        default: 
            el = null;
    }

    return el;
}

WorkshopsList.LOADING = 'LOADING';
WorkshopsList.LOADED = 'LOADED';
WorkshopsList.ERROR_LOADING = 'ERROR_LOADING';

export default WorkshopsList;