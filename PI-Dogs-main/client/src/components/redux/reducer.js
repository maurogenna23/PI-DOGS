import {
  GET_ALL_DOGS,
  GET_BY_NAME,
  GET_BY_DETAIL,
  GET_ALL_TEMPS,
  CREATE_DOG,
  FILTER_ORIGIN,
  FILTER_TEMPS,
  SET_CURRENT_PAGE,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "./action-types";

const initialState = {
  allDogs: [],
  posts: [],
  dogsCopy: [],
  temperaments: [],
  filterTemper: [],
  orderWeight: [],
  filterOrigin: [],
  currentPage: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
        dogsCopy: payload,
        filterTemper: payload,
        orderWeight: payload,
        filterOrigin: payload,
      };

    case GET_BY_NAME:
    case GET_BY_DETAIL:
      return {
        ...state,
        allDogs: payload,
      };

    case GET_ALL_TEMPS:
      return {
        ...state,
        temperaments: payload,
      };

      case ORDER_BY_NAME:
        let orderName = [...state.dogsCopy];
      
        if (payload === "a-z") {
          orderName = orderName.sort((a, b) => a.name.localeCompare(b.name));
        } else if (payload === "z-a") {
          orderName = orderName.sort((a, b) => b.name.localeCompare(a.name));
        }
      
        return {
          ...state,
          allDogs: orderName,
      };
      
      case ORDER_BY_WEIGHT:
        let aux = [...state.orderWeight];
      
        if (payload === "Descendente") {
          aux = aux.sort((a, b) => {
            const weightA = a.weight.imperial ? parseFloat(a.weight.imperial.split(" - ")[0]) : 0;
            const weightB = b.weight.imperial ? parseFloat(b.weight.imperial.split(" - ")[0]) : 0;
            return weightA - weightB;
          });
        } else if (payload === "Ascendente") {
          aux = aux.sort((a, b) => {
            const weightA = a.weight.imperial ? parseFloat(a.weight.imperial.split(" - ")[1]) : 0;
            const weightB = b.weight.imperial ? parseFloat(b.weight.imperial.split(" - ")[1]) : 0;
            return weightB - weightA;
          });
        }
      
        return {
          ...state,
          allDogs: aux,
      };
      
      case FILTER_ORIGIN:
        let filteredDogs = [];
      
        if (payload === "All") {
          filteredDogs = state.filterOrigin;
        } else if (payload === "api") {
          filteredDogs = state.allDogs.filter(dog => dog.origin === 'api');
        } else if (payload === "fromDb") {
          filteredDogs = state.filterOrigin.filter(dog => dog.origin !== 'api');
        }
      
        return {
          ...state,
          allDogs: filteredDogs,
      };
      
      case FILTER_TEMPS:
        const filterTemps =
          payload === "all"
            ? state.filterTemper
            : state.filterTemper?.filter((dog) => dog.temperament?.split(", ").includes(payload));
      
        return {
          ...state,
          allDogs: filterTemps,
      };
      
    
    // case GET_DOG_FROM_DB:{
    //   return {
    //   ...state,
    //     allDogs: payload
    //   }
    // }

    case CREATE_DOG:
      return {
        ...state,
        allDogs: [...payload],
        posts: [...payload]
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload

      }
      default:
       return state;
    }
   }


export default reducer;