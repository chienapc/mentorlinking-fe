import { Container, Form, Button, Card, InputGroup, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../shared/contexts';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Auth.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Simple validation
        if (!email || !password) {
            setError('Vui lòng nhập email và mật khẩu');
            return;
        }

        // In a real app, you'd call an API here
        // For demo purposes, we'll simulate successful login
        if (email === 'moderator@mentorlink.com' && password === 'password') {
            login(
                { id: 1, email, name: 'Quản trị viên' },
                ['moderator']
            );
            navigate('/moderator');
        } else {
            login(
                { id: 2, email, name: 'Người dùng' },
                ['user']
            );
            navigate('/');
        }
    };
    return (
        <div
            style={{
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
                        <Card className="border-0 shadow-lg rounded-4 w-100 login-card" style={{ maxWidth: '500px' }}>
                            <Card.Body className="p-4 p-md-5">
                                <h3 className="text-center text-secondary fw-normal mb-4">Đăng nhập bằng tài khoản</h3>

                                {error && (
                                    <Alert variant="danger" className="mb-3">
                                        {error}
                                    </Alert>
                                )}

                                <Form onSubmit={handleLogin}>
                                    <InputGroup className="mb-3 auth-input-group">
                                        <InputGroup.Text className="bg-light border-0">
                                            <i className="bi bi-envelope text-secondary"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            className="auth-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3 auth-input-group">
                                        <InputGroup.Text className="bg-light border-0">
                                            <i className="bi bi-lock text-secondary"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            className="auth-input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </InputGroup>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            label="Remember me"
                                            className="text-secondary"
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 py-2 mb-3 fw-medium login-btn"
                                    >
                                        ĐĂNG NHẬP
                                    </Button>

                                    <div className="alert alert-info text-center small mb-3">
                                        <p className="mb-1"><strong>Đăng nhập Moderator:</strong></p>
                                        <p className="mb-0">Email: moderator@mentorlink.com<br />Password: password</p>
                                    </div>

                                    <div className="text-center mb-3">
                                        <a href="#" className="forget-password text-decoration-none small">
                                            Quên mật khẩu?
                                        </a>
                                    </div>

                                    <div className="divider">
                                        <span className="divider-text">hoặc</span>
                                    </div>

                                    <Button
                                        variant="outline-secondary"
                                        className="w-100 py-2 mb-3 google-btn"
                                    >
                                        <i className="bi bi-google me-2"></i>
                                        Đăng nhập với Google
                                    </Button>

                                    <div className="text-center text-secondary small">
                                        Chưa có tài khoản?{' '}
                                        <Link to="/register" className="text-primary text-decoration-none">
                                            Đăng ký ngay
                                        </Link>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} className="d-none d-lg-block right-panel">
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
                            <h2 className="mb-4 display-4">Chào mừng đến với <br /> MentorLink</h2>
                            <p className="mb-5 lead">
                                Nền tảng kết nối mentee và mentor hiệu quả nhất dành cho bạn
                            </p>
                            <div className="stats-container d-flex justify-content-center gap-5 mt-5">
                                <div className="text-center">
                                    <h3 className="fw-bold">500+</h3>
                                    <p>Mentor</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="fw-bold">1000+</h3>
                                    <p>Học viên</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="fw-bold">50+</h3>
                                    <p>Chuyên ngành</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
