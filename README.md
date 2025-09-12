# CampusConnect

CampusConnect is a modern web platform for managing and discovering campus events, connecting students and faculty, and sharing important updates. The project features a responsive design, event catalog, contact directory, and more.

---

## Live Demo

[Visit CampusConnect Live](https://campusconnect-stacksmith-techwiz6.netlify.app)

---

## Software Used

- **Frontend Framework:** [React.js]
- **Build Tool:** [Vite]
- **Routing:** [React Router]
- **Styling:** CSS
- **Icons:** [Lucide React] & [React Icons]
- **State Management:** React Hooks (useState, useEffect)
- **Version Control:** Git & GitHub

---

## Assumptions Made

- The application is intended for a single institution/campus.
- All event and contact data is static and stored locally in JSON files (`src/data/events.json`, `src/data/contacts.json`).
- No authentication or user roles are implemented.
- All users have equal access to view and bookmark events.
- The site is designed for modern browsers and mobile devices.

---

## Test Data Used

- **Events:**  
  Sample events are provided in `src/data/events.json` with fields such as `id`, `name`, `date`, `time`, `venue`, `category`, `description`, and `image`.
- **Contacts:**  
  Faculty and student coordinators are listed in `src/data/contacts.json` with fields like `id`, `name`, `designation`/`role`, `department`, `phone`, `email`, and `image`.
- **Images:**  
  Placeholder images are used for events and contacts where actual images are not provided.

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Bezliab/campusconnect.git
   cd campusconnect
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server (Vite):**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## Project Structure

```
src/
  components/      # Reusable UI components (Navbar, EventCard, etc.)
  pages/           # Main pages (Home, Events, Contact, etc.)
  styles/          # CSS files for styling
  data/            # Static data (events, contacts)
  App.jsx          # Main app component
  main.jsx         # Vite entry point
```

---

## Customization

- **Events:** Add or edit events in `src/data/events.json`.
- **Contacts:** Update faculty and student contacts in `src/data/contacts.json`.
- **Branding:** Replace logo and images in the `public/` folder.

---

**CampusConnect** – Bringing your campus together, one event at a time.
