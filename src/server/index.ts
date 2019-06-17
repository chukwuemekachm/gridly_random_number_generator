import app from './app/app';

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
