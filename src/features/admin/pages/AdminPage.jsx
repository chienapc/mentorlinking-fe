import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Badge } from 'react-bootstrap';
import {
    FaUsers, FaBlog, FaUserCog, FaChartBar,
    FaCalendarAlt, FaHistory, FaCommentDots,
    FaBullhorn, FaCog, FaKey, FaShieldAlt
} from 'react-icons/fa';

// Import admin components
import {
    UserManagement,
    ContentManagement,
    MentorApproval,
    FeedbackManagement,
    BookingManagement,
    PaymentHistory,
    ReviewManagement,
    BannerManagement,
    SystemSettings,
    RolePermissions,
    Analytics
} from '../components';

import './AdminPage.css';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('users');

    const menuItems = [
        {
            key: 'users',
            icon: <FaUsers />,
            title: 'Quản lý người dùng',
            badge: '156',
            component: <UserManagement />
        },
        {
            key: 'content',
            icon: <FaBlog />,
            title: 'Quản lý nội dung',
            badge: '12',
            component: <ContentManagement />
        },
        {
            key: 'mentor-approval',
            icon: <FaUserCog />,
            title: 'Duyệt/xác thực mentor',
            badge: '8',
            component: <MentorApproval />
        },
        {
            key: 'feedback',
            icon: <FaCommentDots />,
            title: 'Quản lý phản hồi & báo cáo',
            badge: '5',
            component: <FeedbackManagement />
        },
        {
            key: 'booking',
            icon: <FaCalendarAlt />,
            title: 'Quản lý đặt lịch & lịch hẹn',
            badge: '23',
            component: <BookingManagement />
        },
        {
            key: 'payment',
            icon: <FaHistory />,
            title: 'Quản lý lịch sử thanh toán/giao dịch',
            badge: null,
            component: <PaymentHistory />
        },
        {
            key: 'reviews',
            icon: <FaCommentDots />,
            title: 'Quản lý quyền & vai trò',
            badge: '3',
            component: <ReviewManagement />
        },
        {
            key: 'banners',
            icon: <FaBullhorn />,
            title: 'Cấu hình hệ thống',
            badge: null,
            component: <BannerManagement />
        },
        {
            key: 'analytics',
            icon: <FaChartBar />,
            title: 'Báo cáo & thống kê',
            badge: null,
            component: <Analytics />
        },
        {
            key: 'roles',
            icon: <FaShieldAlt />,
            title: 'Quản lý quyền & vai trò',
            badge: null,
            component: <RolePermissions />
        },
        {
            key: 'settings',
            icon: <FaCog />,
            title: 'Cấu hình hệ thống',
            badge: null,
            component: <SystemSettings />
        }
    ];

    return (
        <Container fluid className="admin-page py-4">
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="page-title mb-1">Quản trị hệ thống</h2>
                            <p className="text-muted mb-0">Tổng quan và quản lý toàn bộ hệ thống MentorLink</p>
                        </div>
                        <div className="admin-stats d-flex gap-3">
                            <div className="stat-item text-center">
                                <div className="stat-number text-primary">1,234</div>
                                <div className="stat-label">Người dùng</div>
                            </div>
                            <div className="stat-item text-center">
                                <div className="stat-number text-success">89</div>
                                <div className="stat-label">Mentor</div>
                            </div>
                            <div className="stat-item text-center">
                                <div className="stat-number text-warning">156</div>
                                <div className="stat-label">Đặt lịch</div>
                            </div>
                            <div className="stat-item text-center">
                                <div className="stat-number text-info">23</div>
                                <div className="stat-label">Chờ duyệt</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                <Row>
                    <Col lg={3} md={4} className="mb-4">
                        <Card className="admin-sidebar">
                            <Card.Body className="p-0">
                                <div className="sidebar-header">
                                    <h6 className="mb-0">
                                        <FaCog className="me-2" />
                                        MENU QUẢN TRỊ
                                    </h6>
                                </div>
                                <Nav variant="pills" className="flex-column admin-nav">
                                    {menuItems.map((item) => (
                                        <Nav.Item key={item.key}>
                                            <Nav.Link
                                                eventKey={item.key}
                                                className="d-flex align-items-center justify-content-between py-3 px-3"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-icon me-3">{item.icon}</span>
                                                    <span className="nav-text">{item.title}</span>
                                                </div>
                                                {item.badge && (
                                                    <span className="nav-badge">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Card.Body>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="mt-3 quick-actions">
                            <Card.Body>
                                <h6 className="text-muted mb-3">THAO TÁC NHANH</h6>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-primary btn-sm">
                                        <FaUsers className="me-2" />
                                        Thêm người dùng mới
                                    </button>
                                    <button className="btn btn-outline-success btn-sm">
                                        <FaUserCog className="me-2" />
                                        Duyệt mentor
                                    </button>
                                    <button className="btn btn-outline-warning btn-sm">
                                        <FaBlog className="me-2" />
                                        Kiểm duyệt blog
                                    </button>
                                    <button className="btn btn-outline-info btn-sm">
                                        <FaBullhorn className="me-2" />
                                        Tạo banner mới
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* System Status */}
                        <Card className="mt-3 system-status">
                            <Card.Body>
                                <h6 className="text-muted mb-3">TRẠNG THÁI HỆ THỐNG</h6>
                                <div className="status-item d-flex justify-content-between mb-2">
                                    <span>Máy chủ</span>
                                    <span className="badge bg-success">Hoạt động</span>
                                </div>
                                <div className="status-item d-flex justify-content-between mb-2">
                                    <span>Cơ sở dữ liệu</span>
                                    <span className="badge bg-success">Bình thường</span>
                                </div>
                                <div className="status-item d-flex justify-content-between mb-2">
                                    <span>Email Service</span>
                                    <span className="badge bg-warning">Chậm</span>
                                </div>
                                <div className="status-item d-flex justify-content-between">
                                    <span>Payment Gateway</span>
                                    <span className="badge bg-success">Hoạt động</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={9} md={8}>
                        <Tab.Content>
                            {menuItems.map((item) => (
                                <Tab.Pane key={item.key} eventKey={item.key}>
                                    {item.component}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default AdminPage;