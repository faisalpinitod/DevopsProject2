const mongoose = require("mongoose");

// Define the schema
const employeeSchema = new mongoose.Schema({
    employee_id: Number,
    name: String
});

// Create the model
const Employee = mongoose.model("Employee", employeeSchema);

// Export the model
module.exports ={ Employee}
