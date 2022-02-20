import { serverHttp } from './http';
import './websocket';
serverHttp.listen(process.env.PORT, () =>
  console.log('server on running port: ' + process.env.PORT),
);
