# System Patterns

**System Architecture:** A client-side single-page application (SPA) built with React.
**Key Technical Decisions:**
- Utilizing the provided custom `GlobalState` implementation for application-wide state management.
- Component-based architecture for building the UI.
- Client-side routing for navigation between pages.
- No backend persistence; data is stored in memory using `GlobalState`.

**Design Patterns:**
- **Component Pattern:** Breaking down the UI into reusable React components (e.g., TODO Input, TODO List, TODO Item, Navigation, Pages).
- **Global State Pattern:** Centralized state management using the custom `GlobalState` context and hook.
- **Container/Presentational Pattern (Implicit):** Pages act as containers fetching data from GlobalState and passing it to presentational components.

**Component Relationships:**
- `App` component serves as the root.
- `GlobalStateProvider` wraps the application to provide state context.
- Navigation component handles routing.
- Page components (TODO Page, Home, About) are rendered based on the route.
- TODO Page composes `TODO Input`, `TODO List`.
- `TODO List` renders multiple `TODO Item` components.

**Critical Implementation Paths:**
- Implementing CRUD operations for TODO items within the `GlobalState`.
- Connecting UI components to `GlobalState` for displaying and modifying TODO data.
- Handling user interactions (add, edit, delete, toggle complete) and updating `GlobalState` accordingly.
- Implementing responsive design to ensure usability across devices.
