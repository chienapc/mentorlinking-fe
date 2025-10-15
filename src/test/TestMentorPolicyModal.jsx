import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { MentorPolicyModal } from '../components/common';

const TestMentorPolicyModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [hasAccepted, setHasAccepted] = useState(false);

    const handleAccept = () => {
        setHasAccepted(true);
        alert('Đã chấp nhận chính sách!');
    };

    return (
        <Container className="py-5">
            <Row>
                <Col lg={6} className="mx-auto">
                    <Card>
                        <Card.Header>
                            <h4 className="mb-0">Test Mentor Policy Modal</h4>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <p className="mb-4">
                                Click nút bên dưới để mở modal chính sách mentor
                            </p>

                            <Button
                                variant="primary"
                                onClick={() => setShowModal(true)}
                                className="mb-3"
                            >
                                Mở Modal Chính Sách
                            </Button>

                            {hasAccepted && (
                                <div className="alert alert-success">
                                    ✅ Đã chấp nhận chính sách mentor!
                                </div>
                            )}

                            <div className="mt-4 text-start">
                                <h6>Expected Features:</h6>
                                <ul>
                                    <li>✅ Gọi API /api/mentor-policies/active</li>
                                    <li>✅ Hiển thị loading spinner khi fetch</li>
                                    <li>✅ Accordion layout cho các chính sách</li>
                                    <li>✅ HTML content được render đúng</li>
                                    <li>✅ Date formatting tiếng Việt</li>
                                    <li>✅ Modal backdrop static (không đóng khi click outside)</li>
                                    <li>✅ Button "Tôi đồng ý" trigger callback</li>
                                    <li>✅ Error handling nếu API fail</li>
                                    <li>✅ Responsive trên mobile</li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>

                    <MentorPolicyModal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        onAccept={handleAccept}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default TestMentorPolicyModal;