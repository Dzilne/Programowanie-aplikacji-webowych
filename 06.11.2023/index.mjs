import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client'; 

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

const prisma = new PrismaClient();

app.use('/api', apiRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const connection = createConnection({
    host: "172.24.32.1",
    user: "root",
    password: "",
    database: "szkola"
})

connection.connect((err)=>{
    if(err)
    {
        throw err
    }
    else
    {
        console.log('Polączono z serwerem SQL w indeksie')
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.route('/kontakt')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '/kontakt.html'))
    })
    .post(async (req, res) => {
        const formData = req.body

        try {
            await prisma.formSubmission.create({
                data: {
                    firstName: formData.firstName,
                    email: formData.email,
                    topic: formData.topic,
                    message: formData.message,
                },
            });
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    });

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
});
