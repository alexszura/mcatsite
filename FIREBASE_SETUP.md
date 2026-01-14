# Firebase + GitHub Setup Guide

## Step 1: Set Up GitHub Repository

```bash
cd ~/Documents/mcat-quiz-app

# Already initialized, now create a GitHub repo and add remote
# Go to github.com and create a new public repository named "mcat-quiz-app"

# Then run:
git remote add origin https://github.com/YOUR_USERNAME/mcat-quiz-app.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Firebase

1. **Create Firebase Project**
   - Go to https://firebase.google.com
   - Click "Go to console"
   - Create a new project
   - Name it "MCAT Quiz App"

2. **Get Firebase Config**
   - In Firebase Console > Project Settings
   - Copy your config credentials

3. **Add Credentials to `.env.local`**
   ```
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Enable Firestore Database**
   - Firebase Console > Firestore Database
   - Click "Create Database"
   - Start in test mode (or production with rules below)

5. **Set Firestore Rules**
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow users to read/write their own data
       match /users/{userId}/progress/{document=**} {
         allow read, write: if request.auth.uid == userId;
       }
       // Allow public read access to questions
       match /topics/{document=**} {
         allow read: if true;
       }
     }
   }
   ```

6. **Enable Authentication**
   - Firebase Console > Authentication
   - Enable "Email/Password" provider
   - (Optional) Enable Google sign-in

## Step 3: Update Your App

### Already done:
- ✅ Firebase SDK installed
- ✅ `src/lib/firebase.ts` created
- ✅ `.env.local` template created
- ✅ Progress store updated for Firebase sync

### To implement authentication in your app:

Create `src/lib/auth.ts`:
```typescript
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const signUp = (email: string, password: string) => 
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email: string, password: string) => 
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
```

## Step 4: Deploy

### Option A: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option B: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

**Your app structure is now:**
- **Code:** GitHub (public repo)
- **Data:** Firebase Firestore (user progress, answers)
- **Auth:** Firebase Authentication
- **Hosting:** Vercel or Firebase Hosting
