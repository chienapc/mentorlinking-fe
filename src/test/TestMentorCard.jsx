import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MentorCard from '../components/mentor/MentorCard';

// Mock data based on the API response structure
const mockMentor = {
    "id": 5,
    "username": "mentor2@gmail.com",
    "email": "mentor2@gmail.com",
    "role": {
        "id": 4,
        "createdAt": "2025-10-13T08:27:49",
        "updatedAt": "2025-10-13T08:27:50",
        "code": "MENTOR",
        "name": "MENTOR"
    },
    "fullname": "Nguyễn Văn Tèo",
    "dob": "2025-10-14",
    "phone": "0987654321",
    "gender": "F",
    "address": "TP.HCM",
    "currentLocation": "TP.HCM",
    "title": "Mentor2",
    "linkedinUrl": "https://www.facebook.com/hien.nguyenba.7311?locale=vi_VN",
    "avatarUrl": "https://res.cloudinary.com/dwz7cufch/image/upload/74b5b105-6be0-4f96-bca1-1f7bcccbc973_tai-anh-dep-ve-may-23.jpg",
    "intro": "Tôi mong muốn hỗ trợ mentee phát triển kỹ năng và định hướng nghề nghiệp hiệu quả.",
    "rating": 3.5,
    "numberOfBooking": 60,
    "approvedCountries": [
        {
            "id": 1,
            "code": "USA",
            "name": "Mỹ",
            "flagUrl": "https://res.cloudinary.com/dwz7cufch/image/upload/74b5b105-6be0-4f96-bca1-1f7bcccbc973_tai-anh-dep-ve-may-23.jpg",
            "description": "Mỹ"
        },
        {
            "id": 2,
            "code": "KOR",
            "name": "Hàn Quốc",
            "flagUrl": "https://res.cloudinary.com/dwz7cufch/image/upload/74b5b105-6be0-4f96-bca1-1f7bcccbc973_tai-anh-dep-ve-may-23.jpg",
            "description": "Hàn Quốc"
        },
        {
            "id": 3,
            "code": "CAN",
            "name": "Canada",
            "flagUrl": "https://res.cloudinary.com/dwz7cufch/image/upload/74b5b105-6be0-4f96-bca1-1f7bcccbc973_tai-anh-dep-ve-may-23.jpg",
            "description": "Canada"
        },
        {
            "id": 4,
            "code": "AUS",
            "name": "Úc",
            "flagUrl": "https://res.cloudinary.com/dwz7cufch/image/upload/74b5b105-6be0-4f96-bca1-1f7bcccbc973_tai-anh-dep-ve-may-23.jpg",
            "description": "Úc"
        }
    ]
};

const TestMentorCard = () => {
    return (
        <Container className="py-5">
            <h2 className="mb-4">Test Mentor Card with New API Structure</h2>
            <Row>
                <Col md={4}>
                    <MentorCard mentor={mockMentor} />
                </Col>
            </Row>

            <div className="mt-4">
                <h3>Expected Behavior:</h3>
                <ul>
                    <li>✅ Should display "Hỗ trợ du học:" section</li>
                    <li>✅ Should show first 3 countries: Mỹ, Hàn Quốc, Canada</li>
                    <li>✅ Should show "+1" badge for remaining countries</li>
                    <li>✅ Should display flag images if available</li>
                    <li>✅ No React error about invalid children</li>
                </ul>
            </div>
        </Container>
    );
};

export default TestMentorCard;