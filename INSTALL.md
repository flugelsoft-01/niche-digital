# Digital Handbook Business Website Setup Instructions

**Copyright © Flugelsoft Lab**  
**Author: Kalyanjit Hatibaruah**

## Installation Instructions

1. **Prerequisites**
   - Node.js (v18 or higher)
   - npm or yarn

2. **Setup Steps**
   ```bash
   # Install dependencies
   npm install
   
   # Build the project
   npm run build
   
   # Start the production server
   npm run start
   ```

3. **Development Mode**
   ```bash
   # Run in development mode
   npm run dev
   ```

## Server Deployment

For local server deployment:
1. Install Node.js on your server
2. Upload these files to your server
3. Run the installation steps above
4. Configure your server to proxy requests to port 3000

For cloud deployment:
- Vercel: Perfect for Next.js projects, automatic deployment
- Netlify: Also supports Next.js with minimal configuration

## Project Structure

- `src/` - Source code including pages and components
- `public/` - Static assets
- Configuration files for Next.js, TypeScript, and Tailwind CSS

## Copyright Information

All content in this website is copyrighted by Flugelsoft Lab.
Author: Kalyanjit Hatibaruah

© 2025 All Rights Reserved
