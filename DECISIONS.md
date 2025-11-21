# Tech Decisions for lifestyle-lover

## Purpose
Personal scheduling, habit tracking, and lifestyle management for class use. Two modes: calm/self and quirky/social.

## Frontend
- Modern, interactive UI
- Framework: React (recommended for speed, flexibility, and Vercel support)
- Responsive design for desktop and mobile
- Custom branding, colors, and unique experience

## Backend & Auth
- Use Firebase for authentication and data storage (no need to build backend yourself)
- Real-time updates not required; Firebase handles sync within seconds
- Notifications: Supported via Firebase Cloud Messaging (optional for future)

## Social Features
- Mostly personal use, but some social features (sharing, limited interaction) can be added

## Hosting
- Free hosting on Vercel
- Default Vercel domain is sufficient

## Analytics & Testing
- Not needed for now

## Accessibility
- Publicly accessible for professor and classmates

## Timeline
- 1 week to launch

---

These decisions ensure a fast, modern, and easy-to-deploy website tailored to your needs. Next steps: scaffold the project, set up Firebase, and begin UI design.