import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors'
import Member from './models/generalBodyMemberModel.js';
import Event from './models/eventModel.js'
import processSpreadsheetData from './spreadsheetAPI/spreadsheetAPIFunctions.js';

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

app.get('/api/data/spreadsheet/:spreadsheetID', async (req,res) => {
    const { spreadsheetID } = req.params
    const spreadsheet = await processSpreadsheetData(spreadsheetID);
    res.json(spreadsheet);
});

app.post('/api/data/spreadsheet', async (req,res) => {
    const { eventName, spreadsheetID, numParticipants, spreadsheetData } = req.body;
    console.log(`${eventName}, ${spreadsheetID}, ${numParticipants}`);
    
    const event = await Event.findOne({spreadsheetID: spreadsheetID});

    console.log(event);

    if (event){
        console.log(event);
        res.status(409);
        return res.json("Event already exists");
    }

    const eventObject = {eventName, numParticipants, spreadsheetID};

    await Event.create(eventObject);

    for(const row of spreadsheetData) {
        const member = await Member.findOne({email: row[2]});

        console.log(member);


        if (!member){
            const name = row[1];
            const email = row[2];
            const major = row[6];
            const pronouns = row[4];
            const grade = row[5];
            const events = [eventObject];
            const fam = 'Not in a Fam';
            await Member.create({name, email, major, pronouns, grade, fam, events});
        } else {
            const updatedEventsArray = [...member.events, eventObject];
            const filterMember = {email: row[2]};
            const update = {events: updatedEventsArray};

            await Member.findOneAndUpdate(filterMember, update);
        }
    }

    res.status(200);
    res.json("Event Submitted");
});

app.get('/api/events', async (req,res) => {
    const events = await Event.find();

    return res.json(events);
});

app.put('/api/data/fam', async(req,res) => {
    const {peopleToAdd, fam} = req.body;
    for(const name of peopleToAdd){
        const filterMember = {name};
        const update = {fam}
        await Member.findOneAndUpdate(filterMember, update);
    }

    res.json('Added members to fam');
})

app.listen(port, () => console.log(`Server running on port ${port}`));