import axiosService from '../apiServices/axiosSevice';
import { API_ENDPOINT } from '../constants/constants';

const url = 'todoLists';

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}

