
### <img src="https://static.vecteezy.com/system/resources/thumbnails/012/042/292/small/warning-sign-icon-transparent-background-free-png.png" width="30px"> This project is in development
# <img src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/97ydi7u98rwo0k00" width="40px" height="40px" > Pay  Links

## Figma fast prototype
https://github.com/david12997/pay-service/assets/51899338/22fad4c3-1eee-43a9-b097-9642b3e4a3e6

#  Live project here -> [paylinks.apps](https://paylinks.apps.aipus.co/)

### Paylinks is a fullstack application that allows you to use mercadopago payment gateway  to generate beautiful payment links for products and services, it also exposes an API that abstracts mercadpogo API and allows you to create transactions and payment links via http requests easely



## Table of Contents
1. [How to use](#how-to-use)
2. [UI Design](#ui-design)
3. [Architecture](#architecture)
4. [Frontend](#frontend)
5. [Backend](#backend)
6. [Database](#database)


## How to use 


 In order to use the the project you going to need a **production access token** from mercadopago, create a new mercadopago app to obtain the credencials [Create an app to generate your credenciales](https://www.mercadopago.com.co/developers/es)
  <img src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/i7qyqr92928ko0ww" width="100%" >

 Example mercadopago access token 
```http
 APP_USR-423452003488-110815-a8d5233da5263ccaec4dffd9352274
```
<br></br>

 <img  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" width="30px" height="30px" >To deploy this project you will need to use docker and docker compose

1. Clone the project

```bash
  git clone https://github.com/david12997/pay-service.git
```

2. Replace .env.exampe with .env and fill in environment variables

```bash
  cp .env.exampe .env
```
```bash
  nano  .env
```

3. Create de fullstack app image building the project root Dockerfile

```bash
  docker build -t pay-service:v0.0.1 . 
```

4. Run docker compose services 

```bash
  docker-compose up 
```

5. Go to [localhost:3001](http://localhot:3001) and enjoy it

6. If you already have a database, just create the database describe in **create.database.sql***


## UI Design
To design and prototype the application I use figma.
##### Link figma design: [figma.link](https://www.figma.com/file/SWetoonCcVGLVFy6Bqtmch/Untitled?type=design&node-id=0%3A1&mode=design&t=R0f93AHU0nd1i8W5-1)

<img width="100%" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/imwv47bo0tcggwo0">
<img width="100%" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/elwziqo8bg0sw44w">


## Architecture

#### Use Case Diagram
[![N|Solid](https://pay-service-cms.aipus.co/aipus-pay-service/assets/otl43bvpweockw4w)](https://pay-service-cms.aipus.co/aipus-pay-service/assets/otl43bvpweockw4w)



## Frontend
Single Page aplication developed using i React - Typescript -Tailwind

 Run the command inside the frontend folder to develop the app

```bash
  npm run dev
```

 Run the command inside the frontend folder to build the app

```bash
  npm run build
```

<p style="color:red;font-size:13px">*Be careful when editing the routes, remember that Express is serving the frontend application. If you modify the front-end routes in the React application, you also need to modify the Express router applications for the React application.</p>




## Backend

#### API Reference  [paylinks.apps.api.docs](https://paylinks.apps.aipus.co/api-docs/)


**Provider accepted**
| Provider | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `mercadopago` | `string` | the key **mercadopago** references to provider and payment_adapter


**adapter_type accepted**
| Provider | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `checkout pro` | `string` | the key **checkpout pro** allow you to select this solution to use
| `checkout api` | `string` | the key **checkpout api** allow you to select this solution to use





<br></br>

##### Create an account

```http
  POST /api/v1/user/sign-up
```

| Body parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status` | `string` |  this property is a string you can choose to handle whatever you need required
| `owner` | `number` |  this property refers to  a superadmin created at first deployment required
| `name` | `string` |  string required
| `email` | `string` |  id payment service provaideremal required
| `phone` | `number` |  number required
| `password` | `string` |  string rquired
| `nit` | `number` |  legal id to the user, this is not required to create an account

<br></br>

#### Login to the account

##### Authentication 
Authentication is based on jwt,when you make a success request to this endpoint the api return a **token**  with the public user data

To consume the api endpoints you are going to need the **token** 

```http
  POST /api/v1/user/sign-in
```

| Body parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` |required
| `password` | `string` | required

##### JSON response 
```json
{
  "token": "token",
  "user": {
    "username": "David",
    "email": "developers@payservice.co",
    "status": "published",
    "phone": 2147483647,
    "nit": 12334729
  }
}
```

<br></br>

#### Get provaider services information

To have access to this endpoint you need a **token** to authenticate the request by **Bearer token header**

```http
  POST /api/v1/payment/:provaider
```

| URL Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `provaider` | `string` | **Required**. provider name 


**Body request**

the **access token** in the body request is the mercadopogo token generated when you create a new integration in mercadopago developers platform
```json
{
  "payment_adapter": "mercadopago",
  "adapter_type": "checkout pro",
  "access_token":"APP_USR-423452003488-110815-a8d5233da5263ccaec4dffd9352274" 
}


```




<br></br>

##### Create new transaction for a specific provaider

```http
  POST /api/v1/payments/:provaider/transaction/:idtransaction
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `provaider`      | `string` | **Required**. Id of payment service provider |
| `idtransaction`      | `string` | **Required**. Id new transaction |


## Database
#### Entity Relationship Diagram
[![N|Solid](https://pay-service-cms.aipus.co/aipus-pay-service/assets/hhjsx4aa2e0cckow)](https://pay-service-cms.aipus.co/aipus-pay-service/assets/hhjsx4aa2e0cckow)





