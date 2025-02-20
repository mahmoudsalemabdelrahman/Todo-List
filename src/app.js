import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import todoRoutes from './routes/todoRoutes.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// الاتصال بقاعدة البيانات
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('تم الاتصال بـ MongoDB بنجاح 🟢');
} catch (error) {
  console.error('فشل الاتصال:', error.message);
  process.exit(1);
}

// إعدادات القالب
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// الروابط
app.use('/', todoRoutes);

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT} 🚀`);
});