
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { TOPICS } from '../src/constants/topics'; // Adjust path as necessary

// Manually construct the config object
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function migrateData() {
  console.log("Starting migration...");

  for (const topic of TOPICS) {
    const { subtopics, ...topicData } = topic;
    const topicRef = doc(db, "topics", topic.id);

    try {
      // Set the main topic data
      await setDoc(topicRef, topicData);
      console.log(`Successfully wrote topic: ${topic.name}`);

      // Now, handle the subtopics
      for (const subtopic of subtopics) {
        const { questions, ...subtopicData } = subtopic;
        const subtopicRef = doc(db, `topics/${topic.id}/subtopics`, subtopic.id);
        
        // Set the subtopic data
        await setDoc(subtopicRef, subtopicData);
        console.log(`  - Subtopic: ${subtopic.name}`);
        
        // And finally, the questions for that subtopic
        for (const question of questions) {
          const questionRef = doc(db, `topics/${topic.id}/subtopics/${subtopic.id}/questions`, question.id);
          await setDoc(questionRef, question);
        }
        console.log(`    - Migrated ${questions.length} questions.`);
      }
    } catch (error) {
      console.error(`Error migrating topic ${topic.name}:`, error);
    }
  }

  console.log("Migration finished!");
}

migrateData();
