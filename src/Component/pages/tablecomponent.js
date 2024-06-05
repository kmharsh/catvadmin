import React from 'react';
const Tablecomponent = () => {

    return (
        <>
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Profile</th>
                                                <th>VatNo.</th>
                                                <th>Created</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>53275531</td>
                                                <td>12 May 2017</td>
                                                <td><label className="badge badge-danger">Pending</label></td>
                                            </tr>
                                            <tr>
                                                <td>Messsy</td>
                                                <td>53275532</td>
                                                <td>15 May 2017</td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>53275533</td>
                                                <td>14 May 2017</td>
                                                <td><label className="badge badge-info">Fixed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Peter</td>
                                                <td>53275534</td>
                                                <td>16 May 2017</td>
                                                <td><label className="badge badge-success">Completed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Dave</td>
                                                <td>53275535</td>
                                                <td>20 May 2017</td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Product</th>
                                                <th>Sale</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Photoshop</td>
                                                <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                                                <td><label className="badge badge-danger">Pending</label></td>
                                            </tr>
                                            <tr>
                                                <td>Messsy</td>
                                                <td>Flash</td>
                                                <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>Premier</td>
                                                <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                                                <td><label className="badge badge-info">Fixed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Peter</td>
                                                <td>After effects</td>
                                                <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                                                <td><label className="badge badge-success">Completed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Dave</td>
                                                <td>53275535</td>
                                                <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                </div>
                <div classNameName='row'>
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Striped Table</h4>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th> User </th>
                                                    <th> First name </th>
                                                    <th> Progress </th>
                                                    <th> Amount </th>
                                                    <th> Deadline </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-1">
                                                        <img src="./images/faces-clipart/pic-2.png" alt="image" />
                                                    </td>
                                                    <td> Herman Beck </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td> $ 77.99 </td>
                                                    <td> May 15, 2015 </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1">
                                                        <img src="./images/faces-clipart/pic-2.png" alt="image" />
                                                    </td>
                                                    <td> Messsy Adam </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td> $245.30 </td>
                                                    <td> July 1, 2015 </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1">
                                                        <img src="./images/faces-clipart/pic-3.png" alt="image" />
                                                    </td>
                                                    <td> John Richards </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-warning" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td> $138.00 </td>
                                                    <td> Apr 12, 2015 </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1">
                                                        <img src="./images/faces-clipart/pic-4.png" alt="image" />
                                                    </td>
                                                    <td> Peter Meggik </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td> $ 77.99 </td>
                                                    <td> May 15, 2015 </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1">
                                                        <img src="./images/faces-clipart/pic-3.png" alt="image" />
                                                    </td>
                                                    <td> Edward </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar"  aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td> $ 160.25 </td>
                                                    <td> May 03, 2015 </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1">
                                                        <img src="./images/faces-clipart/pic-2.png" alt="image" />
                                                    </td>
                                                    <td> John Doe </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-info" role="progressbar"  aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td> $ 123.21 </td>
                                                    <td> April 05, 2015 </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1">
                                                        <img src="./images/faces-clipart/pic-3.png" alt="image" />
                                                    </td>
                                                    <td> Henry Tom </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-warning" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td> $ 150.00 </td>
                                                    <td> June 16, 2015 </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Tablecomponent;
