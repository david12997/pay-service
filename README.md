

# <img src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/97ydi7u98rwo0k00" width="40px" height="40px" > Pay  Links

#### Paylinks is a fullstack application that allows you to use multiple payment gateways and online payment providers to generate payment links for products and services, it also exposes an API that abstracts providers and allows you to create transactions and payment links via http requests easely

## Demo live: [paylinks.apps](https://paylinks.apps.aipus.co/)

## Table of Contents
1. [How to use](#how-to-use)
2. [UI Design](#ui-design)
3. [Architecture](#architecture)
4. [Frontend](#frontend)
5. [Backend](#backend)
6. [Database](#database)


## How to use 

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


## UI Design
To design and prototype the application I use figma.
##### Link figma design: [figma.link](https://www.figma.com/file/SWetoonCcVGLVFy6Bqtmch/Untitled?type=design&node-id=0%3A1&mode=design&t=R0f93AHU0nd1i8W5-1)

<img width="100%" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/imwv47bo0tcggwo0">
<img width="100%" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/elwziqo8bg0sw44w">


## Architecture

#### Use Case Diagram
[![N|Solid](https://pay-service-cms.aipus.co/aipus-pay-service/assets/otl43bvpweockw4w)](https://pay-service-cms.aipus.co/aipus-pay-service/assets/otl43bvpweockw4w)

#### Entity Relationship Diagram
[![N|Solid](https://pay-service-cms.aipus.co/aipus-pay-service/assets/hhjsx4aa2e0cckow)](https://pay-service-cms.aipus.co/aipus-pay-service/assets/hhjsx4aa2e0cckow)



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


Provaiders accepted
- Mercadopago
- Paypal(under develop)
- Pay U (pending)


<br></br>

##### Get provaider services information

```http
  POST /api/v1/payment/:provaider
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `provaider` | `string` | **Required**. id payment service provaider

##### Example

```http
  POST /api/v1/payment/mercadopago
```
```http
  POST /api/v1/payment/paypal
```
```http
  POST /api/v1/payment/payu
```
| Provaider     |  Type      | Description        |
| :------------ | :-----------  | :------------------------- |
| `mercadopago` |     `string`  | get data  to use mercadopago
| `paypal` |     `string`  | get data to use paypal
| `payu` |   `string`  | get data to use payu



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
Content for the Database section goes here.



