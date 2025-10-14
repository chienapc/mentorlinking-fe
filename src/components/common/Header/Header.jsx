import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, isModerator, useTheme } from '../../../contexts';
import { ThemeToggle } from '../';
import '../../../styles/components/Header.css';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    // Get authentication state from context
    const { isLoggedIn, roles, user } = useAuth();
    const { isDarkMode } = useTheme();
    const userIsModerator = isModerator(roles);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="main-header">
            <Navbar expand="lg" className="navbar-dark custom-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="brand-logo">
                        <span className="brand-text">MentorLink</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} to="/about" className="nav-link">Về MentorLink</Nav.Link>
                            <Nav.Link as={Link} to="/services" className="nav-link">Dịch vụ</Nav.Link>
                            <Nav.Link as={Link} to="/find-mentor" className="nav-link">Tìm Cố vấn</Nav.Link>
                            <Nav.Link as={Link} to="/become-mentor" className="nav-link">Trở thành Cố vấn</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="nav-link">Blog</Nav.Link>

                            {isLoggedIn ? (
                                <NavDropdown
                                    title={user?.name || "Tài khoản"}
                                    id="account-dropdown"
                                    className="account-dropdown"
                                    show={showDropdown}
                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}
                                >
                                    <NavDropdown.Item as={Link} to="/profile">Hồ sơ</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/settings">Cài đặt</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Đăng xuất</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <NavDropdown
                                    title="Tài khoản"
                                    id="account-dropdown"
                                    className="account-dropdown"
                                    show={showDropdown}
                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}
                                >
                                    <NavDropdown.Item as={Link} to="/login">Đăng nhập</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/register">Đăng ký</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/register-mentor">Đăng ký làm Cố vấn</NavDropdown.Item>
                                </NavDropdown>
                            )}

                            {/* <Button
                                variant="primary"
                                className="support-button ms-3"
                                onClick={handleLoginClick}
                            >
                                Hỗ trợ ngay
                            </Button> */}

                            {userIsModerator && (
                                <Nav.Link as={Link} to="/moderator" className="nav-link ms-2 px-3 border border-light rounded">
                                    <i className="bi bi-shield-check me-1"></i>
                                    Moderator
                                </Nav.Link>
                            )}

                            <div className="ms-3">
                                <ThemeToggle />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;