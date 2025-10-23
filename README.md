# 🏥 Mini Hospital Appointment System

A complete web-based hospital management system with **role-based authentication** for doctors, patients, and administrators. Built with HTML, CSS, and JavaScript - no backend server required!

## 📋 Table of Contents

- [Features](#features)
- [User Types & Authentication](#user-types--authentication)
- [Demo Credentials](#demo-credentials)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🔐 Multi-User Authentication System

- **Role-Based Access**: Separate dashboards for Doctors, Patients, and Administrators
- **User Registration**: Self-registration for doctors and patients
- **Secure Login**: Email/username and password authentication
- **Session Management**: Maintains login state across pages
- **Access Control**: Each user type sees only relevant information

### 👨‍⚕️ Doctor Portal

- **Doctor Dashboard**: Overview of patients and appointments
- **Patient Management**: View and manage assigned patients
- **Appointment Schedule**: Manage daily and upcoming appointments
- **Patient History**: Track patient appointment history
- **Filter & Search**: Find patients and appointments quickly

### 🧍 Patient Portal

- **Patient Dashboard**: Personal appointment overview
- **Appointment Booking**: Schedule appointments with available doctors
- **Appointment History**: View past and upcoming appointments
- **Doctor Directory**: Browse available doctors and specialties
- **Appointment Management**: Cancel or reschedule appointments

### 👨‍💼 Admin Portal

- **System Overview**: Complete system statistics and monitoring
- **User Management**: Manage all doctors, patients, and admin accounts
- **Data Management**: Full access to doctors, patients, and appointments
- **System Administration**: Clear all data, manage system settings
- **Analytics Dashboard**: View system usage and statistics

### 📅 Appointment System

- **Smart Booking**: Real-time availability checking
- **Time Slot Management**: Predefined appointment slots
- **Conflict Prevention**: Prevents double-booking
- **Appointment Types**: General consultation, follow-up, emergency, check-up
- **Notes & History**: Detailed appointment tracking

### 🎨 Modern UI/UX

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Role-Based Navigation**: Different menus for each user type
- **Modern Styling**: Clean, professional design with gradients and shadows
- **Interactive Elements**: Hover effects, smooth animations, and transitions
- **Card-based Layout**: Organized content in visually appealing cards
- **Active Navigation**: Current page highlighting

## 🔐 User Types & Authentication

### Doctor Users

- **Access**: Doctor dashboard, patient management, appointment schedule
- **Features**: View assigned patients, manage appointments, track patient history
- **Registration**: Self-registration with medical license verification

### Patient Users

- **Access**: Patient dashboard, appointment booking, personal records
- **Features**: Book appointments, view history, manage personal information
- **Registration**: Self-registration with basic medical information

### Admin Users

- **Access**: Complete system administration and oversight
- **Features**: Manage all users, view system analytics, data management
- **Registration**: Admin accounts created by existing administrators

## 🚀 Demo Credentials

### Doctor Login

- **Email**: `dr.sarah@hospital.com`
- **Password**: `doctor123`
- **Features**: View patients, manage appointments, track patient history

### Patient Login

- **Email**: `john.doe@email.com`
- **Password**: `patient123`
- **Features**: Book appointments, view history, manage personal info

### Admin Login

- **Email**: `admin@hospital.com`
- **Password**: `admin123`
- **Features**: Complete system management and user oversight

## 🚀 Installation

1. **Clone or Download** the project files
2. **Extract** the files to your desired directory
3. **Open** `index.html` in your web browser
4. **No server required** - runs entirely in the browser

### File Structure

```
Mini Hospital Appointment System/
├── index.html                 # Multi-user login page
├── register.html              # User registration
├── doctor-dashboard.html      # Doctor main dashboard
├── doctor-patients.html       # Doctor patient management
├── doctor-appointments.html   # Doctor appointment management
├── patient-dashboard.html     # Patient main dashboard
├── patient-appointments.html  # Patient appointment history
├── patient-book.html          # Patient appointment booking
├── admin-dashboard.html       # Admin system overview
├── admin-users.html           # Admin user management
├── doctors.html               # Doctor management (admin)
├── patients.html              # Patient management (admin)
├── appointments.html          # Appointment management (admin)
├── home.html                  # Legacy admin dashboard
├── style.css                  # Complete responsive styling
├── script.js                  # Shared utilities and functions
└── README.md                  # This file
```

## 💻 Usage

### Getting Started

1. **Open** `index.html` in your browser
2. **Select user type** (Doctor/Patient/Admin)
3. **Login** with demo credentials or register new account
4. **Navigate** through your personalized dashboard

### Doctor Workflow

1. **Login** as doctor → Access doctor dashboard
2. **View patients** → See assigned patients and their history
3. **Manage appointments** → View and manage your schedule
4. **Track progress** → Monitor patient appointments and notes

### Patient Workflow

1. **Login** as patient → Access patient dashboard
2. **Browse doctors** → View available doctors and specialties
3. **Book appointment** → Schedule with preferred doctor
4. **Manage appointments** → View history and upcoming appointments

### Admin Workflow

1. **Login** as admin → Access admin dashboard
2. **Monitor system** → View overall statistics and activity
3. **Manage users** → Add, edit, or remove user accounts
4. **System maintenance** → Manage all data and settings

## 🏗️ Project Structure

### Authentication System

- **Multi-user login** with role-based access control
- **User registration** for doctors and patients
- **Session management** with localStorage
- **Security validation** for each user type

### Dashboard System

- **Doctor Portal**: Patient and appointment management
- **Patient Portal**: Booking and personal record management
- **Admin Portal**: Complete system administration
- **Responsive design** for all screen sizes

### Data Management

- **localStorage integration** for data persistence
- **Role-based data filtering** for security
- **Real-time updates** across all interfaces
- **Data validation** and error handling

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **localStorage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach
- **No Frameworks**: Pure HTML, CSS, and JavaScript

## 📚 API Documentation

### localStorage Keys

- `users`: Array of user objects (doctors, patients, admins)
- `doctors`: Array of doctor objects
- `patients`: Array of patient objects
- `appointments`: Array of appointment objects
- `currentUser`: Currently logged-in user object
- `isLoggedIn`: Login state flag

### Data Structures

#### User Object

```javascript
{
  id: number,
  fullName: string,
  email: string,
  phone: string,
  password: string,
  userType: "doctor" | "patient" | "admin",
  dateRegistered: string,
  // Doctor-specific fields
  specialty?: string,
  licenseNumber?: string,
  // Patient-specific fields
  age?: number,
  medicalHistory?: string
}
```

#### Doctor Object

```javascript
{
  id: number,
  name: string,
  specialty: string,
  email: string,
  phone: string,
  description: string,
  avatar: string,
  dateAdded: string
}
```

#### Patient Object

```javascript
{
  id: number,
  name: string,
  age: number,
  phone: string,
  dateAdded: string
}
```

#### Appointment Object

```javascript
{
  id: number,
  patient: string,
  doctor: string,
  date: string,
  time: string,
  appointmentType: string,
  notes: string,
  dateBooked: string
}
```

## 🔧 Customization

### Adding New User Types

1. **Update login page** to include new user type button
2. **Create dashboard** for new user type
3. **Add navigation** and access control
4. **Update authentication** logic in script.js

### Adding New Features

1. **New Pages**: Create HTML file and add navigation link
2. **New Data Types**: Add localStorage key and data structure
3. **New Forms**: Follow existing form patterns and validation
4. **New Styles**: Add CSS classes following existing naming conventions

## 🐛 Troubleshooting

### Common Issues

1. **Login Issues**: Check browser console for debug messages
2. **Data Not Persisting**: Ensure localStorage is enabled
3. **Navigation Problems**: Verify user type and authentication
4. **Responsive Issues**: Test on different screen sizes

### Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Full responsive support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on all user types
5. Submit a pull request

### Development Guidelines

- Follow existing code style and patterns
- Test all user types and roles
- Ensure responsive design works
- Validate all forms and user inputs
- Add comments for complex functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as a comprehensive learning project for HTML, CSS, and JavaScript fundamentals with advanced role-based authentication.

## 🙏 Acknowledgments

- Modern CSS techniques and responsive design
- JavaScript ES6+ features and best practices
- localStorage API and client-side data management
- Web accessibility guidelines
- User experience design principles

---

**Note**: This is a client-side only application. All data is stored locally in the browser and will be lost if localStorage is cleared or if you use a different browser/device. For production use, consider implementing a backend database system.
