# Demo: Mentor Policy Modal Integration

## 🎯 **Tóm tắt thay đổi:**

### ✅ **Component đã tạo:**
1. **MentorPolicyModal** (`src/components/common/MentorPolicyModal.jsx`)
2. **TestMentorPolicyModal** (`src/test/TestMentorPolicyModal.jsx`)

### ✅ **Tích hợp vào RegisterMentorPage:**
1. Added policy acceptance section với Alert component
2. Added state management cho policy modal
3. Added validation trong handleSubmit
4. Updated submit button để reflect policy status

## 🔧 **Luồng hoạt động:**

### **1. Mentor Registration Flow:**
```
1. Mentor điền form đăng ký →
2. Thấy section "Chính sách và Điều khoản" (warning alert) →
3. Click "Đọc chính sách mentor" →
4. Modal mở ra với spinner loading →
5. API call GET /api/mentor-policies/active →
6. Hiển thị accordion các chính sách →
7. Mentor đọc và click "Tôi đồng ý và tiếp tục" →
8. Alert chuyển thành success (xanh) →
9. Submit button chuyển thành "✅ Đăng ký" →
10. Form có thể submit được
```

### **2. Validation Logic:**
```javascript
// Trong handleSubmit():
if (!hasPolicyAccepted) {
    alert('Vui lòng đọc và chấp nhận chính sách mentor trước khi đăng ký!');
    setShowPolicyModal(true); // Tự động mở modal
    return;
}
```

## 🎨 **UI/UX Features:**

### **Policy Alert Section:**
- ⚠️ **Warning state**: Màu vàng, icon warning, text "Chưa chấp nhận"
- ✅ **Success state**: Màu xanh, icon check, text "Đã chấp nhận"
- 🔄 **Dynamic button**: "Đọc chính sách" → "Xem lại chính sách"

### **Modal Features:**
- 📱 **Responsive**: Size `lg`, centered, max-height với scroll
- 🔒 **Backdrop static**: Không đóng khi click outside
- 🔄 **Loading states**: Spinner khi fetch API
- 📋 **Accordion layout**: Dễ đọc từng policy
- 🎨 **Rich formatting**: HTML content, date formatting
- ⚠️ **Error handling**: Alert nếu API fail với retry button

### **Submit Button Enhancement:**
- **Before accept**: `Đọc chính sách và đăng ký →`
- **After accept**: `✅ Đăng ký →` (màu xanh)

## 📊 **API Integration:**

### **Endpoint:**
```javascript
GET /api/mentor-policies/active
```

### **Response Structure:**
```javascript
{
    "requestDateTime": "2025-10-15T23:25:48.650190",
    "respCode": "0", 
    "description": "Get active mentor policies successfully",
    "data": [
        {
            "id": 1,
            "title": "Mentor cam kết cung cấp thông tin chính xác.",
            "content": "Mentor cam kết cung cấp thông tin chính xác.",
            "isActive": true,
            "createdAt": "2025-10-15T19:08:25",
            "updatedAt": "2025-10-15T19:08:26"
        }
    ]
}
```

### **Error Handling:**
- ✅ Network errors
- ✅ API response errors  
- ✅ Empty policy list
- ✅ Retry mechanism

## 🔍 **Component Details:**

### **MentorPolicyModal Props:**
```javascript
<MentorPolicyModal
    show={boolean}           // Show/hide modal
    onHide={function}        // Close modal callback
    onAccept={function}      // Accept policy callback
/>
```

### **State Management:**
```javascript
const [showPolicyModal, setShowPolicyModal] = useState(false);
const [hasPolicyAccepted, setHasPolicyAccepted] = useState(false);
```

## ✨ **Ưu điểm của giải pháp:**

### **1. User Experience:**
- Clear visual feedback về policy status
- Không thể submit mà chưa đọc policy
- Tự động mở modal nếu chưa accept
- Easy access để review policy sau khi accept

### **2. Admin Friendly:**
- Dynamic content từ API
- Có thể update policy mà không cần redeploy
- Rich text formatting support
- Version tracking với created/updated dates

### **3. Technical:**
- Reusable component
- Proper error handling
- Loading states
- Responsive design
- Accessible modal behavior

## 🚀 **Demo Usage:**

### **Test Component:**
```bash
# Để test riêng component
import TestMentorPolicyModal from './test/TestMentorPolicyModal';
```

### **Integration Test:**
```bash
# Vào trang đăng ký mentor
localhost:5173/register-mentor
# 1. Scroll xuống phần "Chính sách và Điều khoản"
# 2. Click "Đọc chính sách mentor"
# 3. Verify modal mở ra và call API
# 4. Click "Tôi đồng ý và tiếp tục"
# 5. Verify alert chuyển thành xanh
# 6. Verify submit button update
```

## 🎯 **Kết quả mong đợi:**

Mentor registration process giờ đây **bắt buộc** phải đọc và chấp nhận chính sách, đảm bảo compliance và transparency cho platform! 🎉