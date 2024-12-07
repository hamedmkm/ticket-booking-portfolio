import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectPath, setRedirectPath] = useState(""); // حالت برای مسیر

  const handleLogin = async () => {
    try {
      // ارسال درخواست به API
      const response = await axios.post("http://localhost:3000/Auth", {
        email,
        password,
      });

      // بررسی پاسخ از سرور
      if (response.status === 200) {
        alert("ورود موفقیت‌آمیز بود!");
        setRedirectPath("/dashboard"); // تنظیم مسیر برای هدایت
      }
    } catch (err) {
      setError("ورود ناموفق بود. لطفاً اطلاعات خود را بررسی کنید.");
      console.error(err);
    }
  };

  // بررسی تغییر مسیر و رندر مجدد
  if (redirectPath) {
    window.location.href = redirectPath; // هدایت کاربر به مسیر جدید
    return null; // جلوگیری از رندر اضافی
  }

  return (
    <div className="font-bold">
      <Container maxWidth="xs" className="mt-20">
        <Typography
          variant="h5"
          className="text-center p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
        >
          ورود به سیستم
        </Typography>

        {/* نمایش پیام خطا */}
        {error && <Typography color="error" className="mb-4">{error}</Typography>}

        <TextField
          fullWidth
          label="ایمیل"
          variant="outlined"
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="رمز عبور"
          type="password"
          variant="outlined"
          className="mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          ورود
        </Button>
      </Container>
    </div>
  );
};

export default Login;
