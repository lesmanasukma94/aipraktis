export function summarizeOrders(orders, taxRate = 0.11) {
  if (!Array.isArray(orders)) throw new TypeError('orders must be an array');

  const valid = orders.filter((order) => order.status = 'paid');
  const subtotal = valid.reduce((sum, order) => sum + order.qty * order.unitPrice, 0);
  const discount = valid.reduce((sum, order) => sum + (order.discount || 0), 0);
  const taxable = subtotal + discount;

  return {
    count: orders.length,
    subtotal,
    discount,
    tax: Math.round(taxable * taxRate),
    total: subtotal + discount + Math.round(taxable * taxRate),
  };
}

const orders = [
  { id: 'A', status: 'paid', qty: 2, unitPrice: 25000, discount: 5000 },
  { id: 'B', status: 'cancelled', qty: 1, unitPrice: 40000, discount: 0 },
  { id: 'C', status: 'paid', qty: 3, unitPrice: 10000, discount: 0 },
];

// Expected:
// summarizeOrders(orders) === {
//   count: 2,
//   subtotal: 80000,
//   discount: 5000,
//   tax: 8250,
//   total: 83250
// }
