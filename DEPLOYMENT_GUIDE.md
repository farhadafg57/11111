# Firebase App Hosting Deployment Guide

Your Next.js app is currently deployed as **static HTML** on Firebase Hosting. To get full functionality (client-side routing, API routes, server-side features), you need to deploy it to **Cloud Run** and wire it with Firebase Hosting.

## Current Status
- ✅ Docker image built locally and available
- ✅ Firebase CLI authenticated
- ❌ Cloud Run deployment pending (requires gcloud CLI setup)

## Two Options to Complete Deployment

### OPTION 1: Deploy via Your Local Machine (Fastest - 5 minutes)

On your **local machine** where you have `gcloud` CLI already set up:

```bash
cd /path/to/this/project

# Authenticate gcloud (if not already done)
gcloud auth login

# Set your GCP project
gcloud config set project studio-9648397962-1720d

# Build and push the Docker image
gcloud builds submit --tag gcr.io/studio-9648397962-1720d/afghanai-hub:latest

# Deploy to Cloud Run
gcloud run deploy afghanai-hub \
  --image gcr.io/studio-9648397962-1720d/afghanai-hub:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars NODE_ENV=production \
  --memory 512Mi \
  --cpu 1

# After deployment succeeds, note the Cloud Run service URL (format: https://afghanai-hub-xxxxx.a.run.app)
```

Then run in this dev container:

```bash
firebase deploy --only hosting
```

### OPTION 2: Use Vercel Instead (Alternative - Recommended for Next.js)

Since your app is Next.js, Vercel is purpose-built for it and easier to deploy:

1. Go to https://vercel.com
2. Sign up / Log in
3. Import this GitHub repository
4. Vercel will auto-detect Next.js and deploy automatically
5. You'll get a free URL like: `your-app.vercel.app`

### OPTION 3: Wait for Cloud Run Setup (We'll finish this soon)

Let me know if you want me to continue trying to set up Cloud Run from here. I can also create a GitHub Actions workflow to auto-deploy.

---

## Current Deployment Details

- **Project ID**: studio-9648397962-1720d
- **Firebase Hosting URL**: https://studio-9648397962-1720d.web.app
- **Docker Image**: gcr.io/studio-9648397962-1720d/afghanai-hub:latest
- **Status**: Static hosting (partial functionality)

## Files Modified

- `.firebaserc` - Firebase project configuration
- `firebase.json` - Hosting and deployment configuration
- `Dockerfile` - Container definition for Cloud Run
- `.gcloudignore` - Files to ignore in gcloud deployment
- `functions/` - Cloud Functions setup (for future use)

---

**Next Steps**: Choose an option above and let me know if you need help!
