import express from 'express'

const router = express.Router()

const students = [
    {
        id: 1,
        name: "Wojciech",
        surname: "Weiss",
        email: "malarz@email.com"
    },
    {
        id: 2,
        name: "Krzysztof",
        surname: "Krawczyk",
        email: "lubieKoke@email.com"
    },
    {
        id: 3,
        name: "Filip",
        surname: "Szcześniak",
        email: "mixsalat@email.com"
    },
    {
        id: 4,
        name: "Jakub",
        surname: "Grabowski",
        email: "lubiemochi@email.com"
    },
    {
        id: 5,
        name: "Donald",
        surname: "Trump",
        email: "buildingwall@email.com"
    },
    {
        id: 6,
        name: "Joseph",
        surname: "Dżugashwili",
        email: "redpapa@email.com"
    },
    {
        id: 7,
        name: "Jan",
        surname: "Kochanowski",
        email: "zabilemurszulke@email.com"
    },
    {
        id: 8, 
        name: "Lech",
        surname: "Kaczynski",
        email: "smolenskincident@email.com"
    },
    {
        id: 9,
        name: "Andrew",
        surname: "Tate",
        email: "whatcolourisyourbugatti@email.com"
    },
    {
        id: 10,
        name: "Marek",
        surname: "Nowak",
        email: "gigachad@email.com"
    }
]

const subjects = [
    {
        id: 1,
        subject: "Język polski",
        hoursAWeek: 3
    },
    {
        id: 2,
        subject: "Matematyka",
        hoursAWeek: 5
    },
    {
        id: 3,
        subject: "ENGLISH MOTHERFUCKER DO YOU SPEAK IT",
        hoursAWeek: 3
    },
    {
        id: 4,
        subject: "Aplikacje mobilne",
        hoursAWeek: 2
    },
    {
        id: 5,
        subject: "Mockownia",
        hoursAWeek: 1
    },
    {
        id: 6,
        subject: "Biologia",
        hoursAWeek: 1
    },
    {
        id: 7,
        subject: "Rabendix wixa",
        hoursAWeek: 69
    },
    {
        id: 8,
        subject: "Daty i trupy",
        hoursAWeek: 1
    },
    {
        id: 9,
        subject: "WoS",
        hoursAWeek: 1
    },
    {
        id: 10,
        subject: "Informatyka",
        hoursAWeek: 420
    }
]

const notFoundError = {
    "Error": 404,
    "Message": "Brak danych pod tym adresem."
}

router.get('/', (req, res)=>{
    const apiInfo = {
        "/api" : "Informacje o adresach url API.",
        "/api/students": "Lista uczniow z ich informacjami.",
        "/api/students/:id": "Informacje o wybranym uczniu wg id.",
        "/api/subjects": "Lista przedmiotów szkolnych.",
        "/api/subjects/:id": "Informacje o wybranym przedmiocie wg id."
    }
    res.json(apiInfo)
})

router.get('/students', (req, res)=>{
    res.json(students)
})

router.get('/students/:id', (req, res)=>{
    const chosenStudentId = req.params.id
    const chosenStudent = students.find(student => student.id == chosenStudentId)
    if(chosenStudent){
        res.json(chosenStudent)
    }
    else{
        res.status(404).send(notFoundError)
    }
})

router.get('/subjects', (req, res)=>{
    res.json(subjects)
})

router.get('/subjects/:id', (req, res)=>{
    const chosenSubjectId = req.params.id
    const chosenSubject = subjects.find(subject => subject.id == chosenSubjectId)
    if(chosenSubject){
        res.json(chosenSubject)
    }
    else{
        res.status(404).send(notFoundError)
    }
})


export { router as apiRouter}