

// import axios from 'axios'
// import * as type from './type'
    
// hdhfdhfh


// // ---------------------- admin -------------------------

// export function fetchAdmin() {
//     return function (dispatch, getState) {
//         dispatch({ type: type.FETCH_ADMIN_REQUEST })
        

//         axios.get("http://localhost:3500/admin")
//             .then(res => dispatch({ type: type.FETCH_ADMIN_SUCCESS, payload: res.data }))
//             .catch(err => dispatch({ type: type.FETCH_ADMIN_FAILURE, payload: err.message }))
//     }
// }


// export function updateAdmin(admin) {

//     return function (dispatch, getState) {
//         axios.patch(`http://localhost:3500/admin/${admin.id}`, admin)
//             .then(res => dispatch({ type: type.UPDATE_ADMIN_SUCCESS, payload: admin }))
//             .catch(err => dispatch({ type: type.UPDATE_ADMIN_FAILURE, payload: err.message }))
//     }
// }



// // ---------------------- modeles -------------------------



// export function fetchModeles() {
//     return function (dispatch, getState) {
//         dispatch({ type: type.FETCH_MODELES_REQUEST })

//         fetch('http://localhost:3500/modeles')
//             .then(res => res.json())
//             .then(data => dispatch({ type: type.FETCH_MODELES_SUCCESS, payload: data.data }))
//             .catch(err => dispatch({ type: type.FETCH_MODELES_FAILURE, payload: err.message }))
//     }
// }


// // ---------------------- parking -------------------------


// export function fetchParking() {
//     return function (dispatch, getState) {
//         dispatch({ type: type.FETCH_MODELES_REQUEST })

//         fetch('http://localhost:3500/parkign')
//             .then(res => res.json())
//             .then(data => dispatch({ type: type.FETCH_PARKING_SUCCESS, payload: data.data }))
//             .catch(err => dispatch({ type: type.FETCH_PARKING_FAILURE, payload: err.message }))
//     }
// }


// export function postParking(parking) {
//     return function (dispatch, getState) {
//         axios.post('http://localhost:3500/parkign', parking)
//             .then(res => dispatch({ type: type.POST_PARKING_SUCCESS, payload: parking }))
//             .catch(res => dispatch({ type: type.POST_PARKING_FAILURE, payload: res.message }))

//     }
// }


// export function deleteParking(idpark) {
//     return function (dispatch, getState) {
//         axios.delete(`http://localhost:3500/parkign/${idpark}`)
//             .then(res => dispatch({ type: type.DELETE_PARKING_SUCCESS, payload: idpark }))
//             .catch(err => dispatch({ type: type.DELETE_PARKING_FAILURE, payload: err.message }))
//     }
// }

// export function updateParking(parkign) {
//     return function (dispatch, getState) {
//         axios.patch(`http://localhost:3500/parkign/${parkign.id}`, parkign)
//             .then(res => dispatch({ type: type.UPDATE_PARKING_SUCCESS, payload: parkign }))
//             .catch(err => dispatch({ type: type.UPDATE_PARKING_FAILURE, payload: err.message }))
//     }
// }


// // ---------------------- reservation -------------------------


// export function fetchReservation() {
//     return function (dispatch, getState) {
//         dispatch({ type: type.FETCH_RESERVATION_REQUEST })

//         fetch('http://localhost:3500/reservation')
//             .then(res => res.json())
//             .then(data => dispatch({ type: type.FETCH_RESERVATION_SUCCESS, payload: data.data }))
//             .catch(err => dispatch({ type: type.FETCH_RESERVATION_FAILURE, payload: err.message }))
//     }
// }


// export function postReservation(reservation) {
//     return function (dispatch, getState) {

//         axios.post('http://localhost:3500/reservation', reservation)
//             .then(res => dispatch({ type: type.POST_RESERVATION_SUCCESS, payload: reservation }))
//             .catch(res => dispatch({ type: type.POST_RESERVATION_FAILURE, payload: res.message }))

//     }
// }


// export function deleteReservation(idR) {
//     return function (dispatch, getState) {
//         axios.delete(`http://localhost:3500/reservation/${idR}`)
//             .then(res => dispatch({ type: type.DELETE_RESERVATION_SUCCESS, payload: idR }))
//             .catch(err => dispatch({ type: type.DELETE_RESERVATION_FAILURE, payload: err.message }))
//     }
// }

// export function updateReservation(reservation) {
//     return function (dispatch, getState) {
//         axios.patch(`http://localhost:3500/reservation/${reservation.idR}`, reservation)
//             .then(res => dispatch({ type: type.UPDATE_RESERVATION_SUCCESS, payload: reservation }))
//             .catch(err => dispatch({ type: type.UPDATE_RESERVATION_FAILURE, payload: err.message }))
//     }
// }









