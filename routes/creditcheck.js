const express = require("express");

const router = express.Router();
// ---------------------------------------------------
// TEST DATA (Realistic, not bogus)
// ---------------------------------------------------

const CREDIT_DATA = {
  // GOOD RESULT
  123456789: {
    bsn: "123456789",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 9000,
      totalMonthlyObligations: 325,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-001",
        lenderName: "Nederlandse Bank NV",
        creditType: "PERSONAL_LOAN",
        openingDate: "2020-03-01",
        endDate: null,
        originalAmount: 15000,
        currentOutstandingAmount: 8000,
        monthlyObligation: 250,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-002",
        lenderName: "Winkel Krediet BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2019-07-15",
        creditLimit: 5000,
        currentOutstandingAmount: 1000,
        monthlyObligation: 75,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
    ],
  },

  // BAD RESULT
  987654321: {
    bsn: "987654321",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 22000,
      totalMonthlyObligations: 640,
      totalNumberOfCredits: 3,
    },
    registrations: [
      {
        contractId: "CRD-010",
        lenderName: "Online Krediet NL",
        creditType: "PERSONAL_LOAN",
        openingDate: "2022-01-10",
        endDate: null,
        originalAmount: 10000,
        currentOutstandingAmount: 9000,
        monthlyObligation: 320,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A2",
          arrearsSince: "2024-08-15",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-011",
        lenderName: "Store Finance BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2021-05-01",
        creditLimit: 3000,
        currentOutstandingAmount: 2500,
        monthlyObligation: 120,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A",
          arrearsSince: "2024-06-01",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-012",
        lenderName: "Auto Lease NL",
        creditType: "PRIVATE_LEASE",
        openingDate: "2019-09-01",
        endDate: "2023-09-01",
        originalAmount: 18000,
        currentOutstandingAmount: 0,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "H",
          arrearsSince: "2021-03-01",
          resolvedOn: "2021-07-15",
        },
      },
    ],
  },
};

// ---------------------------------------------------
// ---------------------------------------------------

router.get("/credit-check", (req, res) => {
  const {bsn} = req.body;

  if (!bsn || typeof bsn !== "string") {
    return res.status(400).json({
      message: "Invalid request. 'bsn' must be provided as string.",
    });
  }

  // If BSN exists in test dataset -> return GOOD or BAD
  if (CREDIT_DATA[bsn]) {
    return res.json(CREDIT_DATA[bsn]);
  }

  // Otherwise return NO MATCH
  return res.json({
    bsn,
    matchStatus: "NO_MATCH",
    summary: {
      hasAnyRegistration: false,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 0,
      totalMonthlyObligations: 0,
      totalNumberOfCredits: 0,
    },
    registrations: [],
    decisionHints: {
      riskLevel: "UNKNOWN",
      suggestedAction: "PROCEED_WITH_CAUTION",
    },
  });
});

// ---------------------------------------------------
module.exports = router;
