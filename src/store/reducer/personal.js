import {
  GET_PERSONAL_BEGIN,
  GET_PERSONAL_SUCCESS,
  GET_PERSONAL_FAIL,
  GET_DETAIL_BEGIN,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAIL,
} from "../action/type";

const initalState = {
  listData: {
    personal: [],
    loading: false,
    error: null,
  },
  detailData: {
    detailpersonal: [],
    loading: false,
    error: null,
  },
};

const dataPersonal = (state = initalState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_PERSONAL_BEGIN:
      return {
        listData: {
          ...state,
          loading: true,
        },
      };
    case GET_PERSONAL_SUCCESS:
      return {
        listData: {
          ...state,
          personal: payload,
          loading: false,
          error: null,
        },
      };
    case GET_PERSONAL_FAIL:
      return {
        listData: {
          ...state,
          loading: false,
          error: error,
        },
      };
    case GET_DETAIL_BEGIN:
      return {
        detailData: {
          ...state,
          loading: true,
          error: null,
        },
      };
    case GET_DETAIL_SUCCESS:
      return {
        detailData: {
          ...state,
          detailpersonal: payload,
          loading: false,
          error: null,
        },
      };
    case GET_DETAIL_FAIL:
      return {
        detailData: {
          ...state,
          loading: false,
          error: error,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default dataPersonal;
