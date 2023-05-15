import axios from "axios";

const Api = "https://crudcrud.com/api/af44a67ccfeb4dd8833c151feb763e67";

export const RegistrationUser = (data) => {
    return axios.post(url `${Api} list`, data)
}