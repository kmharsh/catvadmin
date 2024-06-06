import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Accessdata from '../../AccessLog.json';
import OtppageData from '../../otppageData.json';
import Paymentdetails from '../../paymentdetails.json';
import CompaintsData from '../../CompaintsData.json';

const Dashboard = () => {
    const [accessLogData, setAccessLogData] = useState({});
    const [otpPageData, setOtpPageData] = useState({});
    const [paymentData, setPaymentData] = useState({});
    const [complaintsData, setComplaintsData] = useState({});
    Chart.register(...registerables);

    useEffect(() => {
        if (Array.isArray(Accessdata)) {
            const accessLogCounts = Accessdata.reduce((acc, log) => {
                acc[log.ApiName] = (acc[log.ApiName] || 0) + 1;
                return acc;
            }, {});
            setAccessLogData({
                labels: Object.keys(accessLogCounts),
                datasets: [{
                    label: 'API Access Count',
                    data: Object.values(accessLogCounts),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }]
            });
        }

        if (Array.isArray(OtppageData)) {
            const otpCounts = OtppageData.reduce((acc, otp) => {
                acc[otp['is-send']] = (acc[otp['is-send']] || 0) + 1;
                return acc;
            }, {});
            setOtpPageData({
                labels: Object.keys(otpCounts),
                datasets: [{
                    label: 'OTP Sent',
                    data: Object.values(otpCounts['true'] || 0),
                    backgroundColor: 'rgba(54, 162, 235, 0.6)'
                }, {
                    label: 'OTP Not Sent',
                    data: Object.values(otpCounts['false'] || 0),
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }]
            });
        }

        if (Array.isArray(Paymentdetails)) {
            const paymentCounts = Paymentdetails.reduce((acc, payment) => {
                const date = new Date(payment.Date).toLocaleDateString();
                acc[date] = (acc[date] || 0) + payment.Amount;
                return acc;
            }, {});
            setPaymentData({
                labels: Object.keys(paymentCounts),
                datasets: [{
                    label: 'Payments Over Time',
                    data: Object.values(paymentCounts),
                    backgroundColor: 'rgba(153, 102, 255, 0.6)'
                }]
            });
        }

        if (Array.isArray(CompaintsData)) {
            const complaintsCounts = CompaintsData.reduce((acc, complaint) => {
                acc[complaint.Type] = (acc[complaint.Type] || 0) + 1;
                return acc;
            }, {});
            setComplaintsData({
                labels: Object.keys(complaintsCounts),
                datasets: [{
                    label: 'Complaints Count',
                    data: Object.values(complaintsCounts),
                    backgroundColor: 'rgba(255, 206, 86, 0.6)'
                }]
            });
        }

    }, []);

    const ChartCard = ({ title, data }) => (
        <div className="chart-card">
            <h3>{title}</h3>
            {data.labels && data.datasets ? (
                <Line data={data} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    return (
        <div className="container">
            <div className="dashboard mt-5">
                <div className="d-flex justify-content-start flex-wrap row">
                    <div className="chart-container w-30 col-4">
                        <ChartCard title="Access Log" data={accessLogData} />
                    </div>
                    <div className="chart-container w-30 col-4">
                        <ChartCard title="OTP Page" data={otpPageData} />
                    </div>
                    <div className="chart-container w-30 col-4">
                        <ChartCard title="Payment Details" data={paymentData} />
                    </div>
                    <div className="chart-container w-30 col-4">
                        <ChartCard title="Complaints" data={complaintsData} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
