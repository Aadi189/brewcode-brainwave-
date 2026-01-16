# Deployment Guide for Railway

This guide outlines the steps to deploy the `brewcode-brainwave-` backend to [Railway](https://railway.app/).

## Prerequisites
- A Railway account.
- The `brewcode-brainwave-` codebase (which you have).

## Configuration Check
Ensure the following files are present in the `backend/` directory (these should already be there):
- `railway.json`: Configures the build system (Nixpacks).
- `Procfile`: Specifies the start command (`uvicorn main:app ...`).
- `requirements.txt`: Python dependencies.

## Step-by-Step Deployment

1.  **Create a New Project on Railway:**
    - Go to your Railway Dashboard.
    - Click "New Project" -> "Deploy from GitHub repo".
    - Select your repository (`brewcode-brainwave-`).

2.  **Configure Service Settings (CRITICAL):**
    - Once the project is created, click on the service card (the box representing your repo).
    - Go to **Settings**.
    - Scroll down to **Root Directory**.
    - Change it from `/` to `/backend`.
    - This is crucial because your actual backend code lives in a subdirectory.

3.  **Set Environment Variables:**
    - Go to the **Variables** tab.
    - Add the variables found in your local `.env` file. You will need to copy the values:
        - `SUPABASE_URL`
        - `SUPABASE_KEY`
        - `SUPABASE_JWT_SECRET`
        - `ONDEMAND_API_KEY`
        - `ONDEMAND_BASE_URL`
    - Also ensure `PORT` is handled by Railway (they automatically inject it, and our `Procfile` uses `$PORT`, which is correct).

4.  **Deploy:**
    - Deployment usually triggers automatically on push. If you changed the Root Directory, it might trigger a rebuild. If not, click "Deploy" or "Redeploy".
    - Watch the **Deploy Logs** to ensure the build succeeds and the start command runs without error.

## Troubleshooting

-   **"Module not found" error:**
    -   Double-check the **Root Directory** setting. If it's still `/`, it won't find `requirements.txt` or `main.py`.
-   **"Port binding" error:**
    -   Ensure your `Procfile` uses `--port $PORT`. Railway requires apps to listen on the injected port.
-   **"Database connection" error:**
    -   Verify your `SUPABASE_*` variables are correct in the Variables tab.

## Verification
Once deployed, Railway will provide a public URL (e.g., `https://your-project.up.railway.app`).
Visit `https://your-project.up.railway.app/` in your browser. You should see:
`{"message": "API is running", "status": "ok"}`
