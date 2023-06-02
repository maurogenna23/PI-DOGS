import { GET_ALL_DOGS, GET_BY_NAME, GET_BY_DETAIL, GET_ALL_TEMPS, FILTER_ORIGIN , CREATE_DOG, FILTER_TEMPS, SET_CURRENT_PAGE, ORDER_BY_NAME, ORDER_BY_WEIGHT, ORDER_BY_HEIGHT } from "./action-types";
import axios from "axios"; 

export const getDogs = () => {
    const endpoint = "http://localhost:3001/dogs"
    return async (dispatch) => {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_ALL_DOGS,
                payload: data
            });
    }
}

export const getByName = (name) => {
    const endpoint = `http://localhost:3001/dogs/?name=${name}`

    return async (dispatch) => {
        try{

        const { data } = await axios.get(endpoint);
        return dispatch({
            type: GET_BY_NAME,
            payload: data
        });
    }
        catch (error){
            console.log(error)
            window.alert(error.response.data)
        }
    }
}

export const getByDetail = (id) =>{
    const endpoint = `http://localhost:3001/dogs/${id}`
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: GET_BY_DETAIL,
            payload: data
        });
    }
}

export const filterOrigin = (payload) =>{
    return {
        type : FILTER_ORIGIN,
        payload 
    }
        
}

export const filterTemps = (temperaments) =>{
    return {
        type : FILTER_TEMPS,
        payload : temperaments
    }
}

export const getAllTemps = () =>{
    const  endpoint = `http://localhost:3001/temperaments`
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        console.log(data)
                return dispatch({
                    type: GET_ALL_TEMPS,
                    payload: data
                });
            }
        }

        export const createNewDog = (dogData) => {
            const endpoint = "http://localhost:3001/db";
            return async (dispatch) => {
              try {
                const response = await axios.post(endpoint, dogData, {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
                const { data } = response;
                window.alert(data);
                dispatch({
                  type: CREATE_DOG,
                  payload: data
                });
              } catch (error) {
                window.alert(error.response.data)
              }
            };
          };  
          

export const orderByName= (payload)=> {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export const orderByWeight= (payload)=> {
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}

export const orderByHeight= (payload)=> {
    return {
        type: ORDER_BY_HEIGHT,
        payload
    }
}

export const setCurrentPage= (payload)=> {
    return {
        type: SET_CURRENT_PAGE,
        payload
    }
}