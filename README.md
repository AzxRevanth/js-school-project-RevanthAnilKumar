# Task 4 - Typescript

## Goal
Introduce TypeScript with strict mode and modular code for better structure and maintainability.

## Features
- Added `tsconfig.json` with strict mode enabled  
- Converted `script.js` → `src/index.ts`  
- Split code into modules:  
  - `fetcher.ts` → handles data fetching  
  - `renderer.ts` → handles UI rendering  
  - `modal.ts` → manages modal behavior  
- Defined interfaces/types for event data  
- Build process compiles TypeScript → JavaScript in `dist/`  

## Setup
1. Clone this repo  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Build
- Compile TypeScript into JavaScript:
  ```bash
  npx tsc
  ```
  or
  ```bash
  npm run build
  ```
Run
- Open index.html in the browser.
- The app will load from the compiled files in dist/.

Verify
Data is fetched and displayed

UI renders correctly

Modal opens and closes as expected
