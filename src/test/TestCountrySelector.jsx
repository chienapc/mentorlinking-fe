import React, { useState } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import CountrySelector from '../components/mentor/CountrySelector';

const TestCountrySelector = () => {
    const [selectedCountries, setSelectedCountries] = useState([]);

    const handleCountriesChange = (countries) => {
        setSelectedCountries(countries);
        console.log('Countries updated:', countries);
    };

    return (
        <Container className="py-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    <h2 className="mb-4 text-center">Test Country Selector Component</h2>

                    <Card className="mb-4">
                        <Card.Body>
                            <CountrySelector
                                selectedCountries={selectedCountries}
                                onCountriesChange={handleCountriesChange}
                            />
                        </Card.Body>
                    </Card>

                    {/* Debug info */}
                    <Alert variant="info">
                        <h6>Debug - Selected Countries:</h6>
                        <pre>{JSON.stringify(selectedCountries, null, 2)}</pre>
                    </Alert>

                    <Alert variant="success">
                        <h6>Expected Features:</h6>
                        <ul className="mb-0">
                            <li>✅ Grid layout với 18 nước phổ biến</li>
                            <li>✅ Click để chọn/bỏ chọn nước</li>
                            <li>✅ Badge hiển thị nước đã chọn</li>
                            <li>✅ Nút "Thêm nước khác" mở modal</li>
                            <li>✅ Modal có form để đề xuất nước mới</li>
                            <li>✅ Nước đề xuất có trạng thái "chờ duyệt"</li>
                            <li>✅ Responsive trên mobile</li>
                            <li>✅ Validation không cho submit nếu không chọn nước</li>
                        </ul>
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
};

export default TestCountrySelector;