# Day 15 – Admin Dashboard Table with Sort, Filter & Actions

This project is part of my 150-day developer preparation journey, focused on building scalable UI modules used in real dashboards and CMS platforms. On Day 15, I built a dynamic user table using React that supports client-side sorting, filtering, and row-level actions.

## ✅ What I Practiced:
- API data fetching with useEffect and Axios
- Sorting logic via column headers (ascending/descending)
- Text-based filtering by name/email
- Dropdown filter by role/status
- Rendering actions (View/Delete) per row
- Table layout with sticky headers (optional bonus)
- Clean separation of table/data/filter logic

## 🧠 Key Concepts Covered:
- Mapping fetched data into structured UI
- Controlled inputs for live filtering
- Sorting algorithms using toggle and direction state
- Action buttons tied to row-level logic
- Reusable component architecture (TableHeader, TableRow, FilterBar)

## 🛠 Features:
- Display users with Name, Email, Role, Status
- Input field to filter by name or email text
- Role dropdown to filter results
- Header click to sort columns
- Action buttons: View/Delete (optional toast/confirmation)
- Basic layout using Tailwind grid and spacing
- *Note:* Responsiveness not prioritized for this version

## ⚙️ Tech Stack:
- React.js (Hooks and component composition)
- Axios for API requests
- Tailwind CSS (utility-first styling)
- JavaScript sort/filter logic

## 🔥 Why This Matters:
Admin dashboards are core to product management, internal tools, and data operations. Today’s build reflects how to structure a readable, sortable, filterable dataset with intuitive logic and scalable layout decisions.

> Day 15 complete. Tables aren’t just data—they’re decisions made visible.
