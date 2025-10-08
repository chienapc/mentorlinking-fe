import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MentorRegister.css';

const RegisterMentorPage = () => {
    // State for form data
    const [formData, setFormData] = useState({
        personalInfo: {
            name: '',
            email: '',
            birthDate: '',
            location: '',
            phone: '',
            title: '',
            education: '',
            service: '',
            bio: ''
        }
    });

    // State for form sections
    const [educations, setEducations] = useState([{
        school: '',
        major: '',
        startDate: '',
        endDate: '',
        certificate: null
    }]);
    const [experiences, setExperiences] = useState([{
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        proof: null
    }]);
    const [testScores, setTestScores] = useState([{
        testName: '',
        score: '',
        certificate: null
    }]);

    // Handlers for adding items
    const addEducation = () => {
        setEducations([...educations, {}]);
    };

    const addExperience = () => {
        setExperiences([...experiences, {}]);
    };

    const addTestScore = () => {
        setTestScores([...testScores, {}]);
    };

    // Handlers for removing items
    const removeEducation = (index) => {
        if (educations.length > 1) {
            const newEducations = [...educations];
            newEducations.splice(index, 1);
            setEducations(newEducations);
        }
    };

    const removeExperience = (index) => {
        if (experiences.length > 1) {
            const newExperiences = [...experiences];
            newExperiences.splice(index, 1);
            setExperiences(newExperiences);
        }
    };

    const removeTestScore = (index) => {
        if (testScores.length > 1) {
            const newTestScores = [...testScores];
            newTestScores.splice(index, 1);
            setTestScores(newTestScores);
        }
    };

    // Handle personal info changes
    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            personalInfo: {
                ...formData.personalInfo,
                [name]: value
            }
        });
    };

    // Handle education changes
    const handleEducationChange = (index, field, value) => {
        const updatedEducations = [...educations];
        updatedEducations[index] = {
            ...updatedEducations[index],
            [field]: value
        };
        setEducations(updatedEducations);
    };

    // Handle experience changes
    const handleExperienceChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index] = {
            ...updatedExperiences[index],
            [field]: value
        };
        setExperiences(updatedExperiences);
    };

    // Handle test score changes
    const handleTestScoreChange = (index, field, value) => {
        const updatedTestScores = [...testScores];
        updatedTestScores[index] = {
            ...updatedTestScores[index],
            [field]: value
        };
        setTestScores(updatedTestScores);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send the data to your API
        const mentorData = {
            personalInfo: formData.personalInfo,
            educations,
            experiences,
            testScores
        };

        console.log('Form submitted:', mentorData);
        // You would call your API here
        // authService.registerMentor(mentorData)...
    };

    return (
        <div className="mentor-register-container">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} md={11} sm={12}>
                        <div className="text-center mb-5">
                            <h1 className="fw-bold display-4 page-title">Đăng ký làm Cố vấn</h1>
                            <p className="lead page-subtitle">Hãy chia sẻ kinh nghiệm và kiến thức của bạn để giúp đỡ những người khác</p>
                        </div>

                        <Card className="card-mentor">
                            <div className="card-header-gradient-primary">
                                <h2 className="fs-4 fw-bold mb-0">Thông tin cá nhân</h2>
                            </div>
                            <Card.Body className="p-4 p-md-5">

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Tên của bạn <span className="text-danger">*</span></Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-person text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Họ và tên đầy đủ của bạn"
                                                        className="bg-light py-2 enhanced-input"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-envelope text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="you@yourdomain.com"
                                                        className="bg-light border-0 py-2"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ngày tháng năm sinh <span className="text-danger">*</span></Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-calendar text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="date"
                                                        className="bg-light border-0 py-2"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Nơi đang sinh sống <span className="text-danger">*</span></Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-geo-alt text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ví dụ như 'Hanoi, Vietnam,' 'New York, NY'"
                                                        className="bg-light border-0 py-2"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Số điện thoại <span className="text-danger">*</span></Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-telephone text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Số điện thoại liên lạc"
                                                        className="bg-light border-0 py-2"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Chức danh <span className="text-danger">*</span></Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-briefcase text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ví dụ như 'Web Developer, Mara Technology'"
                                                        className="bg-light border-0 py-2"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Trình độ học vấn cao nhất <span className="text-danger">*</span></Form.Label>
                                                <Form.Select className="bg-light border-0 py-2">
                                                    <option>Chọn trình độ học vấn</option>
                                                    <option value="HIGH_SCHOOL">Phổ thông</option>
                                                    <option value="BACHELOR">Đại học</option>
                                                    <option value="MASTER">Thạc sĩ</option>
                                                    <option value="PHD">Tiến sĩ</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>LinkedIn URL</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text className="bg-light border-0">
                                                        <i className="bi bi-linkedin text-secondary"></i>
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="URL trang LinkedIn của bạn"
                                                        className="bg-light border-0 py-2"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Dịch vụ bạn muốn cung cấp <span className="text-danger">*</span></Form.Label>
                                        <Form.Select className="bg-light border-0 py-2">
                                            <option>Chọn dịch vụ</option>
                                            <option value="1">Tư vấn du học</option>
                                            <option value="2">Hướng nghiệp</option>
                                            <option value="3">Luyện thi chứng chỉ</option>
                                            <option value="4">Tư vấn học thuật</option>
                                            <option value="5">Phát triển kỹ năng mềm</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Ảnh đại diện <span className="text-danger">*</span></Form.Label>
                                        <InputGroup>
                                            <Form.Control type="file" className="bg-light border-0 py-2" />
                                        </InputGroup>
                                        <Form.Text className="text-muted">
                                            Hãy chọn ảnh đại diện chuyên nghiệp để tạo ấn tượng tốt với học viên
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Giới thiệu bản thân <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Viết giới thiệu ngắn gọn về bản thân, kinh nghiệm và lý do bạn muốn trở thành mentor..."
                                            className="bg-light border-0"
                                        />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className="card-mentor">
                            <div className="card-header-gradient-success">
                                <h2 className="fs-4 fw-bold mb-0">Bằng cấp <span className="text-white">*</span></h2>
                            </div>
                            <Card.Body className="p-4 p-md-5">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="d-flex align-items-center"
                                        onClick={addEducation}
                                    >
                                        <i className="bi bi-plus-circle me-2"></i> Thêm bằng cấp
                                    </Button>
                                </div>

                                <Form>
                                    {educations.map((edu, index) => (
                                        <div key={index} className="border rounded-3 p-3 mb-3 position-relative">
                                            <div className="position-absolute top-0 end-0 mt-2 me-2">
                                                <Button
                                                    variant="link"
                                                    className="text-secondary p-1"
                                                    onClick={() => removeEducation(index)}
                                                    disabled={educations.length <= 1}
                                                >
                                                    <i className="bi bi-x-circle"></i>
                                                </Button>
                                            </div>

                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Trường <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Tên trường học"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Chuyên ngành <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Chuyên ngành học"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Ngày bắt đầu <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Ngày kết thúc</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                        <Form.Text className="text-muted">
                                                            Để trống nếu bạn đang học
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ảnh bằng cấp</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    className="bg-light border-0 py-2"
                                                />
                                            </Form.Group>
                                        </div>
                                    ))}
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className="card-mentor">
                            <div className="card-header-gradient-info">
                                <h2 className="fs-4 fw-bold mb-0">Điểm bài thi chuẩn hóa</h2>
                            </div>
                            <Card.Body className="p-4 p-md-5">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="d-flex align-items-center"
                                        onClick={addTestScore}
                                    >
                                        <i className="bi bi-plus-circle me-2"></i> Thêm chứng chỉ
                                    </Button>
                                </div>

                                <Form>
                                    {testScores.map((test, index) => (
                                        <div key={index} className="border rounded-3 p-3 mb-3 position-relative">
                                            <div className="position-absolute top-0 end-0 mt-2 me-2">
                                                <Button
                                                    variant="link"
                                                    className="text-secondary p-1"
                                                    onClick={() => removeTestScore(index)}
                                                    disabled={testScores.length <= 1}
                                                >
                                                    <i className="bi bi-x-circle"></i>
                                                </Button>
                                            </div>

                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Tên bài thi <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Ví dụ: IELTS, TOEFL, SAT, ACT, GRE, GMAT"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Điểm số <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Điểm số của bạn"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ảnh chứng chỉ</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    className="bg-light border-0 py-2"
                                                />
                                            </Form.Group>
                                        </div>
                                    ))}
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className="card-mentor">
                            <div className="card-header-gradient-warning">
                                <h2 className="fs-4 fw-bold mb-0">Kinh nghiệm làm việc <span className="text-white">*</span></h2>
                            </div>
                            <Card.Body className="p-4 p-md-5">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="d-flex align-items-center"
                                        onClick={addExperience}
                                    >
                                        <i className="bi bi-plus-circle me-2"></i> Thêm kinh nghiệm
                                    </Button>
                                </div>

                                <Form>
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="border rounded-3 p-3 mb-3 position-relative">
                                            <div className="position-absolute top-0 end-0 mt-2 me-2">
                                                <Button
                                                    variant="link"
                                                    className="text-secondary p-1"
                                                    onClick={() => removeExperience(index)}
                                                    disabled={experiences.length <= 1}
                                                >
                                                    <i className="bi bi-x-circle"></i>
                                                </Button>
                                            </div>

                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Công ty <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Tên công ty"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Vị trí <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Vị trí công việc"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Ngày bắt đầu <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Ngày kết thúc</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            className="bg-light border-0 py-2"
                                                        />
                                                        <Form.Text className="text-muted">
                                                            Để trống nếu bạn vẫn đang làm việc
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ảnh minh chứng kinh nghiệm</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    className="bg-light border-0 py-2"
                                                />
                                            </Form.Group>
                                        </div>
                                    ))}
                                </Form>
                            </Card.Body>
                        </Card>

                        <div className="action-buttons-container">
                            <div className="d-flex justify-content-between">
                                <Button variant="light" className="fw-bold shadow-sm">
                                    <i className="bi bi-arrow-left me-2"></i> Quay lại
                                </Button>
                                <div>
                                    <Button variant="light" className="me-3 fw-bold shadow-sm">
                                        <i className="bi bi-eye me-2"></i> Xem thử
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="mentor-submit-btn"
                                    >
                                        Đăng ký <i className="bi bi-arrow-right ms-2"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterMentorPage;