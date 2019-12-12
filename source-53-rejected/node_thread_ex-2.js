//: main.js
import { Worker, MessageChannel } from 'worker_threads'
import path from 'path'  //: __dirname

const worker_c = new Worker( path.join( __dirname, 'worker.js' ) )
const { mainPort_o, workerPort_o } = new MessageChannel()

mainPort_o.on( 'message', msg_s =>
{
 console.log( `message from worker: ${msg_s}` )
} )
worker_c.postMessage( { port: workerPort_o }, [workerPort_o] )


//: worker.js
import { parentPort, MessagePort } from 'worker_threads'
parentPort.on( 'message', data =>
{
//const { port }: { port: MessagePort } = data
const { port: MessagePort } = data
port.postMessage('heres your message!')
})