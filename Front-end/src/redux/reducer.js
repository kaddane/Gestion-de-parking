







// import * as type from './type'

// const initState = { admin: [], modeles: [], parking: [], reservation: [], loading: false, erreur: "", login: false }


// export function parkingReducer(state = initState, action) {
//     switch (action.type) {

// // --------------------------------  admin  ------------------------------

//         case type.FETCH_ADMIN_REQUEST:
//             return { ...state, loading: true }
//         case type.FETCH_ADMIN_SUCCESS:
//             return { ...state, admin: action.payload, loading: false, erreur: "" }
//         case type.FETCH_ADMIN_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }
//         case type.UPDATE_ADMIN_SUCCESS:
//             return {
//                 ...state, admin: state.admin.map(adm => {
//                     if (adm.idAdmin === action.payload.idAdmin) {
//                         return ({
//                             ...adm,
//                             nameA: action.payload.nameA,
//                             lastnameA: action.payload.lastnameA,
//                             emailA: action.payload.emailA,
//                             passwordA: action.payload.passwordA
//                         })
//                     } else { return adm }
//                 })
//             }
//         case type.UPDATE_ADMIN_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }


// // --------------------------------  modeles  ------------------------------


//         case type.FETCH_MODELES_REQUEST:
//             return { ...state, loading: true }
//         case type.FETCH_MODELES_SUCCESS:
//             return { ...state, modeles: action.payload, loading: false, erreur: "" }
//         case type.FETCH_MODELES_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }


// // --------------------------------  parking  ------------------------------


//         case type.FETCH_PARKING_REQUEST:
//             return { ...state, loading: true }
//         case type.FETCH_PARKING_SUCCESS:
//             return { ...state, parking: action.payload, loading: false, erreur: "" }
//         case type.FETCH_PARKING_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }
//         case type.POST_PARKING_SUCCESS:
//             return { ...state, parking: [...state.parking, action.payload] }
//         case type.POST_PARKING_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }
//         case type.DELETE_PARKING_SUCCESS:
//             return { ...state, parking: state.parking.filter(park => park.idpark !== action.payload) }
//         case type.DELETE_PARKING_FAILURE:
//             return { ...state, erreur: action.payload,  loading: false}

//         case type.UPDATE_PARKING_SUCCESS:
//             return {
//                 ...state, parking: state.parking.map(park => {
//                     if (park.idpark === action.payload.idpark) {
//                         return ({
//                             ...park,
//                             nameP: action.payload.nameP,
//                             addressP: action.payload.addressP,
//                             placeP: action.payload.placeP
//                         })
//                     } else { return park }
//                 })
//             }
//         case type.UPDATE_PARKING_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }


// // --------------------------------  reservation  ------------------------------


//         case type.FETCH_RESERVATION_REQUEST:
//             return { ...state, loading: true }
//         case type.FETCH_RESERVATION_SUCCESS:
//             return { ...state, reservation: action.payload, loading: false, erreur: "" }
//         case type.FETCH_RESERVATION_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }
//         case type.POST_RESERVATION_SUCCESS:
//             return { ...state, reservation: [...state.reservation, action.payload] }
//         case type.POST_RESERVATION_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }
//         case type.DELETE_RESERVATION_SUCCESS:
//             return { ...state, reservation: state.reservation.filter(re => re.idR !== action.payload) }
//         case type.DELETE_RESERVATION_FAILURE:
//             return { ...state, erreur: action.payload,  loading: false}

//         case type.UPDATE_RESERVATION_SUCCESS:
//             return {
//                 ...state, reservation: state.reservation.map(re => {
//                     if (re.idR === action.payload.idR) {
//                         return ({
//                             ...re,
//                             moduleCar: action.payload.moduleCar,
//                             dateR: action.payload.dateR,
//                             matreculeCar: action.payload.matreculeCar,
//                             num_place: action.payload.num_place
//                         })
//                     } else { return re }
//                 })
//             }
//         case type.UPDATE_RESERVATION_FAILURE:
//             return { ...state, erreur: action.payload, loading: false }
//         default:
//             return state;
//     }

// }





