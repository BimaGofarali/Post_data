import { GET_PERSONAL_BEGIN, GET_DETAIL_BEGIN } from "./type";

export const getPersonal = (id) => {
    return {
        type:GET_PERSONAL_BEGIN,
        id
    };
};

export const detailPersonal = (id) => {
    return {
        type: GET_DETAIL_BEGIN,
        id
    }
}
