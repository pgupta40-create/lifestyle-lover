# Copilot Instructions for AI Coding Agents

## Project Overview
Lifestyle Lover is a web application focused on health, wellness, and personal productivity. It integrates health/activity tracking, smart recommendations, and schedule management into a unified dashboard. The app is designed for both individual and social wellness experiences.

## Key Components & Data Flows
- **Health & Activity Tracking**: Integrates with iPhone Health and Mac Fitness apps. Handles step count, sleep, workouts, activity trends, menstrual cycles, and screen time. Data is synced and visualized in the dashboard.
- **Meal Logging & Recipes**: Users log meals and store recipes. Data is linked to health tracking for personalized recommendations.
- **Smart Recommendations**: Contextual nudges and suggestions based on user activity, weather, and location (Find My integration). Recommendations adapt to user preferences and current conditions.
- **Schedule Management**: Tracks work, school, and job commitments. All tasks are integrated for daily planning.
- **Dashboard**: Centralizes health metrics, recommendations, and schedule. Supports customization and daily insights.

## Developer Workflows
- **No build/test scripts detected**: If you add build tools, document them here. For now, focus on feature development and integration.
- **Data Integration**: When adding new health or schedule integrations, ensure data flows to the dashboard and is available for recommendations.
- **Personalization Modes**: Support both "Personal Lifestyle" (private, introspective) and "Social" (community, engaging) modes. UI and feature logic should adapt based on mode selection.

## Project-Specific Patterns
- **Integration-first**: Prioritize seamless data sync with external health and fitness apps. Use platform APIs where possible.
- **Contextual Recommendations**: Leverage user location, weather, and activity data for smart nudges. Example: Suggest outdoor activities when weather is good.
- **Unified Dashboard**: All new features should integrate with the dashboard for a consolidated user experience.
- **Privacy & Tone**: Respect user privacy, especially in Personal Lifestyle mode. Use calm, neutral language for private features and fun, engaging language for social features.

## Key Files & Directories
- `README.md`: High-level feature and architecture overview.
- `.github/copilot-instructions.md`: AI agent guidance (this file).
- Add references to new integration/config files as the project grows.

## Example Patterns
- When adding a new health metric, ensure it appears in the dashboard and is available for recommendations.
- For new nudges, check user mode and context before displaying.
- When integrating external APIs, document endpoints and data mapping in this file.

---
**Update this file as new workflows, integrations, or conventions are added.**
