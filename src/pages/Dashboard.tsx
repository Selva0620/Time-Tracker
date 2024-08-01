import React from 'react';
import "./Dashboard.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BarCharts from './Barcharts';
import { GoDotFill } from "react-icons/go";
import { Row, Col } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='dash-section p-4'>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-7 project-card p-4'>
            <Row className="flex justify-between">
              <Col lg={4}>
                <h4>Total time</h4>
                <h6 className="text-gray-500">03:40:55</h6>
              </Col>
              <Col lg={4}>
                <h4>Project Name</h4>
                <h6 className="text-gray-500">Sample Project</h6>
              </Col>
              {/* <Col lg={4}>
              <h4>Client Name</h4>
              <h6 style={{color:"gray"}}>Internal Project</h6>
              </Col> */}
            </Row>
            <hr className="my-4" />
            <div className="mt-8">
              <BarCharts />
            </div>
          </div>
          <div className='col-span-12 md:col-span-5 task-card p-4' style={{ height: "200px" }}>
            <h4>Tracked activities</h4>
            <hr className="my-4" />
            <div className="flex justify-between mt-8">
              <h5 className="text-gray-500">Creating UI Design</h5>
              <h6>03:40:55</h6>
            </div>
            <h6 className="text-gray-500 flex items-center mt-6">
              <GoDotFill className="text-green-500 mr-2" />Sample project
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
