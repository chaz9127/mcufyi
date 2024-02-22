const SERVER_PORT = (() => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return process.env.PORT;  
    default:
      return process.env.PORT;
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