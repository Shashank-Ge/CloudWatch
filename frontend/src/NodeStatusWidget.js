// src/NodeStatusWidget.js
import React from 'react';
// No need to import useTheme here if using CSS variables in index.css
// import { useTheme } from './ThemeContext';

function NodeStatusWidget() {
  // const { theme } = useTheme(); // If you needed theme-specific logic

  return (
    <div style={{
      border: '1px solid var(--node-status-healthy-border)', /* Use CSS variable */
      borderRadius: 8,
      padding: 16,
      background: 'var(--node-status-healthy-bg)', /* Use CSS variable */
      marginBottom: 16,
      color: 'var(--text-color)' /* Use CSS variable */
    }}>
      <h3>Node Status</h3>
      <p>All nodes are healthy.</p>
    </div>
  );
}

export default NodeStatusWidget;