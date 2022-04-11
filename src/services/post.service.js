import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getPostsById: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`).then(value => value.data)
}
