import express, { Express,Request, Response } from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import admin, { firestore } from 'firebase-admin';
import serviceAccount from './credential.json';
import { db } from './firebase';

const app = express();
// reference https://console.firebase.google.com/u/0/project/clinic-management-system-ddce8/settings/serviceaccounts/adminsdk    serviceAccount = require("path/to/serviceAccountKey.json");

dotenv.config();

app.use(express.json());


const port = process.env.PORT || 4000;

// Get users data
app.get('users',async (req:Request,res:Response)=>{
    const usersCollection = await db.collection('users').get();
    const user = usersCollection.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    }));
    res.json(user);

});
// Get all the patients data
app.get('/patients',async (req:Request, res:Response)=>{
    const patientsCollection = await db.collectionGroup('patients').get();
    const patients = patientsCollection.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));
        res.json(patients);  
});
// Get patient by id
app.get('/patient/:id',async(req:Request,res:Response)=>{
    const patient = await db.collection('patients').doc(req.params.id).get();
    res.json(patient);
});
// update patients data
app.put('/patient/:id',async(req:Request,res:Response)=>{
    const patient = await db.collection('patients').doc(req.params.id).update(req.body);
    res.json(patient);
});
// Delete patient by id
app.delete('/patient/:id',async(req:Request,res:Response)=>{
    const patient = await db.collection('patients').doc(req.params.id).delete();
    res.json(patient);
});
// Add new patient
app.post('/patient',async(req:Request,res:Response)=>{
 
   const patientsData = {
    id:req.body.id,
    phoneNumber:req.body.phoneNumber,
    tokenNumber:req.body.tokenNumber,
    age:req.body.age,
    name:req.body.name
   }
    const patient = await db.collection('patients').add(patientsData);
    res.json(patient);
}); 


app.listen(port,()=>{
    console.log(`app running in Port ${port}`);
});


