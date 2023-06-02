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
  ORDER_BY_HEIGHT,
} from "./action-types";

const initialState = {
  allDogs: [],
  allDogsCopy: [],
  posts: [],
  orderName: [],
  temperaments: [],
  filterTemper: [],
  orderWeight: [],
  orderHeight: [],
  filterOrigin: [],
  currentPage: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
        allDogsCopy:payload,
        orderName: payload,
        filterTemper: payload,
        orderWeight: payload,
        filterOrigin: payload,
        orderHeight: payload
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
        let orderName = [...state.orderName];
      
        if (payload === "a-z") {
          orderName = orderName.sort((a, b) => a.name.localeCompare(b.name)); //El método sort() recibe una función de comparación que utiliza el método localeCompare() 
                                                                              //para comparar los nombres de los perros (a.name y b.name)
        } else if (payload === "z-a") {
          orderName = orderName.sort((a, b) => b.name.localeCompare(a.name));
        }
      
        return {
          ...state,
          allDogs: orderName,
          filterTemps: orderName,
          orderWeight: orderName,
          filterOrigin: orderName,
          orderHeight: orderName
      };
      
      case ORDER_BY_WEIGHT:
        let aux = [...state.orderWeight];

        if (payload === "All") {
          aux = [...state.allDogsCopy];
        } 

        if (payload === "Descendente") {
          aux = aux.sort((a, b) => {
            const weightA = a.promedioWeight;
            const weightB = b.promedioWeight;
            return weightA - weightB;
          });
        } else if (payload === "Ascendente") {
          aux = aux.sort((a, b) => {
            const weightA = a.promedioWeight;
            const weightB = b.promedioWeight;
            return weightB - weightA;
          });
        }

        return {
          ...state,
          allDogs: aux,
          filterTemper: aux,
          orderName: aux,
          filterOrigin: aux,
          orderHeight: aux
        };

        case ORDER_BY_HEIGHT:
        let auxHeight = [...state.orderHeight];

        if (payload === "All") {
          auxHeight = [...state.allDogsCopy];
        } 

        if (payload === "Desc") {
          auxHeight = auxHeight.sort((a, b) => {
            const heightA = a.promedioHeight;
            const heightB = b.promedioHeight;
            return heightA - heightB;
          });
        } else if (payload === "Asc") {
          auxHeight = auxHeight.sort((a, b) => {
            const heightA = a.promedioHeight;
            const heightB = b.promedioHeight;
            return heightB - heightA;
          });
        }

        return {
          ...state,
          allDogs: auxHeight,
          filterTemper: auxHeight,
          orderName: auxHeight,
          filterOrigin: auxHeight,
          orderWeight: auxHeight
        };

      
      case FILTER_ORIGIN:
        let filteredDogs = [];
      
        if (payload === "All") {
          filteredDogs = state.allDogsCopy;
        } else if (payload === "api") {
          filteredDogs = state.filterOrigin.filter(dog => dog.origin === 'api');
        } else if (payload === "fromDb") {
          filteredDogs = state.filterOrigin.filter(dog => dog.origin !== 'api');
        }
      
        return {
          ...state,
          allDogs: filteredDogs,
          filterTemper: filteredDogs,
          orderWeight: filteredDogs,
          orderName: filteredDogs,
          orderHeight: filteredDogs
      };
      
      case FILTER_TEMPS:
        const filterTemps =
          payload === "all"
            ? state.allDogsCopy
            : state.filterTemper?.filter((dog) => dog.temperament?.split(", ").includes(payload));
      
        return {
          ...state,
          allDogs: filterTemps,
          orderWeight: filterTemps,
          filterOrigin: filterTemps,
          orderName: filterTemps,
          orderHeight: filterTemps
      };

    case CREATE_DOG:
      return {
        ...state,
        allDogs: [...payload],
        posts: [...payload]
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,

      }
      default:
       return state;
    }
   }


export default reducer;