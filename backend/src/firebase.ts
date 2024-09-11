import {initializeApp,cert} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import admin from 'firebase-admin';
import serviceAccount from './credential.json';

initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: "https://clinic-management-system-ddce8-default-rtdb.firebaseio.com"   
});

const db = getFirestore();

export {db};
