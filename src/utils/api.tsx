import { SERVER_URL } from '../constants/server';
import { APIMethod } from '../types';

const callApi = async (url: string, params?: APIMethod) => {

  const betterParams = {
    method: params?.method || 'get',
  }
  if (betterParams?.method === 'get') {
    console.log('===getting', SERVER_URL, url, process.env)
    return await (await fetch(`http://${SERVER_URL}${url}`, betterParams)).json();
  } else if (betterParams?.method === 'delete') {
    return await (await fetch(`http://${SERVER_URL}${url}`, betterParams)).json();
  }
};

export {
  callApi,
}