# QurbaniHat

A modern livestock booking platform where users can explore Qurbani animals (cow/goat), view details, and place bookings after authentication.

## Live URL

`https://qurbanihat-assignment-a8.vercel.app`

## Project Purpose

QurbaniHat helps users compare animals with transparent pricing, breed, weight, and location data, then securely book their preferred option after logging in.

## Key Features

- Responsive layout for mobile, tablet, and desktop
- Home page with hero, featured animals, Qurbani tips, top breeds, and extra safety section
- All Animals page with sorting by price (low to high / high to low)
- Private animal details page with booking form
- Booking success toast and form reset on submit (no DB/localStorage booking persistence)
- Email/password login and registration
- Google social login
- Private profile page with logged-in user data
- Update profile information route (name and image) using Better Auth `update-user` flow
- Global loading and custom not-found page

## Routes

### Public Routes

- `/`
- `/animals`
- `/login`
- `/register`

### Private Routes

- `/details-page/[id]`
- `/my-profile`
- `/my-profile/update`

## Tech Stack

- Next.js 16 (App Router)
- React 19
- JavaScript (JSX)
- Tailwind CSS 4
- DaisyUI 5
- Better Auth
- MongoDB Atlas

## NPM Packages Used

- `better-auth`
- `@better-auth/mongo-adapter`
- `mongodb`
- `react-hook-form`
- `react-hot-toast`
- `react-icons`
- `animate.css`
- `date-fns`

## Environment Variables

Create a `.env.local` file in the root and set:

```env
MONGO_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
NEXT_PUBLIC_APP_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Use `.env.example` as a template.

## Run Locally

```bash
npm install
npm run dev
```

## Deployment Notes

- Deploy on Vercel or Render
- Set all environment variables in deployment dashboard
- Private routes are protected and reload-safe

## Google OAuth Setup Checklist

- In Google Cloud Console, set app audience and required app details.
- Add authorized JavaScript origin:
  - `https://qurbanihat-assignment-a8.vercel.app`
- Add authorized redirect URI:
  - `https://qurbanihat-assignment-a8.vercel.app/api/auth/callback/google`
- Add privacy and terms links using:
  - `/privacy-policy`
  - `/terms`
