export default {
  // getItem: state => (customerData) => state.items.find((customer) => item.id == customerID),
  getCustomers: state => state.customers,
  getCustomerPhotos: state => state.customerPhotos,
}
