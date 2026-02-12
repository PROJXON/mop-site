# MOP (Momentum Office Party) Website

A modern networking event website built with Next.js for Projxon.

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS + DaisyUI
- **Language:** TypeScript
- **Containerization:** Docker
- **Deployment:** AWS (planned)

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Git

## Development Setup

### Option 1: Using Docker (Recommended)

1. Clone the repository:

```bash
   git clone <your-repo-url>
   cd mop-site
```

2. Start development server:

```bash
   docker-compose up dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Option 2: Local Development (Without Docker)

1. Install dependencies:

```bash
   npm install
```

2. Run development server:

```bash
   npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Preview

To see the optimized production build:

```bash
docker-compose up prod
```

Visit [http://localhost:3001](http://localhost:3001)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Docker Commands

```bash
# Start development
docker-compose up dev

# Start production preview
docker-compose up prod

# Rebuild containers
docker-compose up --build

# Stop containers
docker-compose down

# Remove containers and volumes
docker-compose down -v
```

## Project Structure

```
mop-site/
├── app/              # Next.js app directory
├── public/           # Static assets
├── components/       # React components
├── Dockerfile        # Production Docker config
├── Dockerfile.dev    # Development Docker config
└── docker-compose.yml
```

## Deployment

This project is configured for AWS deployment using:

- Docker containers
- Standalone Next.js output (optimized for containers)
- Multi-stage builds for minimal image size

## Contributing

1. Create a feature branch
2. Make your changes
3. Test with `docker-compose up dev`
4. Submit a pull request

## Team

- **Development Lead:** [Your Name]
- **UX/Marketing:** [Team Members]

## License

Private - Projxon
