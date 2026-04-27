# 🚀 Deployment Checklist

## ✅ Pre-Deployment Checks

### Environment Variables
- [ ] `CLERK_PUBLISHABLE_KEY` is set in Vercel/production
- [ ] `CLERK_SECRET_KEY` is set in Vercel/production  
- [ ] `NEXT_PUBLIC_CLERK_SIGN_IN_URL` is configured
- [ ] `NEXT_PUBLIC_CLERK_SIGN_UP_URL` is configured
- [ ] `SITE_URL` is set to production URL

### Code Quality
- [ ] All `console.log` statements are removed or commented out
- [ ] No hardcoded secrets or API keys in the code
- [ ] ESLint passes without errors
- [ ] All imports are correctly resolved

### Build Process
- [ ] `npm run build` completes successfully locally
- [ ] All critical files exist (layout.js, page.js, etc.)
- [ ] Images and static assets are properly optimized
- [ ] Routes are correctly configured

### Security
- [ ] `.env` file is in `.gitignore`
- [ ] No sensitive data in client-side code
- [ ] CORS settings are properly configured
- [ ] Clerk authentication is working

## 🔄 GitHub Actions CI/CD

### Required Secrets in GitHub Repository
- `CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY` 
- `VERCEL_TOKEN` (for auto-deployment)
- `ORG_ID` (Vercel organization ID)
- `PROJECT_ID` (Vercel project ID)

### Workflow Triggers
- [ ] Push to `main` branch triggers build and deploy
- [ ] Pull requests trigger build only
- [ ] Tests pass on both Node.js 18.x and 20.x

## 🌐 Vercel Deployment

### Build Settings
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next`
- [ ] Node.js version: 20.x
- [ ] Environment variables are configured

### Post-Deployment Checks
- [ ] Website loads correctly
- [ ] Authentication flow works
- [ ] All pages are accessible
- [ ] Images and assets load properly
- [ ] No 404 errors for critical pages

## 🚨 Common Issues & Solutions

### Build Failures
1. **Missing environment variables** → Check Vercel dashboard
2. **Import errors** → Verify all dependencies are installed
3. **TypeScript errors** → Run `npm run lint` locally first
4. **Image optimization issues** → Check Next.js config

### Runtime Errors
1. **Clerk authentication not working** → Verify Clerk keys
2. **API route failures** → Check server logs
3. **Static asset 404s** → Verify public folder structure
4. **Database connection issues** → Check connection strings

## 📊 Performance Optimization
- [ ] Images are optimized with Next.js Image component
- [ ] Bundle size is analyzed and optimized
- [ ] Core Web Vitals are within acceptable ranges
- [ ] Lighthouse score is above 90

## 🔧 Maintenance
- [ ] Dependencies are regularly updated
- [ ] Security audits are run periodically
- [ ] Backups are configured
- [ ] Monitoring is set up for production errors

---

## 🚀 Quick Deploy Command

```bash
# Run pre-build checks
npm run pre-build-check

# Build locally to test
npm run build

# Deploy to Vercel
vercel --prod
```

## 📱 Testing Checklist

### Manual Testing
- [ ] Sign up flow works
- [ ] Sign in flow works  
- [ ] Dashboard loads correctly
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Mobile responsive design works

### Automated Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] E2E tests pass (if implemented)

---

*Last updated: April 2026*
