# Community-Based Procurement Platform (CBPP)

A comprehensive digital ecosystem for managing community-based procurement processes in Nigeria and across Africa. 
The platform enables community-based organizations (CBOs) to participate in government procurement processes up to ₦50 million in value, in alignment with President Bola Ahmed Tinubu's Renewed Hope Initiative.

## 🌟 Features

- **Multi-Tenant Architecture**: Supports Federal, State, and LGA levels across multiple African countries
- **Role-Based Access Control**: Eight distinct user roles with tailored dashboards and workflows
- **CBO Registration & Management**: Digital onboarding and qualification system
- **Procurement Process Management**: End-to-end procurement workflow
- **Project Implementation Tracking**: Real-time progress monitoring
- **Payment & Financial Management**: Secure payment processing and tracking
- **Analytics & Reporting**: Comprehensive dashboards and visualizations
- **Multi-Language Support**: Built-in internationalization
- **Mobile-First Design**: Progressive Web App capabilities
- **Interactive Demo System**: Role-based demo experiences for testing and training

## 👥 User Roles & Access

The platform supports eight distinct user roles, each with unique dashboards and capabilities:

### 🏛️ **Super Admin**
- **Route**: `/app/dashboard`
- **Capabilities**: Full system administration, user management, system configuration
- **Features**: Complete platform oversight, analytics, user administration

### 🔧 **BPP Admin**
- **Route**: `/bpp_admin/dashboard`
- **Capabilities**: Tender management, quota settings, LLM reports, system configuration
- **Features**: Tender oversight, quota management, configuration settings, analytics

### 🏗️ **Contractor**
- **Route**: `/contractor/dashboard`
- **Capabilities**: Bid submission, contract management, payment tracking
- **Features**: Tender applications, contract oversight, financial management, training

### 📊 **Evaluator**
- **Route**: `/evaluator/dashboard`
- **Capabilities**: Bid evaluation, scoring, geolocation tracking
- **Features**: Evaluation tools, scoring system, location-based assessments

### 📋 **Procurement Officer (PCO)**
- **Route**: `/procurement_officer/dashboard`
- **Capabilities**: Procurement process management, tender oversight
- **Features**: Process management, tender administration, reporting

### 👥 **CBO Manager**
- **Route**: `/cbo_manager/dashboard`
- **Capabilities**: Community organization management, member oversight
- **Features**: Member management, project oversight, community reporting

### 📈 **Project Manager**
- **Route**: `/project_manager/dashboard`
- **Capabilities**: Project implementation tracking, timeline management
- **Features**: Project oversight, timeline tracking, implementation reporting

### 🛡️ **Regulator**
- **Route**: `/regulator/dashboard`
- **Capabilities**: Compliance oversight, regulatory monitoring
- **Features**: Compliance tracking, oversight tools, regulatory reporting

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

### 🎮 Demo Access

Visit `/demo` to access interactive role-based demos:
- **Active Demos**: Super Admin, BPP Admin, Contractor, Evaluator
- **Coming Soon**: PCO, CBO Manager, Project Manager, Regulator

Each demo provides full access to role-specific features and mock data.

## 🛠️ Technology Stack

- **Frontend Framework**: React.js with TypeScript
- **UI Library**: Material-UI (MUI)
- **State Management**: React Context
- **Routing**: React Router with role-based navigation
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
│   ├── dashboard/  # Dashboard-specific components
│   └── navigation/ # Navigation components
├── config/        # Configuration files
│   ├── menuItems.ts           # Navigation menu configuration
│   └── contractorMenuItems.ts # Contractor-specific menus
├── contexts/      # React context providers
│   ├── AppContext.tsx         # Main application context
│   ├── LanguageContext.tsx    # Internationalization context
│   └── NavigationContext.tsx  # Navigation state management
├── layouts/       # Role-based page layouts
│   ├── MainLayout.tsx         # Default layout
│   ├── BPPAdminLayout.tsx     # BPP Admin layout
│   ├── ContractorLayout.tsx   # Contractor layout
│   ├── EvaluatorLayout.tsx    # Evaluator layout
│   └── ...                    # Other role-specific layouts
├── locales/       # Internationalization files
├── microsite/     # Public-facing microsite
│   ├── pages/     # Microsite pages (Home, Demo, etc.)
│   └── components/ # Microsite components
├── pages/         # Role-based page components
│   ├── bpp_admin/ # BPP Admin pages
│   ├── contractor/ # Contractor pages
│   ├── evaluator/  # Evaluator pages
│   └── ...         # Other role-specific pages
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

**Supported Languages:**
- English (en)
- Hausa (ha)
- Igbo (ig)
- Pidgin (pcm)
- Yoruba (yo)

## 📊 Data Visualization

The platform uses two charting libraries:
- Recharts for complex data visualizations
- Chart.js for simpler charts and graphs

## 🔐 Security & Authentication

- **Role-Based Access Control**: Strict role-based routing and permissions
- **Mock Authentication**: Demo system with role-specific user data
- **Route Protection**: Guarded routes based on user roles
- **Session Management**: Local storage-based user sessions
- **HTTPS enforcement**
- **Content Security Policy (CSP)**
- **XSS protection**
- **CSRF protection**

## 🎯 Key Features by Role

### Contractor Dashboard
- Registration status tracking
- Tender application management
- Contract oversight
- Payment tracking
- Training materials access

### BPP Admin Dashboard
- Tender management
- Quota configuration
- System analytics
- LLM report generation
- Platform configuration

### Evaluator Dashboard
- Bid evaluation tools
- Scoring system
- Geolocation tracking
- Assessment management
- Evaluation reporting

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

---

*Last Updated: December 2024*  
*Platform Version: 2.0*  
*Role-Based Architecture: Implemented*
