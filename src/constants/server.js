const SERVER_PORT = (() => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return '3001';  
    default:
      return '3001';
  }
})();

const SERVER_URL = (() => {
  console.log('ENV = ', process.env)
  switch(process.env.NODE_ENV) {
    case 'development':
      return `https://mcu-fyi-27c1f9e48aa7.herokuapp.com:${SERVER_PORT}`;  
    default:
      return `https://mcu-fyi-27c1f9e48aa7.herokuapp.com:${SERVER_PORT}`;
  }
})();

export {
  SERVER_PORT,
  SERVER_URL,
}