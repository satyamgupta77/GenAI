import express from 'express'
import { generate } from './chatbot.js'
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to ChatDPT!')
})


app.post('/chat', async (req, res) => {
  const { message } = req.body;

  console.log(`Received message: ${message}`);

  await generate(message);

  const result = await generate(message);
  res.json({ message: result });
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})