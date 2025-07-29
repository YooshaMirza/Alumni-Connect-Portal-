# 🌐 Live Demo
https://alumniconnectproject.netlify.app/

---

# 🎓 Alumni Connect Portal

A comprehensive platform designed to connect alumni, foster networking, and build lasting relationships within educational communities. This modern web application provides a centralized space for alumni to interact, share opportunities, and stay engaged with their alma mater.

[![GitHub](https://img.shields.io/badge/📂_Source_Code-GitHub-black?style=for-the-badge)](https://github.com/YooshaMirza/Alumni-Connect-Portal-.git)
[![Netlify Status](https://api.netlify.com/api/v1/badges/clever-chebakia-42bf58/deploy-status)](https://app.netlify.com/sites/clever-chebakia-42bf58/deploys)

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite&logoColor=white)

## 🌟 Features

### Core Features ✅

- **🔐 User Authentication** - Secure login/signup with session management
- **👥 Alumni Directory** - Searchable database of verified alumni profiles
- **🔍 Advanced Search & Filter** - Filter by batch, branch, job title, location, and skills
- **📝 Profile Management** - Comprehensive personal and professional profiles
- **💬 Community Feed** - Interactive forum for posts, discussions, and networking
- **🏷️ Sorting & Tagging** - Organize content with tags and sorting options
- **📱 Mobile Responsive** - Optimized for all screen sizes and devices

### UI/UX Highlights

- **Modern Design System** - Clean, professional interface with consistent styling
- **Smooth Animations** - Subtle transitions and micro-interactions
- **Intuitive Navigation** - Easy-to-use interface with clear visual hierarchy
- **Accessibility** - WCAG compliant design with proper contrast ratios

## 🎨 Design System

### Color Palette

- **Primary**: Navy Blue (#1E40AF) - Trust and professionalism
- **Secondary**: Teal (#0D9488) - Growth and connection
- **Accent**: Gold (#F59E0B) - Achievement and excellence
- **Success**: Green (#16A34A) - Positive actions
- **Warning**: Amber (#F59E0B) - Important notices
- **Error**: Red (#DC2626) - Critical alerts

### Typography

- **Font Family**: Inter - Modern, readable sans-serif
- **Headings**: Semibold weights with tight tracking
- **Body Text**: Regular weight with optimal line spacing

## 📸 Screenshots

### Landing Page
*Modern hero section with compelling call-to-action and feature highlights*

### Alumni Directory
*Comprehensive directory with advanced filtering and search capabilities*

### Community Feed
*Interactive feed for sharing updates, opportunities, and engaging with the community*

### Profile Pages
*Detailed alumni profiles showcasing professional journey and achievements*

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

### State Management
- **Zustand** - Lightweight state management

### Build Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing

### Utilities
- **date-fns** - Date manipulation
- **clsx** - Conditional class names
- **tailwind-merge** - Tailwind class merging

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YooshaMirza/Alumni-Connect-Portal-.git
   cd Alumni-Connect-Portal-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Live Demo
🌐 **[View Live Demo](https://clever-chebakia-42bf58.netlify.app/)**

The application is deployed and ready to use! Experience all features including user authentication, alumni directory, and community feed.

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, Card, etc.)
│   ├── layout/         # Layout components (Header, Footer)
│   ├── auth/           # Authentication components
│   ├── alumni/         # Alumni-specific components
│   └── feed/           # Community feed components
├── pages/              # Page components
├── store/              # State management (Zustand stores)
├── types/              # TypeScript type definitions
├── lib/                # Utility functions
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Features Breakdown

### Authentication System
- Secure user registration and login
- Session management
- Password validation
- Form validation with error handling

### Alumni Directory
- Grid-based layout with profile cards
- Advanced filtering by multiple criteria
- Real-time search functionality
- Responsive design for all devices

### Community Feed
- Create and share posts
- Like and comment system
- Tag-based organization
- Image attachment support
- Real-time interactions

### Profile Management
- Comprehensive profile editing
- Professional experience tracking
- Education history
- Skills and achievements
- Social media integration

## 🎨 UI Components

### Design Principles
- **Consistency** - Uniform spacing, colors, and typography
- **Accessibility** - WCAG 2.1 AA compliance
- **Performance** - Optimized images and lazy loading
- **Responsiveness** - Mobile-first design approach

### Component Library
- **Buttons** - Multiple variants with loading states
- **Forms** - Accessible inputs with validation
- **Cards** - Flexible content containers
- **Navigation** - Responsive header with mobile menu
- **Avatars** - Profile images with fallbacks

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Touch-friendly interface
- Optimized navigation
- Readable typography
- Fast loading times

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code consistency
- Prettier for code formatting
- Component-based architecture

### Performance Optimizations
- Code splitting with React.lazy
- Image optimization
- Efficient state management
- Minimal bundle size

## 🚀 Deployment

The application is designed to be deployed on modern hosting platforms:

- **Netlify** - Recommended for static hosting (Currently deployed at: https://clever-chebakia-42bf58.netlify.app/)
- **Vercel** - Excellent for React applications
- **GitHub Pages** - Free hosting option

### Current Deployment
🚀 **Live Application**: [https://clever-chebakia-42bf58.netlify.app/](https://clever-chebakia-42bf58.netlify.app/)

The application is automatically deployed from the main branch using Netlify's continuous deployment.

### Environment Variables
```env
VITE_APP_TITLE=Alumni Connect Portal
VITE_API_URL=your-api-url
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration** - Modern university websites and professional networks
- **Icons** - Lucide React icon library
- **Images** - Pexels for high-quality stock photography
- **Fonts** - Google Fonts (Inter family)
---

<div align="center">
  <p>Built with ❤️ for connecting alumni worldwide</p>
  <p>
    <a href="#-alumni-connect-portal">Back to Top</a> •
    <a href="https://github.com/YooshaMirza/Alumni-Connect-Portal-.git">GitHub</a> •
    <a href="https://clever-chebakia-42bf58.netlify.app/">Live Demo</a>
  </p>
</div>
