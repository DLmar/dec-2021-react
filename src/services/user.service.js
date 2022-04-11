import {axiosService} from "./axios.service";
import {urls} from '../configs/urls';

export const userService = {
    getUser: () => axiosService.get(urls.users).then(value => value.data)
}
