# Vercel Deployment Guide - AfghanAI Hub

Your Next.js app is now fully optimized for Vercel deployment. Follow these simple steps to get your app live on Vercel.

## Prerequisites
- Vercel account (free at https://vercel.com)
- Your code is already pushed to GitHub

## One-Click Deployment

### Step 1: Go to Vercel
Visit: https://vercel.com/import

### Step 2: Import Your GitHub Repository
1. Click "Import Project"
2. Paste your repository URL: `https://github.com/farhadafg57/11111`
3. Click "Continue"

### Step 3: Configure Project
- **Framework Preset**: Next.js (should auto-detect)
- **Root Directory**: `.` (root)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm ci` (auto-detected)

### Step 4: Set Environment Variables (Optional)
If you have Firebase config or other env vars, add them here:
- Key: `NEXT_PUBLIC_FIREBASE_API_KEY`
- Value: `your-api-key`

(You can skip this for now - defaults should work)

### Step 5: Deploy
Click "Deploy" and wait 2-3 minutes

## ✅ You're Done!

Vercel will:
- ✅ Auto-build your Next.js app
- ✅ Deploy instantly with CDN
- ✅ Provide a live URL (e.g., `https://afghani-hub.vercel.app`)
- ✅ Auto-update on every push to GitHub
- ✅ Handle SSL certificates automatically
- ✅ Scale infinitely without config

## Your Deployment URLs

Once deployed, you'll get:
- **Default URL**: `https://yourproject.vercel.app`
- **GitHub Integration**: Auto-deploys on every push
- **Preview URLs**: Test branches before merging

## Features Included

✅ Full Next.js 15.5.6 support  
✅ Server-side rendering  
✅ Static generation  
✅ API routes  
✅ Image optimization  
✅ Security headers  
✅ Auto-scaling  
✅ Global CDN  

## After Deployment

1. **Custom Domain** (optional):
   - Go to Vercel dashboard
   - Settings → Domains
   - Add your custom domain

2. **Environment Variables**:
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Add any needed secrets

3. **Monitor Performance**:
   - Vercel dashboard shows analytics
   - Real-time traffic, errors, performance

## Troubleshooting

### Build Fails
- Check `/logs` in Vercel dashboard
- Ensure all dependencies in `package.json`
- Try: `npm install` locally first

### Page Shows 404
- Next.js client-side routing should handle it
- Check that routes exist in `/src/app/`

### Environment Variables Not Working
- Ensure they're prefixed with `NEXT_PUBLIC_` if needed in browser
- Redeploy after adding env vars

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/farhadafg57/11111/issues

---

**Total time to deploy**: ~5 minutes  
**Cost**: Free tier includes unlimited deployments  
**Performance**: Global CDN, auto-scaling, 99.99% uptime

**Current Repository**: https://github.com/farhadafg57/11111  
**Configuration Ready**: ✅ vercel.json optimized  
**Build Ready**: ✅ npm run build succeeds  

Now just visit Vercel and click "Deploy"! 🚀
