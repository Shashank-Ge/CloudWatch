# CloudWatch: Kubernetes Resource Monitoring Dashboard

A comprehensive monitoring solution for Kubernetes clusters that provides real-time insights into cluster resources, node status, and performance metrics.

## Project Structure

```
CloudWatch/
├── backend/           # Backend services (Go and Node.js)
├── frontend/          # React-based dashboard UI
├── database/          # Database schemas and migrations
├── monitoring/        # Monitoring configurations
├── docs/             # Project documentation
└── scripts/          # Utility scripts
```

## Features

- Real-time Kubernetes cluster monitoring
- Resource utilization tracking
- Node status monitoring
- Performance metrics visualization
- Interactive dashboard interface

## Getting Started

### Prerequisites

- Kubernetes cluster
- Node.js (v14 or higher)
- Go (v1.16 or higher)
- Docker

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shashank-Ge/CloudWatch.git
   cd CloudWatch
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend/node-service
   npm install
   
   cd ../go-service
   go mod download
   
   # Install frontend dependencies
   cd ../../frontend
   npm install
   ```

3. Start the services:
   ```bash
   # Start backend services
   cd backend/node-service
   npm start
   
   cd ../go-service
   go run main.go
   
   # Start frontend
   cd ../../frontend
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
