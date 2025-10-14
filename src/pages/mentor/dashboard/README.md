# Mentor Dashboard - Giao diện Mentor

## Tổng quan

Đây là giao diện dashboard hoàn chỉnh cho Mentor trong hệ thống MentorLinking, được xây dựng dựa trên database schema và requirements đã cung cấp. Giao diện được thiết kế thuần (presentation only) không chứa logic xử lý.

## Cấu trúc thư mục

```
src/pages/mentor/dashboard/
├── MentorDashboard.jsx              # Component chính của dashboard
├── MentorDashboard.css              # Styles cho toàn bộ dashboard
├── components/
│   ├── MentorOverview.jsx           # Trang tổng quan
│   ├── ScheduleManagement.jsx       # Quản lý lịch làm việc  
│   ├── BookingManagement.jsx        # Quản lý đặt lịch
│   ├── ReviewManagement.jsx         # Quản lý đánh giá
│   ├── ServiceManagement.jsx        # Quản lý dịch vụ
│   └── ContentManagement.jsx        # Quản lý nội dung/blog
```

## Các tính năng chính

### 1. Tổng quan (MentorOverview)
- **Thống kê tổng quan**: Thu nhập, số buổi hoàn thành, đánh giá trung bình
- **Biểu đồ**: Thu nhập theo tháng, phân bố trạng thái booking
- **Lịch sắp tới**: Danh sách các buổi tư vấn sắp diễn ra
- **Hoạt động gần đây**: Timeline các hoạt động của mentor
- **Mục tiêu tháng**: Progress bar theo dõi các mục tiêu

### 2. Quản lý lịch làm việc (ScheduleManagement)
- **Tạo lịch làm việc**: Modal để tạo khung giờ trống
- **Quản lý time slots**: Morning, Afternoon, Evening
- **Calendar view**: Hiển thị lịch tuần với các slot trống/đã đặt
- **Thống kê**: Khung giờ khả dụng, đã đặt, tỷ lệ lấp đầy

### 3. Quản lý đặt lịch (BookingManagement)
- **Tab navigation**: Pending, Confirmed, Completed, Cancelled
- **Chi tiết booking**: Thông tin học viên, dịch vụ, thời gian
- **Actions**: Xác nhận, từ chối, hoàn thành booking
- **Modal chi tiết**: Hiển thị đầy đủ thông tin và cho phép thao tác

### 4. Quản lý đánh giá (ReviewManagement)
- **Danh sách đánh giá**: Tất cả reviews từ học viên
- **Thống kê đánh giá**: Rating trung bình, phân bố sao
- **Phản hồi đánh giá**: Modal để reply lại comments
- **Toggle publish**: Ẩn/hiện đánh giá công khai

### 5. Quản lý dịch vụ (ServiceManagement)
- **Grid layout**: Hiển thị services dạng cards
- **CRUD operations**: Tạo, sửa, xóa dịch vụ
- **Thống kê dịch vụ**: Số lượt đặt, rating cho từng service
- **Toggle status**: Kích hoạt/tạm dừng dịch vụ

### 6. Quản lý nội dung (ContentManagement)
- **Blog management**: Tạo, sửa, xóa bài viết
- **Trạng thái**: Draft, Pending, Published
- **Kiểm duyệt**: Hiển thị trạng thái moderation
- **Thống kê**: Popular posts, view counts, content stats

## Database mapping

Các component được thiết kế dựa trên database schema:

- **users table**: Thông tin mentor (fullname, rating, number_of_booking, etc.)
- **mentor_services table**: Quản lý các dịch vụ của mentor
- **schedule table**: Lịch làm việc với time_slots
- **booking table**: Các lượt đặt lịch từ customers
- **review table**: Đánh giá từ học viên
- **blog table**: Bài viết/content của mentor
- **time_slots table**: Khung giờ (Morning, Afternoon, Evening)
- **status table**: Các trạng thái (Active, Pending, Completed, etc.)

## Tính năng UI/UX

### Responsive Design
- **Mobile-first**: Hoạt động tốt trên mọi thiết bị
- **Bootstrap Grid**: Responsive layout với breakpoints
- **Collapsible sidebar**: Trên mobile, sidebar có thể thu gọn

### Theme Support
- **Dark/Light mode**: Tương thích với theme system hiện có
- **CSS Variables**: Sử dụng CSS custom properties
- **Consistent styling**: Theo design system của project

### Interactive Elements
- **Smooth animations**: Hover effects, transitions
- **Loading states**: Skeleton loaders, progress indicators  
- **Toast notifications**: Success/error messages
- **Modal dialogs**: Confirmation, form inputs

## Cách sử dụng

### 1. Cài đặt dependencies
Các package cần thiết đã có sẵn trong project:
- react-bootstrap
- bootstrap-icons
- chart.js & react-chartjs-2

### 2. Truy cập dashboard
```
http://localhost:3000/mentor/dashboard
```

### 3. Navigation
Dashboard sử dụng tab-based navigation:
- Click vào các menu item bên trái để chuyển đổi
- Mỗi tab có các thao tác và dữ liệu riêng biệt

## Mock Data

Tất cả components đều sử dụng mock data để demo:
- Dữ liệu được hardcode trong từng component
- Có thể dễ dàng thay thế bằng API calls
- Cấu trúc data tuân theo database schema

## Customization

### Colors & Styling
Sửa file `MentorDashboard.css` để thay đổi:
- Primary/secondary colors
- Card styles, spacing
- Animation durations

### Layout
Có thể thay đổi:
- Sidebar width
- Statistics cards layout
- Table column configurations

### Features
Thêm tính năng mới:
- Tạo component mới trong `/components`
- Import và thêm vào `MentorDashboard.jsx`
- Thêm menu item trong sidebar

## Notes

- **Không có backend logic**: Chỉ là giao diện thuần
- **Accessible**: Tuân thủ WCAG guidelines
- **Performance**: Optimized với React best practices
- **Maintainable**: Code structure rõ ràng, dễ maintain

## Future Enhancements

Có thể mở rộng thêm:
- Real-time notifications
- Advanced charts/analytics  
- File upload capabilities
- Video call integration
- Chat/messaging system