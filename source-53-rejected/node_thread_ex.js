const { Worker, isMainThread, parentPort } = require('worker_threads')
if ( isMainThread )    //: code executed in the main thread
{
  const worker_c = new Worker(__filename)
  worker_c.on( 'message', receive_o =>
  {
    if ( receive_o.type_s === 'one' ) console.log( receive_o.data_o.msg_s )
  } )
}
else    //: code executed in the worker
{
  const send_o =
  {
    type_s: 'one',
    data_o:
      {
        msg_s: 'Hello Coco!'
      },
    }
  parentPort.postMessage( send_o )
}
