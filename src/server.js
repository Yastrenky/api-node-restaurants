import express from 'express';
import setupMiddware from './middleware';
import { restRouter } from './api';
import { connect } from './db';
// import { signin, protect } from './api/modules/auth';

const app = express();

setupMiddware(app);
connect();

// app.use('/signin', signin);
app.use(express.static('static'))
app.use('/api', restRouter);

// app.get('/', (req, res) => {
//   res.json({ ok: false });
// });

// Never in production
// app.all('*', (req, res) => {
//   res.json({ ok: true });
// });

export default app;
