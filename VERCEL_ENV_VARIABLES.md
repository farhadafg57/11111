# Vercel Environment Variables

Copy and paste these environment variables into your Vercel dashboard.

**Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

---

## 🔑 Firebase Configuration Variables

Add these variables for Firebase integration:

### Variable 1
```
Name:  NEXT_PUBLIC_FIREBASE_API_KEY
Value: AIzaSyDZHmynBAMKKc0Api6215_tJdBvndw0t0I
Environments: Production, Preview, Development
```

### Variable 2
```
Name:  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: afghan-ai-c1596.firebaseapp.com
Environments: Production, Preview, Development
```

### Variable 3
```
Name:  NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: afghan-ai-c1596
Environments: Production, Preview, Development
```

### Variable 4
```
Name:  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: afghan-ai-c1596.appspot.com
Environments: Production, Preview, Development
```

### Variable 5
```
Name:  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: 38927823947
Environments: Production, Preview, Development
```

### Variable 6
```
Name:  NEXT_PUBLIC_FIREBASE_APP_ID
Value: 1:38927823947:web:2d2b591b10de6321684d53
Environments: Production, Preview, Development
```

### Variable 7
```
Name:  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
Value: G-K5G52YSZ79
Environments: Production, Preview, Development
```

---

## 🤖 Optional: Genkit/Google AI Variables

If you want to use Google Gemini API for AI features:

### Variable 8 (Optional)
```
Name:  NEXT_PUBLIC_GENKIT_MODEL
Value: googleai/gemini-2.5-flash
Environments: Production, Preview, Development
```

### Variable 9 (Optional - Only if using custom API)
```
Name:  GOOGLE_GENAI_API_KEY
Value: your-google-ai-api-key
Environments: Production, Preview, Development
```

---

## 📋 Quick Copy-Paste Format

If your dashboard allows bulk import, here's the format:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDZHmynBAMKKc0Api6215_tJdBvndw0t0I
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=afghan-ai-c1596.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=afghan-ai-c1596
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=afghan-ai-c1596.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=38927823947
NEXT_PUBLIC_FIREBASE_APP_ID=1:38927823947:web:2d2b591b10de6321684d53
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-K5G52YSZ79
```

---

## ⚠️ Important Notes

✅ **All values are PUBLIC** - These Firebase keys are meant to be exposed in the browser (Firebase design)

✅ **Already has fallbacks** - Your app includes default values in code, but adding these ensures they're used in production

✅ **Same values everywhere** - Use identical values for Production, Preview, and Development environments

✅ **No secrets here** - These are public Firebase credentials, not sensitive API keys

✅ **After adding variables** - Redeploy your project (or wait for next GitHub push to auto-deploy)

---

## 🚀 Steps to Add in Vercel

1. **Login to Vercel** → https://vercel.com
2. **Select your project** (11111)
3. **Go to Settings** tab
4. **Click Environment Variables** (left sidebar)
5. **For each variable:**
   - Click **Add New**
   - Enter **Name** (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY`)
   - Enter **Value** (e.g., `AIzaSyDZHmynBAMKKc0Api6215_tJdBvndw0t0I`)
   - Select all **Environments** (Production, Preview, Development)
   - Click **Add**
6. **Repeat for all 7 variables** above
7. **Done!** Your app will use these on next deploy

---

## ✅ Verification

After adding variables:
- Your app will connect to Firebase ✅
- Chat/Auth features will work ✅
- Data will sync with Firestore ✅
- AI features will run (if API key added) ✅

---

## 📞 Need Help?

- Check Vercel docs: https://vercel.com/docs/concepts/projects/environment-variables
- Check Firebase console: https://console.firebase.google.com
- Repository: https://github.com/farhadafg57/11111
