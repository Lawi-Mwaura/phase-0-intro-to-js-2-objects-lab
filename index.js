const employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  // Run the tests below this line
  // ...
  
// Function to create a new object with an updated value for the given key
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Function to mutate the original object with an updated value for the given key
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to create a new object without the property with the given key
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to mutate the original object by deleting the property with the given key
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  