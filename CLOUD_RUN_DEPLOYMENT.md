# Cloud Run Deployment Guide for afghanai-hub

## Prerequisites
- Google Cloud SDK installed and authenticated locally
- Docker installed locally (optional; gcloud builds submit can use Cloud Build)
- GCP project ID: `studio-9648397962-1720d`

## Step 1: Build and Push Docker Image to Google Container Registry

Run this command from your local machine (or any machine with gcloud authenticated):

```bash
cd /path/to/11111
gcloud builds submit --tag gcr.io/studio-9648397962-1720d/afghanai-hub
```

This command:
- Builds the Dockerfile in the current directory
- Pushes the image to Google Container Registry under your GCP project
- Takes 2-5 minutes depending on image size and build speed

## Step 2: Deploy to Cloud Run

Once the image is built and pushed, deploy it to Cloud Run:

```bash
gcloud run deploy afghanai-hub \
  --image gcr.io/studio-9648397962-1720d/afghanai-hub \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --project studio-9648397962-1720d
```

This command:
- Creates a Cloud Run service named `afghanai-hub`
- Deploys the Docker image
- Makes it publicly accessible (--allow-unauthenticated)
- Sets the region to us-central1

**Expected output**: A service URL like `https://afghanai-hub-xxxxx.a.run.app`

Copy the Cloud Run service URL from the output.

## Step 3: Update firebase.json with the Cloud Run Service URL

Once deployed, update `firebase.json` to use the correct service URL. Replace `your-cloud-run-service-url` with the actual URL:

```bash
firebase deploy --only hosting
```

## Step 4: Verify Deployment

Once Firebase Hosting is deployed, test your application:
- Visit your Firebase Hosting URL (from `firebase deploy` output)
- Verify all features work correctly

## Troubleshooting

### Image Build Fails
- Ensure `.next/standalone` exists: `ls -la .next/standalone`
- Check that `.next/static` exists: `ls -la .next/static`
- Verify `package.json` and `package-lock.json` exist in the project root

### Cloud Run Deployment Fails
- Check logs: `gcloud run logs read afghanai-hub --region us-central1`
- Ensure the image exists: `gcloud container images list --project studio-9648397962-1720d`

### Service Not Responding
- Check Cloud Run service status: `gcloud run services describe afghanai-hub --region us-central1`
- View recent requests: `gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=afghanai-hub" --limit 50`

## Manual Docker Build & Push (Alternative)

If you prefer to build and push manually:

```bash
docker build -t gcr.io/studio-9648397962-1720d/afghanai-hub:latest .
docker push gcr.io/studio-9648397962-1720d/afghanai-hub:latest
```

Then proceed to Step 2 to deploy to Cloud Run.
