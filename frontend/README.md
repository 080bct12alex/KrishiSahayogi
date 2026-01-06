# Krishi Sahayogi - Frontend

The web interface for Krishi Sahayogi, built with **Next.js 14**. It offers a responsive, accessible, and fast experience for farmers and buyers.

##  Features

*   **Responsive Design:** Works seamlessly on mobile and desktop.
*   **PWA Ready:** can be installed as an app.
*   **Localization:** Instant English <-> Nepali switching.
*   **Visualizations:** Interactive charts for market prices.

##  Setup & Installation

1.  Navigate to the directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Set up Environment Variables (`.env.local`):
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:4000
    NEXT_PUBLIC_ML_API_URL=http://localhost:5000
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Key Libraries

*   `next`: React Framework
*   `tailwindcss`: Styling
*   `framer-motion`: Animations
*   `lucide-react`: Icons
*   `redux-toolkit`: State Management
