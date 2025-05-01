# 3DW-Website

Club website to provide info and allow members to place 3D printing orders.

### Tech Stack

- Front-end: **Next.js + TypeScript + Tailwind CSS**

- Back-end: **Express.js**

- Database: **MongoDB**

### Setup

1. Clone the repo
    - `git clone https://github.com/3DWestern/3DW-Website.git && cd 3DW-Website/`
2. Install dependencies
    - `cd Client && npm install`
    - `cd ../Server && npm install`
3. Configure environment variables in `Server/.env` (see: `example.env`)
    - Port for the backend to run on
    - Atlas URI
    - Database name
4. Run the front-end and back-end
    - `cd Server && npm run dev`
    - `cd ../Client && npm run dev`