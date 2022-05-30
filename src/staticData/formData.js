const formData = [
  {
    title: "My monthly saving is",
    category: "Savings",
    options: [
      ["More than 50% of my income", 10],
      ["25-50% of my income", 8],
      ["10-25% of my income", 6],
      ["5-10% of my income", 4],
      ["Not able to save any money at all", 2],
    ],
  },
  {
    title: "My monthly saving is",
    category: "Emergency Funds",
    options: [
      ["6 months or more", 10],
      ["3-5 months", 8],
      ["1-2 months ", 6],
      [" Less than 1 month", 4],
      ["Don't have any emergency fund ", 2],
    ],
  },
  {
    title: "My monthly debt repayment is ",
    category: "Debt",
    options: [
      ["Noting as I am debt free :) ", 10],
      [" Less than 30% of my monthly income towards EMIs", 8],
      [" 40-50% of my monthly income towards EMIs", 6],
      ["More than 60% of monthly income towards EMIs ", 4],
    ],
  },
  {
    title:
      "I invest a part of my monthly savings towards achieving my financial goals",
    category: "Investment ",
    options: [
      [" Regularly", 10],
      [" Usually- most of the times", 8],
      [" Sometimes- occasionally", 6],
      [" Never, it lies idle in my bank account", 4],
    ],
  },
  {
    title: "My credit card bills are",
    category: "Credit Card ",
    options: [
      [" Paid in full every month", 10],
      ["Sometimes rolled over 1-3 times a year ", 6],
      [" Usually rolled over because I can't pay the full amount", 2],
    ],
  },
  {
    title: "My life insurance coverage is",
    category: "Life Insurance",
    options: [
      [" Around 6-10 times of my annual salary", 10],
      ["Around 3-5 times of my annual salary ", 8],
      [" Around 1-2 times of my annual salary", 6],
      [" Less than my annual salary", 4],
      [" I do not have life insurance cover", 2],
    ],
  },
  {
    title:
      "In case of a medical emergency in the family, all costs will be met",
    category: "Mediclaim ",
    options: [
      [" Out of my emergency fund", 10],
      [" Through a standalone health cover of AED 100K+", 8],
      [" Through the employer provided Mediclaim cover", 6],
      [" Don't know as I don't have any medical cover", 4],
    ],
  },
  {
    title: "My monthly spending are mostly on",
    category: "Spend",
    options: [
      ["Necessary expenses like food, rent and utilities ", 10],
      [" Basics expenses and occasional splurging", 8],
      [" Entertainment, Movies and Dining out", 6],
      ["Anything that catches my fancy. Why earn if you don't spend? ", 4],
    ],
  },
];

export default formData;
