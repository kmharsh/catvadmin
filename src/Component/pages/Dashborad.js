import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Accessdata from '../../AccessLog.json';
import OtppageData from '../../otppageData.json';
import Paymentdetails from '../../paymentdetails.json';
import paymentData from '../../PayementData.json';
import CompaintsData from '../../CompaintsData.json';

const Dashboard = () => {
    const [accessLogData, setAccessLogData] = useState({});
    const [otpPageData, setOtpPageData] = useState({});
    const [paymentDetailsData, setPaymentDetailsData] = useState({});
    const [complaintsData, setComplaintsData] = useState({});
    const [totals, setTotals] = useState({});
    Chart.register(...registerables);

    useEffect(() => {
        const newTotals = {};

        if (Array.isArray(Accessdata)) {
            const accessLogCounts = Accessdata.reduce((acc, log) => {
                acc[log.ApiName] = (acc[log.ApiName] || 0) + 1;
                return acc;
            }, {});
            newTotals.accessLog = Accessdata.length;
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
            newTotals.otpPage = OtppageData.length;
            setOtpPageData({
                labels: Object.keys(otpCounts),
                datasets: [{
                    label: 'OTP Sent',
                    data: [otpCounts['true'] || 0],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)'
                }, {
                    label: 'OTP Not Sent',
                    data: [otpCounts['false'] || 0],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }]
            });
        }

        if (Array.isArray(Paymentdetails)) {
            const paymentCounts = Paymentdetails.reduce((acc, payment) => {
                const date = new Date(payment.Date).toLocaleDateString();
                if (payment.Status === 'success') {
                    acc.success = (acc.success || 0) + payment.Amount;
                } else if (payment.Status === 'fail') {
                    acc.fail = (acc.fail || 0) + payment.Amount;
                }
                return acc;
            }, {});
            newTotals.paymentDetails = Paymentdetails.length;
            setPaymentDetailsData({
                labels: ['Success', 'Fail'],
                datasets: [{
                    label: 'Payments Over Time',
                    data: [paymentCounts.success || 0, paymentCounts.fail || 0],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)']
                }]
            });
        }

        if (Array.isArray(paymentData)) {
            const tranStatusCounts = paymentData.reduce((acc, payment) => {
                if (payment.TranStatus === 'pass') {
                    acc.success = (acc.success || 0) + 1;
                } else if (payment.TranStatus === 'fail') {
                    acc.fail = (acc.fail || 0) + 1;
                }
                return acc;
            }, { success: 0, fail: 0 });
            newTotals.successfulPayments = tranStatusCounts.success;
            newTotals.failedPayments = tranStatusCounts.fail;
        }

        if (Array.isArray(CompaintsData)) {
            const complaintsCounts = CompaintsData.reduce((acc, complaint) => {
                acc[complaint.Type] = (acc[complaint.Type] || 0) + 1;
                return acc;
            }, {});
            newTotals.complaints = CompaintsData.length;
            setComplaintsData({
                labels: Object.keys(complaintsCounts),
                datasets: [{
                    label: 'Complaints Count',
                    data: Object.values(complaintsCounts),
                    backgroundColor: 'rgba(255, 206, 86, 0.6)'
                }]
            });
        }

        setTotals(newTotals);

    }, []);

    const ChartCard = ({ title, data }) => (
        <div className="chart-card">
            {data.labels && data.datasets ? (
                <Line data={data} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

    return (
        <div className="container">
            <div className='mt-5'>
                <ul className='total-wrp d-flex justify-content-start flex-wrap '>
                    <li>
                        <span className='labelname'>Access Log</span>
                        <span className='count'>{totals.accessLog || 0}</span>
                    </li>
                    <li>
                        <span className='labelname'>OTP Page</span>
                        <span className='count'>{totals.otpPage || 0}</span>
                    </li>
                    <li>
                        <span className='labelname'>Payment Details</span>
                        <span className='count'>{totals.paymentDetails || 0}</span>
                    </li>
                    <li>
                        <span className='labelname'>Successful Payments</span>
                        <span className='count'>{totals.successfulPayments || 0}</span>
                    </li>
                    <li>
                        <span className='labelname'>Failed Payments</span>
                        <span className='count'>{totals.failedPayments || 0}</span>
                    </li>
                    <li>
                        <span className='labelname'>Complaints</span>
                        <span className='count'>{totals.complaints || 0}</span>
                    </li>
                </ul>
            </div>
            <div className="dashboard mt-5">
                <div className="d-flex justify-content-start flex-wrap row">
                    <div className="chart-container  col-5">
                        <ChartCard title="Access Log" data={accessLogData} />
                    </div>
                    <div className="chart-container  col-5">
                        <ChartCard title="OTP Page" data={otpPageData} />
                    </div>
                    <div className="chart-container  col-5">
                        <ChartCard title="Payment Details" data={paymentDetailsData} />
                    </div>
                    <div className="chart-container  col-5">
                        <ChartCard title="Complaints" data={complaintsData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
