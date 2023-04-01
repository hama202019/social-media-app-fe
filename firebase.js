import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  storageBucket: 'gs://social-media-app-538e0.appspot.com'
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage