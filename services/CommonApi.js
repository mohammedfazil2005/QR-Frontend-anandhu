import axios from "axios";
import baseURL from "./baseUrl";

const commonApi = async (method, ednPoint, reqBody,reqHeader) => {
  const reqConfig = {
    method: method,
    url: baseURL + ednPoint,
    data: reqBody,
    headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
  };

  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};


export default  commonApi