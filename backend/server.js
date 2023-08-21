import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors'
import Member from './models/generalBodyMemberModel.js';
import Event from './models/eventModel.js'

dotenv.config();

connectDB();

const port = process.env.PORT || 5500;
const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static(path.join(__dirname, 'frontend/build')));

    //any route that is not api will be redirected to index.html
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

app.get('/api/members', async (req,res) => { 
    const members = await Member.find();

    return res.json(members);
});

app.post('/api/data/individual', async (req,res) => {
    const {name, email, major, pronouns, grade, fam} = req.body
    const member = await Member.findOne({email: req.body.email});

    console.log(member);

    if (member){
        console.log(member);
        res.status(409);
        return res.json("Member already exists");
    }

    await Member.create({name, email, major, pronouns, grade, fam});

    res.status(200);
    return res.json("Member created");
});

app.put('/api/data/individual', async (req,res) => {
    const {id, name, email, major, pronouns, grade, fam} = req.body
    const filter = {_id: id};
    const update = {
        name: name,
        email: email,
        major: major,
        pronouns: pronouns,
        grade: grade,
        fam: fam,
    };
    await Member.findOneAndUpdate(filter, update);

    res.status(200);
    return res.json(`${name} updated`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));