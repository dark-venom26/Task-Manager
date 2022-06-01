
# Task Manager

This is a tasks managing app made by using MERN Stack.


## Backend Installation

Install Task Manager Backend with npm

```bash
  npm install
  npm install -g nodemon
  nodemon ./index.js
```
## Frontend Installation

Install Task Manager Frontend with npm

```bash
  cd task-manager
  npm install
  npm start
```
    
    
## API Reference

### User Authentication Api

#### Register user

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **(Required)** Your name |
| `password`| `string` | **(Required)** Your password|
| `email`| `email` | **(Required)** Your email|

#### Login user

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`| `email` | **(Required)** Your email|
| `password`| `string` | **(Required)** Your password|

### Task Api

#### Get all tasks

```http
  GET /api/task/timeline/all
  HEADER: auth-token <authToken>
```
#### Get task by Id

```http
  GET /api/task/:id
  HEADER: auth-token <authToken>

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **(Required)** Id of task to fetch |


#### Post task

```http
  POST /api/task/
  HEADER: auth-token <authToken>

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskname`      | `string` | **(Required)** Name of the task |

#### Update task

```http
  PUT /api/task/:id
  HEADER: auth-token <authToken>

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskname`      | `string` | **(Required)** Name of the task |

#### Delete task

```http
  DELETE /api/task/:id
  HEADER: auth-token <authToken>

```

## Screenshots

![Home Page](https://user-images.githubusercontent.com/92418471/171388291-3d0e1599-fedf-4a8f-9d1a-5b8ebf9d3fdf.jpg)

![Edit Page](https://user-images.githubusercontent.com/92418471/171388542-78ad798b-6256-48d4-a0a3-fda02011c964.jpg)

![Login Page](https://user-images.githubusercontent.com/92418471/171388680-8fed490e-4360-4225-8d9f-9ad4167e0f49.jpg)



## Authors

- [@dark-venom26](https://www.github.com/dark-venom26/)

