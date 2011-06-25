#/bin/sh
cd third/node/
redis-server&disown
node server.js&disown

