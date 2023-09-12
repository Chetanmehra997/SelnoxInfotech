import axios from 'axios';

const API_URL = "https://sweede.app/DeliveryBoy/";


export const addfamilymenu = (value) => {
    return axios.post(API_URL + "Add-Employee/", value );
}

export const updatefilmy = (id,value) => {
    return axios.post(API_URL + `update-Employee/${id}`,value );
   }

   export const deletefamily = (id,value) => {
    return axios.delete(API_URL + `delete-Employee/${id}`,value );
   }

