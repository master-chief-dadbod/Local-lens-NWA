# Local Lens NWA

This repository contains a prototype web interface for the Local Lens project in Northwest Arkansas. The site is built with simple HTML, CSS and JavaScript.

## Running Locally
Open `index.html` directly or run the small Node server to explore the demo experience.
To start the server:

```bash
npm install
npm start
```
The site will be available at `http://localhost:3000`.

### AR Simulation
Launch `public/ar-test.html` to try the camera-based overlay demo. Click **Start AR Mode** to grant camera permission and collect on-screen badges.

## Project Structure
- `index.html` – main HTML page for the prototype
- `style.css` – layout and theme styling
- `script.js` – lightweight JavaScript adding interactivity, such as the game mode toggle and dynamic event loading
- `public/ar-test.html` – AR simulation page using the camera
- `public/ar-sim.js` – client-side logic for the AR demo

## Manual Deployment
If automated pushes are unavailable, you can upload these files directly to GitHub or another hosting service.


## Node Deployment
This project is static, but some hosting platforms like Render expect a package.json to run. The included `server.js` uses Express to serve the files.

1. Run `npm install`.
2. Start with `npm start`.
3. On Render, set the build command to `npm install` and the start command to `npm start`.

## Environment Variables

The Express server expects a `DATABASE_URL` variable pointing to a PostgreSQL instance.

1. Copy `.env.example` to `.env`.
2. Edit `.env` and provide the connection string for `DATABASE_URL`.
3. Start the server with `npm start` or through your hosting provider.
