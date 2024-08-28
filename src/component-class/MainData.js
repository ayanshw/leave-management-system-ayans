// This file contains the data for the employee and leaves
//Once the database is set up, this file will be replaced by a file that fetches data from the database
//only edit this file if you are setting up the database
//dont make it static
//this data will be fetched to the database


const employee = {
    id: 100001,
    name: 'John Doe',
    gender: 'male',
    dob: "01-01-2000",
    phoneno: 1234567890,
    email: "abc123@outlook.com",
    adminaccess: false
}


const leaves = {
    casual: 14,
    medical: 14,
    earned: 14
}

const leavehistory = {
    serial: 1,
    leavetype: 'Casual Leave',
    reason: 'Going to hometown lol lol test test text truncate',
    dateapplied: '2021-10-10',
    noofdays: 2,
    status: false,
    reject: true
}
const histarr = [leavehistory]




export const employeeData = employee;
export const leavesData = leaves;
export const historyData = histarr;