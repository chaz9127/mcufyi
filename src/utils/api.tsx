import { SERVER_URL } from '../constants/server';
import { APIMethod } from '../types';

const apiCall = async (url: string, params?: APIMethod) => {
  const betterParams = {
    method: params?.method || 'get',
  }
  console.log('params=', betterParams)
  if (betterParams?.method === 'get') {
    return await (await fetch(`http://${SERVER_URL}${url}`, betterParams)).json();
  } else if (betterParams?.method === 'delete') {
    return await (await fetch(`http://${SERVER_URL}${url}`, betterParams)).json();
  }
};

export {
  apiCall,
}