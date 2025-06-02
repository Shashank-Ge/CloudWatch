# CloudWatch Frontend

This is the frontend application for CloudWatch, built with React. It provides a modern, responsive dashboard for monitoring Kubernetes resources.

## Features

- Real-time data visualization
- Interactive dashboard components
- Responsive design
- Dark/Light theme support
- Resource utilization graphs
- Node status monitoring widgets

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
frontend/
├── public/           # Static files
├── src/             # Source files
│   ├── components/  # React components
│   ├── contexts/    # React contexts
│   ├── styles/      # CSS files
│   └── utils/       # Utility functions
└── package.json     # Dependencies and scripts
```

## Development

### Adding New Components

1. Create a new component in the `src/components` directory
2. Import and use the component in `App.js` or other components
3. Add any necessary styles in the component's CSS file

### Theme Customization

The application supports both light and dark themes. Theme-related code can be found in:
- `src/ThemeContext.js`
- `src/ThemeApplier.js`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
