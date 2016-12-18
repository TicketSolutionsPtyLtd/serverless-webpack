export const hello = (event, context, callback) => {
  callback(null, {
    message: 'Go Serverless Webpack (Babel) v2.0! Your function executed successfully!',
    event,
  })
};
