import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import firebase from "firebase/app";
import { app } from "../config/firebase";

export const get_subjects = async () => {
  const db = getFirestore(app);
  const collectionRef = collection(db, "subjects");

  try {
    const querySnapShot = await getDocs(collectionRef);

    const subject_data = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return subject_data;
  } catch (error) {
    console.log("Error : " + error);
  }
};

export const add_subject = async (subject) => {
  const db = getFirestore(app);
  const collectionRef = collection(db, "subjects");

  try {
    const docRef = await addDoc(collectionRef, subject);
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding data to Firestore:", error);
  }
};
