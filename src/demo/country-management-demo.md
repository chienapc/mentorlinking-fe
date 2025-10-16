# Demo: Hệ thống quản lý nước hỗ trợ du học

## 🎯 **Tổng quan thay đổi:**

### ✅ **Đã loại bỏ:**
- Section "Dịch vụ bạn muốn cung cấp" trong form đăng ký mentor

### ✅ **Đã thêm mới:**
- Component `CountrySelector` cho mentor chọn nước hỗ trợ
- Component `CountryManagement` cho admin quản lý
- `CountryService` cho API calls
- Tích hợp vào `RegisterMentorPage` và `AdminPage`

## 🔧 **Luồng hoạt động:**

### **1. Mentor đăng ký:**
```
1. Mentor điền form cá nhân → 
2. Chọn các nước từ danh sách có sẵn (18 nước phổ biến) →
3. Có thể đề xuất nước mới nếu không có trong danh sách →
4. Nước đề xuất sẽ có trạng thái "chờ duyệt" →
5. Submit form với approvedCountries
```

### **2. Admin quản lý:**
```
1. Vào Admin Panel → Tab "Quản lý các nước du học" →
2. Xem danh sách nước đã duyệt →
3. Xem đề xuất chờ duyệt từ mentors →
4. Duyệt/từ chối với lý do →
5. Thêm flag URL và mô tả chính thức
```

## 🎨 **UI/UX Features:**

### **CountrySelector Component:**
- ✅ Grid layout với flag icons
- ✅ Multi-select với visual feedback  
- ✅ Badge hiển thị đã chọn với remove option
- ✅ Modal để thêm nước tùy chỉnh
- ✅ Validation và error handling
- ✅ Responsive design

### **CountryManagement Component:**
- ✅ Table view với search và filter
- ✅ Separate tabs: "Chờ duyệt" vs "Đã duyệt"
- ✅ Modal chi tiết với thông tin đầy đủ
- ✅ Approval workflow với flag URL input
- ✅ Statistics và badges

## 📊 **Database Schema:**

### **Countries Table:**
```sql
CREATE TABLE countries (
    id INT PRIMARY KEY,
    code VARCHAR(3) UNIQUE,
    name VARCHAR(100),
    flag_url VARCHAR(500),
    description TEXT,
    is_approved BOOLEAN DEFAULT FALSE,
    suggested_by INT REFERENCES mentors(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

### **Mentor_Countries Junction:**
```sql
CREATE TABLE mentor_countries (
    mentor_id INT REFERENCES mentors(id),
    country_id INT REFERENCES countries(id),
    PRIMARY KEY (mentor_id, country_id)
);
```

## 🚀 **API Endpoints:**

### **Public:**
- `GET /api/countries` - Lấy danh sách nước đã duyệt
- `POST /api/countries/suggest` - Đề xuất nước mới

### **Admin:**
- `GET /api/countries/pending` - Lấy đề xuất chờ duyệt  
- `PUT /api/countries/{id}/approve` - Duyệt nước
- `DELETE /api/countries/{id}/reject` - Từ chối với lý do

### **Mentor:**
- `GET /api/mentors/{id}/countries` - Lấy nước của mentor
- `PUT /api/mentors/{id}/countries` - Cập nhật nước

## ✨ **Ưu điểm của giải pháp:**

### **1. Flexibility:**
- Mentor không bị giới hạn bởi dropdown cố định
- Admin có thể mở rộng danh sách dễ dàng
- Hệ thống tự động suggest từ community

### **2. Data Quality:**
- Admin review trước khi approve
- Có thể thêm flag và mô tả chuẩn
- Tránh duplicate và spam

### **3. User Experience:**
- Visual selection với flags
- Clear feedback về status
- Easy management interface

### **4. Scalability:**
- Dễ dàng thêm nước mới
- Không cần redeploy khi có nước mới
- Community-driven expansion

## 🎯 **Kết quả mong đợi:**

### **Trước:**
```
Mentor: [Dropdown cứng] → Chọn "Tư vấn du học"
Result: Không biết nước nào cụ thể
```

### **Sau:**
```
Mentor: [Country Grid] → Chọn "Mỹ, Canada, Úc" + Đề xuất "Na Uy"
Result: Mentee biết chính xác nước nào được hỗ trợ
Admin: Duyệt Na Uy → Thêm vào hệ thống
```

## 🔄 **Migration Path:**

1. **Phase 1:** Deploy new components (không ảnh hưởng hiện tại)
2. **Phase 2:** Update RegisterMentorPage để dùng CountrySelector  
3. **Phase 3:** Migrate existing mentor data (nếu có)
4. **Phase 4:** Add CountryManagement to AdminPage
5. **Phase 5:** Update MentorCard/DetailPage để display countries

Ready to test! 🎉