import express from 'express';
import config from 'config';

const app = express();

connectDB()
initConfig();

app.set('view engine', 'png')
app.set('views', config.get('viewPath'))

const port = process.env.PORT || 3000;

export const server = app.listen(port, () => {
  console.log(`App is running at PORT ${port}`)
})

export default app;