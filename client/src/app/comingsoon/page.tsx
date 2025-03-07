"use client";

import { useState } from 'react';
import Image from "next/image";
export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMessage("Thank you for signing up! We'll keep you posted.");
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white p-6">
      <div className="max-w-3xl w-full text-center p-8 rounded-lg shadow-lg bg-blue-800">
        <h1 className="text-5xl font-bold">STOCKEFY is Launching Soon</h1>
        <p className="text-2xl mt-3">Your Smart Inventory Solution is Coming!</p>
        <p className="text-lg mt-2 text-gray-400">
          The fully customizable inventory management platform built for Shopify, TikTok, and Instagram sellers.
        </p>
        
        {/* Steps Section */}
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <ul className="mt-4 text-lg">
            <li><strong>Step 1:</strong> Choose the Membership Tier more adequate to your business needs</li>
            <li><strong>Step 2:</strong> Sign-Up/Payment/Create Account</li>
            <li><strong>Step 3:</strong> Navigate the Platform: Choose the features for your business needs and customize your interface.</li>
          </ul>
        </div>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md text-black"
            required
          />
          <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Get Early Access
          </button>
        </form>
        {message && <p className="mt-3 text-sm text-green-400">{message}</p>}

        {/* Membership Tiers */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold">Choose Your Plan</h2>
          <ul className="mt-4 text-lg">
            <li><strong>Basic ($19/mo):</strong> Core dashboard + analytics</li>
            <li><strong>Pro ($49/mo):</strong> Advanced analytics + white-labeling</li>
            <li><strong>Enterprise ($99/mo):</strong> Full customization + integrations</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <div className='w-6 bg-white'><a href="https://x.com/Stockefy" className="text-blue-400 hover:underline"><Image alt="X"src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTIuMTUzOTkyLDEwLjcyOTU1MyA4LjA4ODY4NCw1LjA0MTE5OSA1LjkyMDQxLDUuMDQxMTk5IDEwLjk1NjI5OSwxMi4wODcwOTcgMTEuNTkwMjEsMTIuOTczNDUgICAgMTUuOTAwNjM1LDE5LjAwOTU4MyAxOC4wNjg5MDksMTkuMDA5NTgzIDEyLjc4NTIxNywxMS42MTU5MDYgICIvPjxwYXRoIGQ9Ik0yMS4xNTk3OSwxSDIuODQwMjFDMS44MjM4NTMsMSwxLDEuODIzODUzLDEsMi44NDAyMXYxOC4zMTk1OEMxLDIyLjE3NjE0NywxLjgyMzg1MywyMywyLjg0MDIxLDIzaDE4LjMxOTU4ICAgQzIyLjE3NjE0NywyMywyMywyMi4xNzYxNDcsMjMsMjEuMTU5NzlWMi44NDAyMUMyMywxLjgyMzg1MywyMi4xNzYxNDcsMSwyMS4xNTk3OSwxeiBNMTUuMjM1MzUyLDIwbC00LjM2MjU0OS02LjIxMzAxMyAgIEw1LjQxMTQzOCwyMEg0bDYuMjQ2ODg3LTcuMTA0Njc1TDQsNGg0Ljc2NDY0OGw0LjEzMDEyNyw1Ljg4MTk1OEwxOC4wNjk1OCw0aDEuNDExMzc3bC01Ljk1Njk3LDYuNzc1NjM1TDIwLDIwSDE1LjIzNTM1MnoiLz48L2c+PC9zdmc+"/></a></div>
          <div className='w-6'><a href="https://www.instagram.com/stockefy.io/" className="text-blue-400 hover:underline"><Image alt="Instagram" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkFwcGxlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjTmVwb2ptZW5vdmFuw71fcMWZZWNob2RfMjcpO30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9Ik5lcG9qbWVub3ZhbsO9X3DFmWVjaG9kXzI3IiB4MT0iMzI4LjI3IiB4Mj0iMTgzLjczIiB5MT0iNTA4LjA1IiB5Mj0iMy45NSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZkYjczIi8+PHN0b3Agb2Zmc2V0PSIwLjA4IiBzdG9wLWNvbG9yPSIjZmRhZDRlIi8+PHN0b3Agb2Zmc2V0PSIwLjE1IiBzdG9wLWNvbG9yPSIjZmI4MzJlIi8+PHN0b3Agb2Zmc2V0PSIwLjE5IiBzdG9wLWNvbG9yPSIjZmE3MzIxIi8+PHN0b3Agb2Zmc2V0PSIwLjIzIiBzdG9wLWNvbG9yPSIjZjY2OTJmIi8+PHN0b3Agb2Zmc2V0PSIwLjM3IiBzdG9wLWNvbG9yPSIjZTg0YTVhIi8+PHN0b3Agb2Zmc2V0PSIwLjQ4IiBzdG9wLWNvbG9yPSIjZTAzNjc1Ii8+PHN0b3Agb2Zmc2V0PSIwLjU1IiBzdG9wLWNvbG9yPSIjZGQyZjdmIi8+PHN0b3Agb2Zmc2V0PSIwLjY4IiBzdG9wLWNvbG9yPSIjYjQzZDk3Ii8+PHN0b3Agb2Zmc2V0PSIwLjk3IiBzdG9wLWNvbG9yPSIjNGQ2MGQ0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDI2NGRiIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlLz48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iNDY1LjA2IiByeD0iMTA3LjIzIiByeT0iMTA3LjIzIiB3aWR0aD0iNDY1LjA2IiB4PSIyMy40NyIgeT0iMjMuNDciLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMzEsMTE1LjIyYTY2LjkyLDY2LjkyLDAsMCwxLDY2LjY1LDY2LjY1VjMzMC4xM0E2Ni45Miw2Ni45MiwwLDAsMSwzMzEsMzk2Ljc4SDE4MWE2Ni45Miw2Ni45MiwwLDAsMS02Ni42NS02Ni42NVYxODEuODdBNjYuOTIsNjYuOTIsMCwwLDEsMTgxLDExNS4yMkgzMzFtMC0zMUgxODFjLTUzLjcxLDAtOTcuNjYsNDQtOTcuNjYsOTcuNjZWMzMwLjEzYzAsNTMuNzEsNDQsOTcuNjYsOTcuNjYsOTcuNjZIMzMxYzUzLjcxLDAsOTcuNjYtNDQsOTcuNjYtOTcuNjZWMTgxLjg3YzAtNTMuNzEtNDMuOTUtOTcuNjYtOTcuNjYtOTcuNjZaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjU2LDE5OC4xM0E1Ny44Nyw1Ny44NywwLDEsMSwxOTguMTMsMjU2LDU3Ljk0LDU3Ljk0LDAsMCwxLDI1NiwxOTguMTNtMC0zMUE4OC44Nyw4OC44NywwLDEsMCwzNDQuODcsMjU2LDg4Ljg3LDg4Ljg3LDAsMCwwLDI1NiwxNjcuMTNaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIzNDYuODEiIGN5PSIxNjMuMjMiIHI9IjIxLjA3Ii8+PC9zdmc+"/></a></div>
          <div className='w-6'><a href="https://www.facebook.com/profile.php?id=61572228309453" className="text-blue-400 hover:underline"><Image alt="Facebook" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik01MTIsMjU2YzAsLTE0MS4zODUgLTExNC42MTUsLTI1NiAtMjU2LC0yNTZjLTE0MS4zODUsMCAtMjU2LDExNC42MTUgLTI1NiwyNTZjMCwxMjcuNzc3IDkzLjYxNiwyMzMuNjg1IDIxNiwyNTIuODlsMCwtMTc4Ljg5bC02NSwwbDAsLTc0bDY1LDBsMCwtNTYuNGMwLC02NC4xNiAzOC4yMTksLTk5LjYgOTYuNjk1LC05OS42YzI4LjAwOSwwIDU3LjMwNSw1IDU3LjMwNSw1bDAsNjNsLTMyLjI4MSwwYy0zMS44MDEsMCAtNDEuNzE5LDE5LjczMyAtNDEuNzE5LDM5Ljk3OGwwLDQ4LjAyMmw3MSwwbC0xMS4zNSw3NGwtNTkuNjUsMGwwLDE3OC44OWMxMjIuMzg1LC0xOS4yMDUgMjE2LC0xMjUuMTEzIDIxNiwtMjUyLjg5WiIgc3R5bGU9ImZpbGw6IzE4NzdmMjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMzU1LjY1LDMzMGwxMS4zNSwtNzRsLTcxLDBsMCwtNDguMDIyYzAsLTIwLjI0NSA5LjkxNywtMzkuOTc4IDQxLjcxOSwtMzkuOTc4bDMyLjI4MSwwbDAsLTYzYzAsMCAtMjkuMjk3LC01IC01Ny4zMDUsLTVjLTU4LjQ3NiwwIC05Ni42OTUsMzUuNDQgLTk2LjY5NSw5OS42bDAsNTYuNGwtNjUsMGwwLDc0bDY1LDBsMCwxNzguODljMTMuMDMzLDIuMDQ1IDI2LjM5MiwzLjExIDQwLDMuMTFjMTMuNjA4LDAgMjYuOTY2LC0xLjA2NSA0MCwtMy4xMWwwLC0xNzguODlsNTkuNjUsMFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9nPjwvc3ZnPg=="/></a></div>
          <div className='w-6 bg-white'><a href="https://twitter.com/Stockefy" className="text-blue-400 hover:underline"><Image alt="Twitter" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI2N0IyO30KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6I0MyMTkxRTt9Cgkuc3Q0e2ZpbGw6IzFEQTFGMzt9Cgkuc3Q1e2ZpbGw6I0ZFRkUwMDt9Cgkuc3Q2e2ZpbGw6IzI1RDM2NjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q3e2ZpbGw6I0NCMjAyNzt9Cgkuc3Q4e2ZpbGw6IzAwNzdCNTt9Cgkuc3Q5e2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MTB7ZmlsbDp1cmwoI1NWR0lEXzNfKTt9Cgkuc3QxMXtmaWxsOiNGRjAwNEY7fQoJLnN0MTJ7ZmlsbDojMDBGN0VGO30KCS5zdDEze2ZpbGw6IzUxODFCODt9Cgkuc3QxNHtmaWxsOiMzOTU5NzY7fQoJLnN0MTV7ZmlsbDojRjU4MjIwO30KCS5zdDE2e2ZpbGw6I0U2MTYyRDt9Cgkuc3QxN3tmaWxsOiNGRjk5MzM7fQo8L3N0eWxlPjxnIGlkPSJndWlkbGluZXMiLz48ZyBpZD0iRkIiLz48ZyBpZD0iaWciLz48ZyBpZD0ieXQiLz48ZyBpZD0idHdpdHRlciIvPjxnIGlkPSJzbmFwY2hhdCIvPjxnIGlkPSJXQSIvPjxnIGlkPSJQaW50ZXJyZXN0Ii8+PGcgaWQ9IkxheWVyXzkiPjxwYXRoIGNsYXNzPSJzdDgiIGQ9Ik0yLDZ2NTJjMCwyLjIsMS44LDQsNCw0aDUyYzIuMiwwLDQtMS44LDQtNFY2YzAtMi4yLTEuOC00LTQtNEg2QzMuOCwyLDIsMy44LDIsNnogTTE5LjEsNTJIMTJWMjQuNGg3LjFWNTJ6ICAgIE0xNS42LDE4LjljLTIsMC0zLjYtMS41LTMuNi0zLjRjMC0xLjksMS42LTMuNCwzLjYtMy40YzIsMCwzLjYsMS41LDMuNiwzLjRDMTkuMSwxNy40LDE3LjUsMTguOSwxNS42LDE4Ljl6IE01Miw1MmgtNy4xVjM4LjIgICBjMC0yLjktMC4xLTQuOC0wLjQtNS43Yy0wLjMtMC45LTAuOC0xLjUtMS40LTJjLTAuNy0wLjUtMS41LTAuNy0yLjQtMC43Yy0xLjIsMC0yLjMsMC4zLTMuMiwxYy0xLDAuNy0xLjYsMS42LTIsMi43ICAgYy0wLjQsMS4xLTAuNSwzLjItMC41LDYuMlY1MmgtOC42VjI0LjRoNy4xdjQuMWMyLjQtMy4xLDUuNS00LjcsOS4yLTQuN2MxLjYsMCwzLjEsMC4zLDQuNSwwLjljMS4zLDAuNiwyLjQsMS4zLDMuMSwyLjIgICBjMC43LDAuOSwxLjIsMS45LDEuNCwzLjFjMC4zLDEuMSwwLjQsMi44LDAuNCw0LjlWNTJ6Ii8+PC9nPjxnIGlkPSJMYXllcl8xMCIvPjxnIGlkPSJMYXllcl8xMSIvPjxnIGlkPSJMYXllcl8xMiIvPjxnIGlkPSJMYXllcl8xMyIvPjxnIGlkPSJMYXllcl8xNCIvPjxnIGlkPSJMYXllcl8xNSIvPjxnIGlkPSJMYXllcl8xNiIvPjxnIGlkPSJMYXllcl8xNyIvPjwvc3ZnPg=="/></a></div>
          <div className='w-6'><a href="https://www.youtube.com/@mystockefy" className="text-blue-400 hover:underline"><Image alt="YouTube" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMzXzk1LXlvdXR1YmUiPjxnPjxwYXRoIGQ9Ik00NzYuMzg3LDE0NC44ODhjLTUuMjkxLTE5LjkxOS0yMC44NzgtMzUuNjA4LTQwLjY3LTQwLjkzM0MzOTkuODQ1LDk0LjI4MiwyNTYsOTQuMjgyLDI1Niw5NC4yODIgICAgcy0xNDMuODQ1LDAtMTc5LjcxOSw5LjY3NGMtMTkuNzkxLDUuMzI1LTM1LjM3OCwyMS4wMTMtNDAuNjY4LDQwLjkzM2MtOS42MTIsMzYuMTA1LTkuNjEyLDExMS40MzgtOS42MTIsMTExLjQzOCAgICBzMCw3NS4zMzQsOS42MTIsMTExLjQzOGM1LjI5LDE5LjkyLDIwLjg3NywzNC45NTUsNDAuNjY4LDQwLjI4MUMxMTIuMTU1LDQxNy43MTksMjU2LDQxNy43MTksMjU2LDQxNy43MTkgICAgczE0My44NDUsMCwxNzkuNzE3LTkuNjc0YzE5Ljc5Mi01LjMyNiwzNS4zNzktMjAuMzYxLDQwLjY3LTQwLjI4MWM5LjYxMi0zNi4xMDQsOS42MTItMTExLjQzOCw5LjYxMi0xMTEuNDM4ICAgIFM0ODUuOTk5LDE4MC45OTQsNDc2LjM4NywxNDQuODg4eiIgc3R5bGU9ImZpbGw6I0ZGMDAwMDsiLz48cG9seWdvbiBwb2ludHM9IjIwOC45NTQsMzI0LjcyMyAyMDguOTU0LDE4Ny45MyAzMjkuMTgsMjU2LjMyOCAgICIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiLz48L2c+PC9nPjxnIGlkPSJMYXllcl8xIi8+PC9zdmc+"/></a></div>
        </div>
      </div>
    </div>
  );
}
