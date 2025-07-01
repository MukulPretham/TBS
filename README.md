# 🚌 TBS - Travel Booking System

> A comprehensive bus ticket booking platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features real-time booking management, automated notifications, and AWS EC2 deployment. My first major project after learning React.js.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/MukulPretham/TBS.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## 🎯 Platform Features

### For Passengers
- **🎫 Easy Ticket Booking** - Search and book bus tickets with real-time availability
- **📱 Booking Management** - View, modify, and cancel existing bookings
- **📧 Email Notifications** - Automated booking confirmations and updates via email
- **📲 SMS Alerts** - Real-time SMS notifications for booking status and reminders
- **🔐 User Authentication** - Secure account registration and login system
- **📊 Booking History** - Complete record of past and upcoming journeys

### For System
- **☁️ Cloud Deployment** - Hosted on AWS EC2 for reliability and scalability
- **🔗 RESTful API** - Well-structured API endpoints for all booking operations
- **⚡ Real-time Updates** - Live seat availability and booking status
- **🛡️ Secure Transactions** - Protected booking and payment processing
- **📈 Performance Monitoring** - Cloud-based monitoring and logging

## 🛠️ Tech Stack - MERN

### Frontend
- **Framework**: React.js with JavaScript/JSX
- **Styling**: CSS3 / Bootstrap / Tailwind CSS
- **State Management**: React Context API / useState hooks
- **HTTP Client**: Axios for API communication
- **Routing**: React Router DOM

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with bcrypt encryption
- **Email Service**: Nodemailer for email notifications
- **SMS Service**: Twilio for SMS integration

### Cloud Infrastructure
- **Hosting**: AWS EC2 instance
- **Database**: MongoDB Atlas / Local MongoDB
- **Process Manager**: PM2 for production deployment
- **SSL**: Let's Encrypt for HTTPS

## 🏗️ Project Structure

```
TBS/
├── client/                   # React.js Frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/           # Application pages/routes
│   │   ├── services/        # API service calls
│   │   ├── context/         # React Context providers
│   │   └── utils/           # Utility functions
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── server/                  # Node.js + Express Backend
│   ├── controllers/         # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── middleware/         # Custom middleware
│   ├── config/             # Database config
│   └── utils/              # Helper functions
├── package.json            # Backend dependencies
└── README.md
```

## 💡 Key Features

### Booking System
- **React-based UI** - Interactive seat selection with real-time availability updates
- **Component-based Architecture** - Reusable React components for booking flow
- **State Management** - React Context API for global state management
- **Form Handling** - Controlled components with validation
- **Dynamic Routing** - React Router for seamless navigation

### Communication System
- **Email Integration** - Nodemailer for booking confirmations and updates
- **SMS Notifications** - Twilio integration for real-time alerts
- **Template System** - Dynamic email and SMS templates
- **Async Operations** - Promise-based notification handling

### MERN Integration
- **RESTful API** - Express.js backend serving React frontend
- **MongoDB Integration** - Mongoose ODM for database operations
- **JWT Authentication** - Token-based auth across React and Express
- **CORS Configuration** - Proper cross-origin setup for React-Express communication

## 🗄️ MongoDB Database Schema

### Mongoose Models

```javascript
// User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true });

// Bus Schema
const busSchema = new mongoose.Schema({
  busNumber: { type: String, required: true, unique: true },
  busType: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  amenities: [String],
  operator: { type: mongoose.Schema.Types.ObjectId, ref: 'Operator' },
}, { timestamps: true });

// Booking Schema
const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  passengers: [{
    name: String,
    age: Number,
    gender: String
  }],
  seatNumbers: [Number],
  journeyDate: { type: Date, required: true },
  bookingStatus: { type: String, enum: ['confirmed', 'cancelled', 'pending'], default: 'pending' },
  totalAmount: { type: Number, required: true },
  bookingReference: { type: String, unique: true },
}, { timestamps: true });

// Route Schema
const routeSchema = new mongoose.Schema({
  fromCity: { type: String, required: true },
  toCity: { type: String, required: true },
  distance: Number,
  duration: Number,
  price: { type: Number, required: true },
  departureTime: String,
  arrivalTime: String,
}, { timestamps: true });
```

## 🔗 API Endpoints

### Authentication
```
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/verify       # Email verification
POST   /api/auth/forgot       # Password reset
```

### Booking Management
```
GET    /api/buses/search      # Search available buses
POST   /api/bookings          # Create new booking
GET    /api/bookings/:id      # Get booking details
PUT    /api/bookings/:id      # Update booking
DELETE /api/bookings/:id      # Cancel booking
GET    /api/bookings/user/:id # Get user bookings
```

### Notifications
```
POST   /api/notifications/email    # Send email notification
POST   /api/notifications/sms      # Send SMS notification
GET    /api/notifications/status   # Check delivery status
```

## ☁️ AWS Deployment

### Infrastructure Setup
- **EC2 Instance**: Ubuntu 20.04 LTS with Node.js runtime
- **Security Groups**: Configured for HTTP/HTTPS and SSH access
- **Elastic IP**: Static IP address for consistent access
- **SSL Certificate**: Let's Encrypt SSL for secure HTTPS

### Deployment Process
```bash
# Connect to EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Clone and setup application
git clone https://github.com/MukulPretham/TBS.git
cd TBS
npm install

# Set up environment variables
sudo nano .env

# Start application with PM2
npm install -g pm2
pm2 start server.js --name "tbs-app"
pm2 startup
pm2 save
```

### Environment Variables
```env
NODE_ENV=production
PORT=3000
DB_CONNECTION_STRING=mongodb://localhost:27017/tbs
JWT_SECRET=your-jwt-secret
EMAIL_SERVICE_API_KEY=your-email-service-key
SMS_SERVICE_API_KEY=your-sms-service-key
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
```

## 🚦 Available Scripts

### Development
```bash
# Start both frontend and backend
npm run dev

# Start backend server only
npm run server

# Start React frontend only (from client folder)
cd client && npm start

# Build React app for production
cd client && npm run build
```

### Production
```bash
# Build application
npm run build

# Start production server
npm start

# Run tests
npm test

# Deploy to AWS
npm run deploy
```

## 🔧 Development Setup

### Prerequisites
- Node.js 16.x or higher
- MongoDB 4.4+ / PostgreSQL 13+
- AWS CLI configured
- Email service account (SendGrid/Nodemailer)
- SMS service account (Twilio/AWS SNS)

### Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MukulPretham/TBS.git
   cd TBS
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies (if separate)
   cd client && npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configurations
   ```

4. **Start the database**
   ```bash
   # For MongoDB
   sudo systemctl start mongod
   
   # For PostgreSQL
   sudo systemctl start postgresql
   ```

5. **Run the application**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:5000/api`

## 📊 Monitoring & Analytics

- **AWS CloudWatch** - Server monitoring and logging
- **Application Metrics** - Booking conversion rates and user analytics
- **Error Tracking** - Real-time error monitoring and alerts
- **Performance Monitoring** - API response times and database queries

## 🛡️ Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Encryption** - bcrypt hashing for user passwords
- **Input Validation** - Comprehensive input sanitization
- **Rate Limiting** - API rate limiting to prevent abuse
- **CORS Configuration** - Proper cross-origin resource sharing setup

## 🔮 Roadmap

### ✅ Completed Features
- [x] Complete MERN stack implementation
- [x] React.js frontend with component-based architecture
- [x] Express.js RESTful API backend
- [x] MongoDB database with Mongoose ODM
- [x] User authentication with JWT
- [x] Email notifications with Nodemailer
- [x] SMS integration with Twilio
- [x] Booking management system
- [x] AWS EC2 deployment with PM2

### 🚧 In Development
- [ ] Payment gateway integration
- [ ] Mobile application
- [ ] Real-time bus tracking
- [ ] Admin dashboard for operators

### 📋 Planned Features
- [ ] Multi-language support
- [ ] Loyalty program
- [ ] Social media integration
- [ ] Advanced analytics dashboard
- [ ] Microservices architecture
- [ ] Docker containerization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- AWS for cloud infrastructure
- Email and SMS service providers
- Open source community for tools and libraries

---

**TBS - Travel Booking System** - Your journey starts here! 🚌✨

*My first major MERN stack project - connecting passengers with reliable bus travel experiences.*
