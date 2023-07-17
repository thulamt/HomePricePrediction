import firebase_app from "@/firebase/config";
import { getFirestore, doc, getDoc, deleteDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function getDoument(collection_, id, type) {
  console.log("5:12", collection_, id);

  let result = {};
  let error = null;

  if (type === "single") {
    let docRef = doc(db, collection_, id);
    try {
      result = await getDoc(docRef);
    } catch (e) {
      error = e;
    }
  } else if (type === "multi") {
    const querySnapshot = await getDocs(collection(db, collection_));
    console.log("getting data", collection_);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      result[doc.id] = doc.data();
      console.log(doc.id, " => ", doc.data());
    });
  } else if (type === "del") {
    await deleteDoc(doc(db, collection_, id));
  }

  return { result, error };
}
