# Community-Based Procurement Platform (CBPP)

A comprehensive digital ecosystem for managing community-based procurement processes in Nigeria and across Africa. The platform enables community-based organizations (CBOs) to participate in government procurement processes up to ₦50 million in value, in alignment with President Bola Ahmed Tinubu's Renewed Hope Initiative.

## 🌟 Features

- **Multi-Tenant Architecture**: Supports Federal, State, and LGA levels across multiple African countries
- **CBO Registration & Management**: Digital onboarding and qualification system
- **Procurement Process Management**: End-to-end procurement workflow
- **Project Implementation Tracking**: Real-time progress monitoring
- **Payment & Financial Management**: Secure payment processing and tracking
- **Analytics & Reporting**: Comprehensive dashboards and visualizations
- **Multi-Language Support**: Built-in internationalization
- **Mobile-First Design**: Progressive Web App capabilities

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/cbpp-fe.git
   cd cbpp-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:3001`

## 🛠️ Technology Stack

- **Frontend Framework**: React.js with TypeScript
- **UI Library**: Material-UI (MUI)
- **State Management**: React Context
- **Data Fetching**: TanStack Query
- **Form Handling**: Formik with Yup validation
- **Internationalization**: i18next
- **Charts & Visualizations**: Recharts and Chart.js
- **Build Tool**: Vite
- **Testing**: Vitest

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── config/        # Configuration files
├── contexts/      # React context providers
├── layouts/       # Page layouts
├── locales/       # Internationalization files
├── microsite/     # Public-facing microsite
├── pages/         # Page components
├── services/      # API and service functions
└── utils/         # Utility functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 🌐 Internationalization

The platform supports multiple languages through i18next. Language files are located in the `src/locales` directory.

## 📊 Data Visualization

The platform uses two charting libraries:
- Recharts for complex data visualizations
- Chart.js for simpler charts and graphs

## 🔐 Security

- HTTPS enforcement
- Content Security Policy (CSP)
- XSS protection
- CSRF protection
- Secure authentication flow

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For support, please contact the development team or raise an issue in the repository.
