import express, { Request, Response,NextFunction } from 'express';
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

/*
Property 'requestTime' does not exist on type 'Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.ts(2339)
To solve this error, we need to define a custom interface that extends the Request interface and includes the requestTime property.
app.use((req:Request,res:Response,next:NextFunction)=>{
    const requestTime = new Date().toDateString; 
    req.requestTime = requestTime;
    next();
});
*/
declare global{
    namespace Express{
        interface Request{
            requestTime?:string;
        }
    }
}
// This is a middleware function used to get the request time
app.use((req:Request,res:Response,next:NextFunction)=>{
    req.requestTime = new Date().toDateString(); 
    next();
});

// Get users data
const getAllUsersData = async (req: Request, res: Response) => {
    try{

        console.log(req.requestTime);
        const usersCollection = await db.collection('users').get();
        const user = usersCollection.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        res.json(user);
    }catch(error){
        console.log(error);
    }
}
const getAllPatientsData = async (req: Request, res: Response) => {
    try{    
        const patientsCollection = await db.collectionGroup('patients').get();
        const patients = patientsCollection.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).json({
            status:'success',
            requestTime:req.requestTime,
            data:patients,
        });
    }catch(error){
        console.log(error);
    }
}
const addNewPatientData = async (req: Request, res: Response) => {
    const patientsData = {
        phoneNumber: req.body.phoneNumber,
        tokenNumber: req.body.tokenNumber,
        age: req.body.age,
        name: req.body.name
    }
    const patient = await db.collection('patients').add(patientsData);
    res.json(patient);
}

const getPatientDataByID = async (req: Request, res: Response) => {
    const patient = await db.collection('patients').doc(req.params.id).get();
    res.json(patient);
}

const getPatientDataByTokenNumber = async (req: Request, res: Response) => {
    const patient = await db.collection('patients').where('tokenNumber', '==', req.params.tokenNumber).get();
    res.json(patient);
}

const updatePatientData = async (req: Request, res: Response) => {
    const patient = await db.collection('patients').doc(req.params.id).update(req.body);
    res.json(patient);
}
const deletePatientData = async (req: Request, res: Response) => {
    const patient = await db.collection('patients').doc(req.params.id).delete();
    res.json(patient);
}

// app.get('/api/v1/users',getAllUsersData);
// app.get('/api/v1/patients',getAllPatientsData);
// app.post('/api/v1/patient',addNewPatientData);
// app.get('/api/v1/patient/:id',getPatientDataByID);
// app.get('/api/v1/patient/:tokenNumber',getPatientDataByTokenNumber);
// app.put('/api/v1/patient/:id',updatePatientData);
// app.delete('/api/v1/patient/:id',deletePatientData);

app.route('/api/v1/users').get(getAllUsersData);
app.route('/api/v1/patients').get(getAllPatientsData);
app.route('/api/v1/patient').post(addNewPatientData);
app.route('/api/v1/patient/tokenNumber/:tokenNumber').get(getPatientDataByTokenNumber);
app.route('/api/v1/patient/:id').get(getPatientDataByID).put(updatePatientData).delete(deletePatientData);

app.listen(port, () => {
    console.log(`app running in Port ${port}`);
});


