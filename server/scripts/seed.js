const sequelize = require('../database/db');
const User = require('../models/User');
const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');

const seedData = async () => {
    try {
        await sequelize.sync({ force: true }); // Re-create tables
        console.log('Database synced...');

        // Seed Admin User
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash('password123', salt);

        await User.create({
            username: 'admin',
            password: passwordHash,
            role: 'admin'
        });
        console.log('Admin user seeded (admin/password123)...');

        // Seed Employees
        const employees = [
            {
                name: 'Alice Johnson',
                email: 'alice@example.com',
                position: 'Software Engineer',
                department: 'Engineering',
                dateOfjoining: '2023-01-15',
                salary: 75000
            },
            {
                name: 'Bob Smith',
                email: 'bob@example.com',
                position: 'Product Manager',
                department: 'Product',
                dateOfjoining: '2022-11-01',
                salary: 85000
            },
            {
                name: 'Charlie Brown',
                email: 'charlie@example.com',
                position: 'Designer',
                department: 'Design',
                dateOfjoining: '2023-03-20',
                salary: 65000
            }
        ];

        await Employee.bulkCreate(employees);
        console.log('Employees seeded...');

        process.exit();
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};

seedData();
