import {
  POST_DATA_BEGIN,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL,
} from "../action/type";

const initialState = {
  listData: [],
  loading: false,
  error: null,
};

const postData = (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case POST_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        listData: payload,
        loading: false,
        error: null,
      };
    case POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
      };
    default:
      return state;
  }
};

export default postData