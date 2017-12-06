# socket.io-lb-issue-solution
Socket.io load balancing with Nginx Zero to Hero

## Stage 1

I started two instances in node js at server level.
 Problem Faced

* Every time nginx is taking my request of socket to alternate instance

* Socket connection is on first instace

* One instance is returning 200 and other 400 for a single user due to Round Robin


![Step 1 Issue](./images/Step-1-issue.png?raw=true "Step-1 Issue")


### Problem Diagram After Step One

![Step 1 Issue](./images/Step-1.jpg?raw=true "Step-1 ")


## Stage 2

Then we applied the ip_hash on nginx level

Problem Solved

* Now i have a sticky connection with the instance

* socket is working now

Problem Faced

* Connections are on different instances

* Not able to broadcast to other instance socket connections

* One to One Message only work if both the socket are on same connection



### Problem Diagram After Step One

![Step 1 Issue](./images/Step-2.jpg?raw=true "Step-2 ")

## Stage 3

Now we have Redis in the picture

we have to use a npm module socket.io-redis

```bash
npm install socket.io-redis --save
```

Add these line after io require and before io.connection

```bash
const redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));
```


Problem Solved

* now all the instances are Synced io.broadcast is working fine



## Final Arch

![Step 3 Diagram](./images/Step-3.jpg?raw=true "Step-2 ")









