
# Pay Service
##### By: David Castañeda
Adapter between multiple payment service providers and payment gateways.

Abstract the complexity of different payment APIs and gateways and create payment services easily

## API Reference

#### Get provaider services information

```http
  GET /api/v1/payment/:provaider
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `provaider` | `string` | **Required**. id payment service provaider

#### create new transaction for a specific provaider

```http
  POST /api/v1/payments/:provaider/transaction/:idtransaction
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `provaider`      | `string` | **Required**. Id of payment service provider |
| `idtransaction`      | `string` | **Required**. Id new transaction |




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

Start the server

```bash
  npm run dev
```
