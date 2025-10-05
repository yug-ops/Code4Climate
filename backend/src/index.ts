import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { db, firebaseAuth } from './config/firebase.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', async (req, res) => {
  try {
    await db.collection('test').doc('ping').set({ alive: true, ts: Date.now() });
    res.send('Firestore write successful');
  } catch (err) {
    console.error('Firestore error:', err);
    res.status(500).send('Firestore write failed');
  }
});

app.get('/users', async (req, res) => {
  try {
    const list = await firebaseAuth.listUsers(5);
    res.json(list.users.map(u => ({ uid: u.uid, email: u.email })));
  } catch (err) {
    console.error('Auth error:', err);
    res.status(500).send('Auth fetch failed');
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TS backend!');
});

app.listen(PORT, () => {
  console.log(`⚡ Server running on http://localhost:${PORT}`);
});