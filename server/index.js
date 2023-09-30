import express from 'express';
import path from 'path';
import todos from './routes/todos'
import db from './database/mongoose'

const app = express()
db.connect()
app.use('/api/todo',todos)
const port = 3000;
app.get('*/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))

})

app.listen(port)
export default app