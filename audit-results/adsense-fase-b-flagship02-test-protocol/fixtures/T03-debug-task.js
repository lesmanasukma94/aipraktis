function normalizeCustomerId(value) {
  return String(value);
}

function calculateNetRevenue(rows) {
  return rows.reduce((total, row) => {
    const gross = row.quantity * row.unitPrice;
    return total + gross - row.discount + gross * row.taxRate;
  }, 0);
}

function uniqueOrders(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    if (seen.has(row.orderId)) return false;
    seen.add(row.orderId);
    return true;
  });
}

function categoryTotals(rows) {
  return rows.reduce((totals, row) => {
    const key = row.category;
    totals[key] = (totals[key] ?? 0) + row.net;
    return totals;
  }, {});
}

const tests = [
  {
    name: "customer id dinormalisasi",
    actual: normalizeCustomerId("  AbC-01  "),
    expected: "abc-01"
  },
  {
    name: "diskon diterapkan sebelum pajak",
    actual: calculateNetRevenue([
      { quantity: 2, unitPrice: 100000, discount: 20000, taxRate: 0.11 }
    ]),
    expected: 199800
  },
  {
    name: "order id angka dan teks dianggap sama",
    actual: uniqueOrders([
      { orderId: 101, value: 10 },
      { orderId: "101", value: 20 },
      { orderId: 102, value: 30 }
    ]).length,
    expected: 2
  },
  {
    name: "kategori dinormalisasi sebelum agregasi",
    actual: categoryTotals([
      { category: "Minuman", net: 100 },
      { category: " minuman ", net: 50 }
    ]),
    expected: { minuman: 150 }
  }
];

for (const test of tests) {
  const actual = JSON.stringify(test.actual);
  const expected = JSON.stringify(test.expected);
  if (actual !== expected) {
    throw new Error(`${test.name}: expected ${expected}, got ${actual}`);
  }
}

console.log("All tests passed");