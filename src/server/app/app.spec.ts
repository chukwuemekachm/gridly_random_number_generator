import request from 'supertest';
import app from '../app/app';
import console = require('console');

const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400&display=swap" rel="stylesheet">
  <title>Gridly Random Phone Number Generator</title>
</head>

<body>
  <div id="root"></div>
<script type="text/javascript" src="main.chunk.js"></script></body>

</html>
`

describe('/api/v1/number', function () {
  test('should return a list of numbers', async function () {
    const { body: { numbers }, status } = await request(app).get('/api/v1/number');
    expect(status).toEqual(200);
    expect(typeof numbers).toBe('object');
  });

  test('should generate and return numbers', async function () {
    const { body: { numbers }, status } = await request(app)
      .post('/api/v1/number')
      .send({ count: 10 });
    expect(status).toEqual(201);
    expect(numbers).toHaveLength(10);
    expect(typeof numbers).toBe('object');
  });
});

describe('/', function () {
  test('should return the client app file', async function () {
    const { text, header: { 'content-type': contentType } } = await request(app).get('/');
    expect(contentType).toEqual('text/html; charset=UTF-8');
    expect(text).toEqual(html);
  });

  test('should return a 404 error', async function () {
    const { body: { message }, status } = await request(app).get('/api/v1/mickey');
    expect(status).toEqual(404);
    expect(message).toEqual('Route un-available');
  });
});
