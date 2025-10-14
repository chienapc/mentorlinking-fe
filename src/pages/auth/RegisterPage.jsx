import { Container, Form, Button, Card, InputGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/components/Auth.css';

const RegisterPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #a0e7e5 0%, #b4f8c8 50%, #a0e7e5 100%)',
                minHeight: '80vh',
                width: '100%',
                display: 'flex',
                fontFamily: 'Inter, sans-serif',
                padding: '0'
            }}
        >
            <Container fluid className="p-0 m-0">
                <Row className="g-0 h-100 auth-container">
                    <Col lg={6} className="d-flex align-items-center justify-content-center p-4">
                        <Card className="border-0 shadow-lg rounded-4 w-100 login-card" style={{ maxWidth: '600px' }}>
                            <Card.Body className="p-4 p-md-5">
                                <h3 className="text-center text-secondary fw-normal mb-4">Đăng ký tài khoản</h3>

                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-secondary small">Họ và tên</Form.Label>
                                                <InputGroup className="auth-input-group">
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-person text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Nguyễn Văn A"
                                                        className="auth-input"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-secondary small">Số điện thoại</Form.Label>
                                                <InputGroup className="auth-input-group">
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-telephone text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="tel"
                                                        placeholder="0912345678"
                                                        className="auth-input"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="text-secondary small">Email</Form.Label>
                                        <InputGroup className="auth-input-group">
                                            <InputGroup.Text className="bg-light border-0">
                                                <i className="bi bi-envelope text-secondary"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                placeholder="example@email.com"
                                                className="auth-input"
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="text-secondary small">Mật khẩu</Form.Label>
                                        <InputGroup className="auth-input-group">
                                            <InputGroup.Text className="bg-light border-0">
                                                <i className="bi bi-lock text-secondary"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="password"
                                                placeholder="Tối thiểu 8 ký tự"
                                                className="auth-input"
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-secondary small">Xác nhận mật khẩu</Form.Label>
                                        <InputGroup className="auth-input-group">
                                            <InputGroup.Text className="bg-light border-0">
                                                <i className="bi bi-lock-fill text-secondary"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="password"
                                                placeholder="Nhập lại mật khẩu"
                                                className="auth-input"
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            id="terms"
                                            label="Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật"
                                            className="text-secondary small"
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 py-2 mb-3 fw-medium login-btn"
                                    >
                                        ĐĂNG KÝ
                                    </Button>

                                    <div className="text-center text-secondary small mt-3">
                                        Đã có tài khoản?{' '}
                                        <Link to="/login" className="text-primary text-decoration-none">
                                            Đăng nhập ngay
                                        </Link>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} className="d-none d-lg-block right-panel" style={{ background: 'linear-gradient(135deg, #71c9ce 0%, #a6e3e9 100%)' }}>
                        <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center p-5">
                            <div className="logo-container mb-4">
                                <img
                                    src="/logo.svg"
                                    alt="MentorLink"
                                    className="img-fluid mentor-logo"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/150x150/71c9ce/ffffff?text=MentorLink';
                                    }}
                                />
                            </div>
                            <h2 className="text-dark mb-4 display-4">Bắt đầu hành trình</h2>
                            <p className="text-dark mb-5 lead">
                                Tạo tài khoản để kết nối với các mentor hàng đầu trong lĩnh vực của bạn
                            </p>
                            <div className="bg-white bg-opacity-25 p-4 rounded-3">
                                <h5 className="text-dark mb-3">Tại sao nên đăng ký MentorLink?</h5>
                                <ul className="text-start text-dark list-unstyled">
                                    <li className="mb-2"><i className="bi bi-check2-circle me-2 text-success"></i> Kết nối với mentor chuyên ngành</li>
                                    <li className="mb-2"><i className="bi bi-check2-circle me-2 text-success"></i> Đặt lịch dễ dàng và linh hoạt</li>
                                    <li className="mb-2"><i className="bi bi-check2-circle me-2 text-success"></i> Học hỏi kinh nghiệm thực tiễn</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterPage;
