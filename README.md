## CONTENT
1. How to build and run 
2. Description how app works
3. Assumptions and design decisions
4. Known constraints and/or limits
5. Possible improvements
6. Considaration of work that would be needed to productionize your code


## 1. How to build and run

To run the frontend-scout24 React App you have the following
options: 
- Docker-Compose (pulls both images from docker hub and starts)
- Docker Container (need to start frontend and backend)
- npm start (need to start frontend and backend)

Before starting with next steps first extract the provided zip file
or use the Docker-Compose file (get in email). 

### Docker-Compose

Use the docker-compose file provided in email and execute the following command: 
### ` docker-compose -up -d`
As you can see in the docker-compose file, the port on which you can access 
the React WebApp is 8080

- "8080:3000"

### Docker Container

In the project directory (!), you execute the following 2 commands:
### 1 ` docker build -t frontend-scout24 .`
If you are not in the directory use option -f with file path. Like: 
docker build -f  <Dockerfile Path and Name> -t frontend-scout24
Do not forget "." at the end.

### 2` docker run -it -p 8080:3000 --rm  frontend-scout:latest`
You can now go to `localhost:8080' but you need still need to start 
the Backend Container. If not yet done start Docker Container and 
refresh website. 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the App in the browser.


## 2. Description how app works

(1) On Starting Backend (Nodejs - JS ) the targetlist.csv will be imported and stored in the in-memory db.
The import runs directly with the start to make sure the targetlist items are stored 
when the frontend request for them.

(2) The geodata (long/lat) are requested from google. To ensure that the requests to google
are only made to the extent necessary, they are carried out in the backend and stored in the in-memory DB.  

(3) Frontend has no logic or data other than that provided by the backend.

(4) For clarity and reduction of redundancies Redux is used in the frontend.

(5) For the visualization of the geodata google map is used. 


## 3. Assumptions and design decisions (FRONTEND)
In the following only the essential program parts are explained

###STATE Handling: Redux: 
Redux enables clear and structured process flows. The initial additional effort
for initialization is quickly compensated for when the same data is used in 
different places.

### TABLE: Material-UI
The visualization of the data in the form of a table is implemented with the 
components of Material-UI. With the use of the individual components, 
the visualization can be done flexibly. 

### MAP: npm google-map-react
The external library is currently being maintained, the error messages 
(over 700) have already been processed (status: closed). 
Furthermore, the number of weekly downloads is over 100 thousand.

## 4. Known constraints and/or limits
Error handling might not be sufficient for all error possibilities.

##5. Possible improvements
To improve the core functionalities, the expansion of error 
handling and test procedures is useful.

##6. Considaration of work that would be needed to productionize your code
After extending the error handling and test procedures already mentioned,
especially in the context of a CI process, the next step would be to
evaluate the scaling of the application. The first steps have been taken
for the productive and scalable use of the application. 
The application can be run as a Docker container.