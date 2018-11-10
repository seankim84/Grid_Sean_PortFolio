import React from 'react';
import { Row, Col, Card } from 'antd';

const Projects = () => (
    <section className="projects">
      <div style={{ background: 'none', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
        </Row>
      </div>
    </section>
)

export default Projects;