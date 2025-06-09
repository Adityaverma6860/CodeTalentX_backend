const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const { globalErrorHandler } = require("./src/utils/globalErrorhandler");
require("dotenv").config();

const connectDB = require("./src/config/dbConnect");
const userRoutes = require("./src/routes/userRoutes");
const attendanceRoutes = require('./src/routes/attendanceRoutes');
const examRoutes = require('./src/routes/examRoutes');
const reportCardRoutes = require('./src/routes/reportCardRoutes');
const feeRoutes = require('./src/routes/feeRoutes');
const messageRoutes = require('./src/routes/messageRoutes');
const meetingRoutes = require('./src/routes/meetingRoutes');
const timetableRoutes = require('./src/routes/timetableRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(globalErrorHandler);

// Enable CORS with credentials

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use(cors());

connectDB();


app.use("/users", userRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/exams",examRoutes);
app.use("/report-card", reportCardRoutes);
app.use("/fees", feeRoutes);
app.use('/messages', messageRoutes);
app.use('/meetings', meetingRoutes);
app.use('/timetable', timetableRoutes);

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
   