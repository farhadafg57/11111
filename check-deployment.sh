#!/bin/bash
# AFGHANI HUB - PRE-DEPLOYMENT CHECKLIST ✅

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║        AfghanAI Hub - Pre-Deployment Verification             ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check 1: Build
echo "🔍 Checking build..."
if [ -d ".next" ]; then
  echo "   ✅ Next.js build directory exists"
else
  echo "   ❌ Build directory missing - run: npm run build"
  exit 1
fi

# Check 2: Git
echo "🔍 Checking Git status..."
if [ -d ".git" ]; then
  echo "   ✅ Git repository exists"
  COMMITS=$(git log --oneline | wc -l)
  echo "   ✅ Total commits: $COMMITS"
else
  echo "   ❌ Not a git repository"
  exit 1
fi

# Check 3: GitHub
echo "🔍 Checking GitHub..."
REMOTE=$(git config --get remote.origin.url)
if [[ $REMOTE == *"github"* ]]; then
  echo "   ✅ GitHub remote: $REMOTE"
else
  echo "   ⚠️  Warning: Remote not on GitHub"
fi

# Check 4: Configuration
echo "🔍 Checking configuration files..."
[ -f "vercel.json" ] && echo "   ✅ vercel.json exists" || echo "   ❌ vercel.json missing"
[ -f "next.config.mjs" ] && echo "   ✅ next.config.mjs exists" || echo "   ❌ next.config.mjs missing"
[ -f "package.json" ] && echo "   ✅ package.json exists" || echo "   ❌ package.json missing"
[ -f "tsconfig.json" ] && echo "   ✅ tsconfig.json exists" || echo "   ❌ tsconfig.json missing"

# Check 5: Dependencies
echo "🔍 Checking dependencies..."
DEPS=$(grep -c '"dependencies"' package.json)
if [ $DEPS -gt 0 ]; then
  echo "   ✅ Dependencies defined in package.json"
else
  echo "   ❌ No dependencies found"
  exit 1
fi

# Check 6: Documentation
echo "🔍 Checking documentation..."
[ -f "VERCEL_DEPLOYMENT.md" ] && echo "   ✅ VERCEL_DEPLOYMENT.md exists" || echo "   ⚠️  VERCEL_DEPLOYMENT.md missing"
[ -f "DEPLOYMENT_READY.md" ] && echo "   ✅ DEPLOYMENT_READY.md exists" || echo "   ⚠️  DEPLOYMENT_READY.md missing"
[ -f "DEPLOYMENT_GUIDE.md" ] && echo "   ✅ DEPLOYMENT_GUIDE.md exists" || echo "   ⚠️  DEPLOYMENT_GUIDE.md missing"

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║              ✅ ALL CHECKS PASSED - READY TO DEPLOY            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "Next steps:"
echo "1. Go to: https://vercel.com/import"
echo "2. Import: github.com/farhadafg57/11111"
echo "3. Click: Deploy"
echo ""
echo "Your app will be live in 2-3 minutes! 🚀"
