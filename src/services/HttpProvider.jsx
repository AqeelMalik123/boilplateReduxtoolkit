import axios from 'axios';
export const BASEURL = "https://api.github.com";

// to access token
export const getToken = () =>
  localStorage.getItem('token') ? localStorage.getItem('token') : null;

// set api header
export async function getApiRequestHeader() {
  return {
    Accept: 'application/json',
    // Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Credentials': true
    // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
    // 'Content-Type': 'application/json'
  };
}
const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60000,
  // withCredentials: true,
});

export async function updateHeaders() {
  const header = await getApiRequestHeader();

  instance.defaults.headers = header;
  // axios.defaults.withCredentials = true;
}

export async function request({ method, url, data, headers }) {
  // if (headers === undefined) {
  //   await updateHeaders();
  // }

  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    if (error.response) {
    } else {
    }
    throw error.response;
  }

  return response;
}

export async function newRequest({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;

  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }

  if (
    response?.data?.status
      ? response.status.toString().indexOf('2') !== 0
      : response.data.status.toString().indexOf('2') !== 0
  ) {
    throw { response };
  } else {
    return response.data;
  }
}

export async function get(url, params, featureAndAction, config) {
  for (var key in params) {
    url = url + '' + params[key];
  }
  return request({ method: 'get', url, data: { featureAndAction }, ...config });
}

export async function del(url, params, config) {
  return request({ method: 'delete', url, data: { params }, ...config });
}

export async function post(url, data, featureAndAction, config) {
  return request({ method: 'post', url, data, ...config });
}

export async function put(url, data, config) {
  return newRequest({ method: 'put', url, data, ...config });
}
export async function patch(url, data, config) {
  return newRequest({ method: 'patch', url, data, ...config });
}
export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};
