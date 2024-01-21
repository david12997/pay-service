
# Pay Service

Adapter between multiple payment service providers and payment gateways.

Abstract the complexity of different payment APIs and gateways and create payment services easily

## Requeriments
- Node js
- Mysql

<br></br>
## Run project locally

Clone the project

```bash
  git clone https://github.com/david12997/pay-service.git
```

Go to the project directory

```bash
  cd pay-service
```

Install dependencies

```bash
  npm install
```

Create Database (needs mysql installed)

```bash
  editing...
```

Start the server

```bash
  npm run dev
```

<br></br>

## Architecture

#### Use Case Diagram
[![N|Solid](https://pay-service-cms.aipus.co/aipus-pay-service/assets/otl43bvpweockw4w)](https://pay-service-cms.aipus.co/aipus-pay-service/assets/otl43bvpweockw4w)

#### Entity Relationship Diagram
[![N|Solid](https://pay-service-cms.aipus.co/aipus-pay-service/assets/hhjsx4aa2e0cckow)](https://pay-service-cms.aipus.co/aipus-pay-service/assets/hhjsx4aa2e0cckow)



<br></br>

## API Reference

#### Provaiders accepted
- Mercadopago
- Paypal
- Pay U


<br></br>

#### Get provaider services information

```http
  POST /api/v1/payment/:provaider
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `provaider` | `string` | **Required**. id payment service provaider

#### Example

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

#### Create new transaction for a specific provaider

```http
  POST /api/v1/payments/:provaider/transaction/:idtransaction
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `provaider`      | `string` | **Required**. Id of payment service provider |
| `idtransaction`      | `string` | **Required**. Id new transaction |





