# CRUD-VUE3-EXPRESS-MARIADB
This project is exactly what its name says, a CRUD implemented using Vue 3,
an ExpressJS server and MariaDB. All of this 'components' are loosely coupled
and they can be built separetely.

Actually, there's a Dockerfile in each component that you can use to run in its
own container. Or you can compose them using ```docker-compose```.

## Using with docker-compose
Run in the terminal
```
docker-compose up
```

## Build them individually
Go to an individuall component, such as [api](/api/), [db](/db/) or
[frontend](/frontend/), and run:
```
./docker-build.sh
```
to build an image.

An then run:
```
./docker-run.sh
```
to run the container.

This scripts were created to help test each container individually,
rather than run all of them with ```docker-compose```. Sometimes,
I prefered to run the `db` container, while the `frontend` and the
`api` were running in my host machine.

## What's still missing
- Store user session using cookies
- Unit tests
- Proper authentication
- Delete and update a user through the frontend
- Show errors in the signup and login pages