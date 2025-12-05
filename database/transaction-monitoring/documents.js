// database/know-your-customer/documents.js
module.exports = [
  {
    key: "D-1001",
    name: "Passport.pdf",
    uploadedBy: {id: "U-101", name: "John Doe"},
    uploadedOn: "2025-01-12T11:22:10Z",
    mimeType: "application/pdf",
    url: "https://example.com/files/D-1001",
  },
  {
    key: "D-1002",
    name: "Proof-of-Address.jpg",
    uploadedBy: {id: "U-102", name: "Sara Lee"},
    uploadedOn: "2025-01-13T08:55:41Z",
    mimeType: "image/jpeg",
    url: "https://example.com/files/D-1002",
  },
  {
    key: "D-1003",
    name: "BankStatement.pdf",
    uploadedBy: {id: "U-103", name: "Maria Gomez"},
    uploadedOn: "2025-01-14T10:14:02Z",
    mimeType: "application/pdf",
    url: "https://example.com/files/D-1003",
  },
  {
    key: "D-1004",
    name: "EmployeeID.png",
    uploadedBy: {id: "U-102", name: "Sara Lee"},
    uploadedOn: "2025-01-15T14:45:22Z",
    mimeType: "image/png",
    url: "https://example.com/files/D-1004",
  },
  {
    key: "D-1005",
    name: "IncomeProof.docx",
    uploadedBy: {id: "U-101", name: "John Doe"},
    uploadedOn: "2025-01-16T09:32:11Z",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    url: "https://example.com/files/D-1005",
  },
];
