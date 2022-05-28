import {API_ENDPOINTS} from 'api/apiEndpoint';
import http from 'api/http';

export const StandbyService = {
  list: () => {
    return (dispatch) => {
      //   dispatch(fetchStart());
      http
        .get(`http://3.35.106.187/api/board`)
        .then((res) => {
          console.log(res);
          //   dispatch(setWarehousingStandby(res.data.data));
          //   dispatch(setWarehousingStandbySummary(res.data.meta.count_widget));
          //   dispatch(fetchSuccess());
        })
        .catch((error) => {
          //   dispatch(fetchError(error.message));
        });
    };
  },
  createRecipe: () => {
    //     POST
    // {
    // title: "string"
    // category:"string"
    // quantity:"string"
    // cookTime: int (분 기준)
    // ingredient: {재료:양}
    // process: ["string"]
    // processImages: [FILE]
    // completeImages: [FILE]
    // user:USER
    // }
    http
      .post('http://3.35.106.187/api/board', {
        // title: 'string',
        // category:"string"
        // quantity:"string"
        // cookTime: int (분 기준)
        // ingredient: {재료:양}
        // process: ["string"]
        // processImages: [FILE]
        // completeImages: [FILE]
        // user:USER
      })
      .then((res) => {
        console.log(res);
      });
  },
};
