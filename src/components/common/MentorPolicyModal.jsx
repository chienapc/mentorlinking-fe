import React, { useState, useEffect } from 'react';
import {
    Modal,
    Button,
    Spinner,
    Alert,
    Card,
    Badge,
    Accordion
} from 'react-bootstrap';
import {
    FaFileContract,
    FaCheckCircle,
    FaExclamationTriangle,
    FaCalendarAlt
} from 'react-icons/fa';
import { instance } from '../../api/axios';

const MentorPolicyModal = ({ show, onHide, onAccept }) => {
    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasAccepted, setHasAccepted] = useState(false);

    useEffect(() => {
        if (show) {
            fetchPolicies();
        }
    }, [show]);

    const fetchPolicies = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await instance.get('/api/mentor-policies/active');

            if (response.respCode === "0") {
                setPolicies(response.data);
            } else {
                setError('Không thể tải chính sách. Vui lòng thử lại.');
            }
        } catch (err) {
            setError('Có lỗi xảy ra khi tải chính sách. Vui lòng thử lại.');
            console.error('Error fetching mentor policies:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleAccept = () => {
        setHasAccepted(true);
        if (onAccept) {
            onAccept();
        }
        onHide();
    };

    const handleClose = () => {
        setHasAccepted(false);
        onHide();
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title className="d-flex align-items-center">
                    <FaFileContract className="me-2" />
                    Chính sách và Điều khoản dành cho Mentor
                </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {loading ? (
                    <div className="text-center py-4">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-2 text-muted">Đang tải chính sách...</p>
                    </div>
                ) : error ? (
                    <Alert variant="danger">
                        <Alert.Heading className="h6">
                            <FaExclamationTriangle className="me-1" />
                            Có lỗi xảy ra
                        </Alert.Heading>
                        <p className="mb-2">{error}</p>
                        <Button variant="outline-danger" size="sm" onClick={fetchPolicies}>
                            Thử lại
                        </Button>
                    </Alert>
                ) : policies.length === 0 ? (
                    <Alert variant="info">
                        <Alert.Heading className="h6">Thông báo</Alert.Heading>
                        <p className="mb-0">Hiện tại chưa có chính sách nào được kích hoạt.</p>
                    </Alert>
                ) : (
                    <>
                        <Alert variant="warning" className="mb-4">
                            <div className="d-flex align-items-start">
                                <FaExclamationTriangle className="me-2 mt-1 flex-shrink-0" />
                                <div>
                                    <strong>Quan trọng:</strong> Vui lòng đọc kỹ tất cả các chính sách dưới đây
                                    trước khi đăng ký làm mentor. Việc đăng ký đồng nghĩa với việc bạn đồng ý
                                    tuân thủ các điều khoản này.
                                </div>
                            </div>
                        </Alert>

                        <div className="mb-3">
                            <Badge bg="info" className="mb-2">
                                <FaCalendarAlt className="me-1" />
                                Cập nhật lần cuối: {formatDate(Math.max(...policies.map(p => new Date(p.updatedAt))))}
                            </Badge>
                            <p className="text-muted small mb-3">
                                Tổng cộng có <strong>{policies.length}</strong> điều khoản chính sách
                            </p>
                        </div>

                        <Accordion defaultActiveKey="0" flush>
                            {policies.map((policy, index) => (
                                <Accordion.Item key={policy.id} eventKey={index.toString()}>
                                    <Accordion.Header>
                                        <div className="d-flex align-items-center w-100">
                                            <Badge bg="primary" className="me-2">
                                                {index + 1}
                                            </Badge>
                                            <strong>{policy.title}</strong>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Card className="border-0 bg-light">
                                            <Card.Body>
                                                <div
                                                    className="policy-content"
                                                    dangerouslySetInnerHTML={{
                                                        __html: policy.content.replace(/\n/g, '<br/>')
                                                    }}
                                                />

                                                <hr className="my-3" />

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">
                                                        <FaCalendarAlt className="me-1" />
                                                        Tạo: {formatDate(policy.createdAt)}
                                                    </small>
                                                    <Badge bg="success" className="d-flex align-items-center">
                                                        <FaCheckCircle className="me-1" />
                                                        Đang áp dụng
                                                    </Badge>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                        <Alert variant="success" className="mt-4 mb-0">
                            <div className="d-flex align-items-start">
                                <FaCheckCircle className="me-2 mt-1 flex-shrink-0 text-success" />
                                <div>
                                    <strong>Xác nhận:</strong> Tôi đã đọc và hiểu rõ tất cả các chính sách trên.
                                    Tôi cam kết tuân thủ các điều khoản này trong quá trình hoạt động trên nền tảng.
                                </div>
                            </div>
                        </Alert>
                    </>
                )}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
                <div>
                    <small className="text-muted">
                        Bằng cách nhấn "Tôi đồng ý", bạn xác nhận đã đọc và chấp nhận các chính sách
                    </small>
                </div>
                <div>
                    <Button variant="secondary" onClick={handleClose} className="me-2">
                        Hủy đăng ký
                    </Button>
                    <Button
                        variant="success"
                        onClick={handleAccept}
                        disabled={loading || error || policies.length === 0}
                        className="d-flex align-items-center"
                    >
                        <FaCheckCircle className="me-2" />
                        Tôi đồng ý và tiếp tục
                    </Button>
                </div>
            </Modal.Footer>

            <style jsx>{`
                .policy-content {
                    line-height: 1.6;
                    color: #495057;
                }
                
                .policy-content h1, 
                .policy-content h2, 
                .policy-content h3 {
                    color: #212529;
                    margin-top: 1rem;
                    margin-bottom: 0.5rem;
                }
                
                .policy-content ul, 
                .policy-content ol {
                    margin-bottom: 1rem;
                    padding-left: 1.5rem;
                }
                
                .policy-content li {
                    margin-bottom: 0.25rem;
                }
                
                .accordion-button:not(.collapsed) {
                    background-color: #e3f2fd;
                    color: #1976d2;
                }
                
                .accordion-button:focus {
                    box-shadow: 0 0 0 0.25rem rgba(25, 118, 210, 0.25);
                }
            `}</style>
        </Modal>
    );
};

export default MentorPolicyModal;