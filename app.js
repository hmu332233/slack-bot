const { WebClient, RTMClient, RTM_EVENTS } = require('@slack/client');
const token = '';

const web = new WebClient(token);
const rtm = new RTMClient(token);
rtm.start();

rtm.once('disconnected', () => rtm.start(options));

rtm.on('authenticated', (connectionData) => {
  console.log('RTMClient authenticated');
});

rtm.on('message', (event) => {
  console.log(event);
  // web.chat.postMessage({ channel, text, as_user: true, parse: 'full' })
  // .then((resp) => { /* success */ })
  // .catch((error) => {
  //   if (error.code === ErrorCode.PlatformError) {
  //     // a platform error occurred, `error.message` contains error information, `error.data` contains the entire resp
  //   } else {
  //     // some other error occurred
  //   }
  // });
})

