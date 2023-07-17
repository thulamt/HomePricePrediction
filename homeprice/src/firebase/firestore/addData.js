import firebase_app from "@/firebase/config";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function addData(collection_, id, data) {
  let result = null;
  let error = null;
  console.log(id, collection_);
  try {
    if (id != "") {
      result = await setDoc(doc(db, collection_, id), data, {
        merge: true,
      });
    } else {
      console.log("create new doc");
      result = await addDoc(collection(db, collection_), data, {
        merge: true,
      });
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
