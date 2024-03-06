# Next.js

This repository contains a ready-to-deploy Next.js web application. Utilizing a hybrid rendering approach that combines Server-Side Rendering (SSR) and Client-Side Rendering (CSR). The project includes ESLint for code linting, TypeScript for static typing, and Tailwind CSS for styling.

## Features:

- **Hybrid Rendering:** SSR in Next.js improves SEO, CSR allowing for a better user experience.
- **ESLint:** Ensures consistent code quality and style.
- **TypeScript:** Adds static typing to enhance code robustness.
- **Tailwind CSS:** Provides utility-first styling for quick and responsive designs.
- **Redis Cache:** Enhanced performance through efficient caching mechanisms.

## Frontend Component Structure:

The frontend component structure adheres to the Atomic Design pattern by Brad Frost. To learn more about Atomic Design, visit [https://atomicdesign.bradfrost.com](https://atomicdesign.bradfrost.com).

## Backend Structure

The backend leverages Next.js's serverless. To define API routes, simply utilize the `api` folder. For those interested in utilizing Server-Side Rendering (SSR) capabilities, further information can be found in the [Next.js documentation](https://nextjs.org/docs/basic-features/pages#server-side-rendering). For caching mechanisms, Redis is employed. Content variations are managed and stored as JSON files within the `data` folder, allowing for simple content management.

## Usage

- Clone the repository
- Run docker-compose file (make sure you have docker installed locally):
  ```bash
    docker-compose up -d
  ```
- Run npm install:
  ```bash
    npm install
  ```
- Run npm dev to spin up it up locally:
  ```bash
    npm run dev
  ```
- Run npm build to lint and optimize for production builds:
  ```bash
    npm run build
  ```

## Testing with Lighthouse

To assess the application using Lighthouse, follow these steps:

1. Build and start the application by running the following command in your terminal:
   ```bash
   npm run build && npm run start
   ```
2. Open the site in Google Chrome
3. Use the Developer Tools to inspect the site
4. Navigate to the Lighthouse tab
5. Run an analysis on the site using Lighthouse.

## End-to-End Tests

I have setup a e2e test repository that can be used to setup fully fledged automated tests. While these tests are not currently configured to run with this project, setting them up is a straightforward process. To find out more on how to integrate these tests please follow the link to access the repository: [Test Automation with PPCC](https://github.com/cncoding101/test-automation-with-ppcc).

## Deploying with Vercel

The simplest deployment method is through Vercel. The GitHub repository is pre-configured with a Vercel domain accessible at [https://blinkist-coding-challenge.vercel.app/](https://blinkist-coding-challenge.vercel.app/).

## Notes

### GitHub Workflow

I have included a GitHub workflow that builds the application before committing. This workflow can be extended to incorporate production deployments, enabling continuous integration pipelines.
