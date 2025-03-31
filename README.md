# React-Auth0 User Login & Registration

- Using Auth0 to quickly add a full-featured login system to a React app


## Getting Started

### Auth0 Setup

1. Sign up to **auth0.com** > Select **Account Type:** Personal
2. Go to Auth0 **Dashboard** > Applications Menu > Applications > Create Application
3. Create Application > 
    1. Enter App name: *React SPA*
    2. Application type: Single Page Web Application
    3. Click **Create**
4. Select **Web App Technology**: React
5. On your app page (React SPA) > **Settings** > **Application URIs**
    1. Allowed Callback URLs: `http://localhost:3000`
    2. Allowed Logout URLs: `http://localhost:3000`
    3. Allowed Web Origins: `http://localhost:3000`
    4. **Save Changes**

**Add GitHub Social Connnection**
6. Go to **Getting Started** > Add a social login provider > Add Social Connections
7. **Create Connection** > New Social Connection > Choose GitHub > **Continue**
8. **New GitHub Social Connection** > Create
9. On **github** connection page > Applications using this connection > **React SPA:** Turn on 

**Get Your App's Domain and Client ID**
10. Go back to **Applications**
12. **React SPA *(Your app)*** > Connections > See if Github is enabled
13. Go to your app's > **Settings**
14. Copy your **Domain** and **Client ID**


### Setup VSCode Project

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal

3. Install Vite on terminal:
    1. Run `npm create vite@latest .`
    2. Select `React` & Enter
    3. Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server` to `defineConfig()`:
        ```
        server: { 
            port: 3000
        }
        ```
        
5. Install dependencies: Open terminal and run `npm install`

6. Install NPM package: **`Auth0-React`** 
    **Run:** 
    ```
    npm i @auth0/auth0-react
    ```

7. Delete: `public/vite.svg`, `src/assets`, `src/App.css`
8. Modify `src/App.jsx` and `src/main.jsx`
9. Create `.env ` file in project root directory

10. Add your **Domain** and **Client ID** to the `.env ` file:
    ```
    REACT_APP_AUTH0_DOMAIN=your_auth0_domain
    REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id
    ```

11. Add the `.env` file to `.gitignore` file
12. Run frontend server with: `npm run dev`
