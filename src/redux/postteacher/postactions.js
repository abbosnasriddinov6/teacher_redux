import { POST_DATA } from "./posttype";

export const postData = (data) => {
    return {
        type: POST_DATA,
        payload: data
    }
}