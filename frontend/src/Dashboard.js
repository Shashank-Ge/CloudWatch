import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css'; // Import grid layout styles
import 'react-resizable/css/styles.css'; // Import resizable styles

import NodeStatusWidget from './NodeStatusWidget';
import { useTheme } from './ThemeContext'; // Import useTheme hook

// Wrap the component with WidthProvider
const ResponsiveGridLayout = WidthProvider(Responsive);

// Define a mapping of widget types to components
const widgetComponents = {
  'node-status': NodeStatusWidget,
  'placeholder': ({ children }) => {
    // No need to use useTheme directly here, styles are handled by index.css
    return (
      <div style={{
        border: '1px solid var(--card-border)', /* Use CSS variable */
        borderRadius: 8,
        padding: 16,
        background: 'var(--card-background)', /* Use CSS variable */
        height: '100%',
        overflow: 'auto',
        color: 'var(--text-color)' /* Use CSS variable */
      }}>
        {children}
      </div>
    );
  },
};

// Define the initial layout of the widgets
const initialLayout = [
  { i: 'node-status-1', x: 0, y: 0, w: 6, h: 3, type: 'node-status' },
  { i: 'placeholder-1', x: 6, y: 0, w: 6, h: 4, type: 'placeholder', children: (
      <>
        <h2>Widget Placeholder</h2>
        <p>This is where your monitoring widgets will appear.</p>
      </>
    )
  },
];

function Dashboard() {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  return (
    <div style={{ padding: 24 }}>
      <h1>CloudWatch Kubernetes Dashboard</h1>
      {/* Add a theme toggle button */}
      <button onClick={toggleTheme} style={{ marginBottom: 20 }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: initialLayout }} // Use 'lg' breakpoint for simplicity
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30} // Adjust row height as needed
        isDraggable={true} // Enable dragging
        isResizable={true} // Enable resizing
      >
        {initialLayout.map(item => {
          const WidgetComponent = widgetComponents[item.type];
          return (
            <div key={item.i} data-grid={item}>
              <WidgetComponent>
                {item.children}
              </WidgetComponent>
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
}

export default Dashboard;
