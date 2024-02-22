const SERVER_PORT = (() => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return '3001';  
    default:
      return process.env.PORT || '3001';
  }
})();

const domain = process.env.PUBLIC_URL || 'localhost';

const SERVER_URL = (() => {
  console.log('ENV = ', process.env)
  switch(process.env.NODE_ENV) {
    case 'development':
      return `${domain}:${SERVER_PORT}`;  
    default:
      return `${domain}:${SERVER_PORT}`;
  }
})();

export {
  SERVER_PORT,
  SERVER_URL,
}