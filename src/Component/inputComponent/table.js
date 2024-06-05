import React, { useState } from 'react';
import ActionButton from '../inputComponent/ActionButton';
import Pagination from './Pagination';
import Button from '../inputComponent/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TableDataFilter from '../inputComponent/filter';

export const TableHeader = ({ headers }) => (
    <thead>
        <tr>
            {headers.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
        </tr>
    </thead>
);

export const TableRow = ({ userData, headers, sr = true, action = 0, actionButtons = [] }) => {
    if (!userData || (Array.isArray(userData) && userData.length === 0)) {
        return (
            <tr><td colSpan={headers.length}>No Records Found</td></tr>
        );
    }

    return (
        <>
            {userData.map((user, index) => (
                <tr key={index}>
                    {sr && <td>{index + 1}</td>}
                    {headers.map((header, idx) => {
                        if (header !== 'Sr' && header !== 'Action') {
                            return <td key={idx}>{user[header]}</td>;
                        } else {
                            return null;
                        }
                    })}
                    {action && (
                        <td>
                            {actionButtons.map((button, btnIndex) => (
                                <ActionButton
                                    key={btnIndex}
                                    onClick={() => button.onClick(user.name)}
                                    icon={button.icon}
                                    cssClass={button.cssClass}
                                />
                            ))}
                        </td>
                    )}
                </tr>
            ))}
        </>
    );
};

export const Table = ({ userData, headers, sr = true, action = 0, actionButtons = [], pagination, rowsCountSelctor, totalDbRows, filter = false, filterOptions = [], addButton = false, handleAddItem }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [filteredUserData, setFilteredUserData] = useState(null); // Define state for filtered data

    // Logic to paginate data
    const indexOfLastRecord = currentPage * entriesPerPage;
    const indexOfFirstRecord = indexOfLastRecord - entriesPerPage;
    const currentRecords = filteredUserData || Array.isArray(userData) ? userData.slice(indexOfFirstRecord, indexOfLastRecord) : userData;

    // Change page
    const onPageChange = pageNumber => setCurrentPage(pageNumber);

    // Change entries per page
    const onEntriesPerPageChange = entries => {
        setEntriesPerPage(entries);
        setCurrentPage(1); // Reset to first page when changing entries per page
    };
    // Define postsPerPageOptions
    const postsPerPageOptions = [5, 10, 15, 20];
    // Other relevant data
    const length = 100000000; // For example, the total number of items

    const onSubmitfilter = (filterData) => {

        const filteredData = userData.filter((item) => {
            console.log(item,"items");

        });

        console.log(filterData, "filter data table");
        // Update state with filtered data
        setFilteredUserData(filteredData);
    };

    return (
        <>

            {(filter === true) ?
                <div className='from-inner-wrp'>
                    <TableDataFilter filterOptions={filterOptions} onSubmit={onSubmitfilter} />
                </div>
                : ''}

            {(addButton === true) ?
                <div className="form-group d-flex justify-content-end w-auto">
                    <Button icon={faPlus} label="Add User"
                        onClick={handleAddItem}
                        className="form-control btn btn-success w-15 rounded font-weight-bolder" />
                </div> : ''}
            <div className='overflow-auto'>
                <table className='table table-striped'>
                    <TableHeader headers={headers} />
                    <tbody>
                        <TableRow
                            userData={currentRecords}
                            headers={headers}
                            sr={sr}
                            action={action}
                            actionButtons={actionButtons}
                        />
                    </tbody>
                </table>
            </div>
            {pagination && (
                <Pagination
                    postsPerPageOptions={postsPerPageOptions}
                    defaultPostsPerPage={postsPerPageOptions[0]}
                    length={length}
                    currentPage={currentPage} // Pass the currentPage state
                    onPageChange={onPageChange} // Pass the onPageChange function
                    onEntriesPerPageChange={onEntriesPerPageChange}
                />
            )}
        </>
    );
};

export default Table;
