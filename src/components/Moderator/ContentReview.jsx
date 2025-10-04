import React, { useState } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FiCheck, FiX } from 'react-icons/fi';

const ContentReview = () => {
    const [contentItems, setContentItems] = useState([
        {
            id: 1,
            title: 'Blog: Cách trở thành một mentor hiệu quả',
            author: 'nguyenvana@gmail.com',
            date: '30/09/2025',
            status: 'pending',
            type: 'blog'
        },
        {
            id: 2,
            title: 'FAQ: Làm thế nào để đặt lịch với mentor?',
            author: 'admin@mentorlink.com',
            date: '29/09/2025',
            status: 'pending',
            type: 'faq'
        },
        {
            id: 3,
            title: 'Feedback: Cải thiện trải nghiệm đặt lịch',
            author: 'tranbaoquang@gmail.com',
            date: '28/09/2025',
            status: 'approved',
            type: 'feedback'
        },
        {
            id: 4,
            title: 'Blog: 5 kỹ năng cần thiết cho người muốn tìm mentor',
            author: 'lethihoa@gmail.com',
            date: '27/09/2025',
            status: 'pending',
            type: 'blog'
        }
    ]);

    const handleApprove = (id) => {
        setContentItems(contentItems.map(item =>
            item.id === id ? { ...item, status: 'approved' } : item
        ));
    };

    const handleReject = (id) => {
        setContentItems(contentItems.map(item =>
            item.id === id ? { ...item, status: 'rejected' } : item
        ));
    };

    return (
        <Card className="content-review-panel">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Kiểm duyệt nội dung</h5>
                <div>
                    <Badge bg="warning" className="me-2">
                        {contentItems.filter(item => item.status === 'pending').length} chờ duyệt
                    </Badge>
                    <Button variant="outline-primary" size="sm">Xem tất cả</Button>
                </div>
            </Card.Header>
            <Card.Body>
                <div className="filter-bar mb-3 d-flex">
                    <Button variant="outline-secondary" size="sm" className="me-2">Tất cả</Button>
                    <Button variant="outline-secondary" size="sm" className="me-2">Blog</Button>
                    <Button variant="outline-secondary" size="sm" className="me-2">FAQ</Button>
                    <Button variant="outline-secondary" size="sm">Feedback</Button>
                </div>

                <div className="content-list">
                    {contentItems.map(item => (
                        <div
                            key={item.id}
                            className={`content-item ${item.status === 'pending' ? 'pending' : item.status === 'approved' ? 'approved' : 'rejected'}`}
                        >
                            <div className="d-flex justify-content-between">
                                <h6>{item.title}</h6>
                                <Badge bg={
                                    item.type === 'blog' ? 'info' :
                                        item.type === 'faq' ? 'primary' : 'secondary'
                                }>
                                    {item.type.toUpperCase()}
                                </Badge>
                            </div>
                            <p className="text-muted small">Đăng bởi: {item.author} - {item.date}</p>

                            {item.status === 'pending' ? (
                                <div className="d-flex justify-content-end">
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleReject(item.id)}
                                    >
                                        <FiX className="me-1" /> Từ chối
                                    </Button>
                                    <Button
                                        variant="success"
                                        size="sm"
                                        onClick={() => handleApprove(item.id)}
                                    >
                                        <FiCheck className="me-1" /> Phê duyệt
                                    </Button>
                                </div>
                            ) : (
                                <p className={`small ${item.status === 'approved' ? 'text-success' : 'text-danger'}`}>
                                    {item.status === 'approved' ? 'Đã phê duyệt' : 'Đã từ chối'}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </Card.Body>
            <Card.Footer className="bg-light">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">Hiển thị 4 trên 12 mục</span>
                    <div className="pagination-controls">
                        <Button variant="light" size="sm" className="me-1">←</Button>
                        <Button variant="primary" size="sm" className="me-1">1</Button>
                        <Button variant="light" size="sm" className="me-1">2</Button>
                        <Button variant="light" size="sm" className="me-1">3</Button>
                        <Button variant="light" size="sm">→</Button>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default ContentReview;