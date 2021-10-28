# RESTFul_CRUD

This is a learning project aimed to build a Movie CRUD API with Node.js+Docker.

##  Requirements

Before Running this project be sure to have Docker installed in your workspace.

Try the following command in your terminal to check the current Docker version:

```shell
docker --version
Docker version 20.10.8, build 3967b7d
```
If the command is not found check the link bellow to install and set up Docker:
<a href="https://docs.docker.com/get-started/">Getting Started with Docker </a>

## How to run this app

After Cloning the repo use the following commands to start the container and the server:

```shell
docker build . -t movies/restful_crud
```

```shell
docker run -p49180:5000 -d movies/restful_crud
```

##  How to send Requests to the server:

###  Inserting a Movie

To insert a movie send a  HTTP POST request to localhost:49180/movies with the following JSON Body:

```shell
{
    "name":"Star Wars",
    "releaseDate":"05/1977",
    "productor":"George Lucas",
    "leadActor":"Harrison Ford",
    "studio":"20th Century Fox",
    "genre":"Sci-Fi"
}
```

Before inserting a movie to the database the server will attach an Unique ID randomly generated to the input movie.  

###  Returning all the Movies  

Send a HTTP GET request to localhost:49180/movies

###  Returning a selected movie

Send a HTTP GET request to localhost:49180/movies/:id (*)


###  Updating a movie

Send a HTTP PATCH request to localhost:49180/movies/:id (*)



###  Deleting a movie

Send a HTTP DELETE request to localhost:49180/movies/:id  (*)

(*)replace ``` :id ```  with a valid movie ID


