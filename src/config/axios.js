import axios from "axios";

const URL = "http://localhost:8080"; // BE url

// Hàm chung để lấy token
const getToken = () => localStorage.getItem("token");

// Hàm cấu hình axios chung cho cả authInstance và instance
const createAxiosInstance = (isAuthRequired = false) => {
  const instance = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Gắn interceptor cho request nếu yêu cầu xác thực
  if (isAuthRequired) {
    instance.interceptors.request.use((config) => {
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    }, (error) => Promise.reject(error));
  }

  return instance;
};


// authInstance cho các API không cần token (đăng nhập, đăng ký...)
const authInstance = createAxiosInstance(false);

// instance cho các API yêu cầu xác thực (có token)
const instance = createAxiosInstance(true);

// Response interceptor cho cả hai instance
const handleAuthError = (error) => {
  if (error.response && error.response?.data?.code === 1006) {
    console.error("Unauthorized! Redirecting to login...");
    localStorage.clear();
    // Redirect to login page hoặc logout logic ở đây nếu cần
  }
  return error.response?.data;
};

// Thêm interceptor response cho cả instance và authInstance
authInstance.interceptors.response.use((response) => response.data, handleAuthError);
instance.interceptors.response.use((response) => response.data, handleAuthError);

export { instance, authInstance };
