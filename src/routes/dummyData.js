const express = require('express');
const router = express.Router();

// In-memory data store
let dummyDataStore = [
    {
        id: 1,
        name: 'John Doe',
        address: 'xyz1',
        email: 'johndoe@example.com',
        phone: '1234567890',
        vin: '1HGCM82633A123456',
        regNo: 'ABC123',
        motorNumber: 'MN-12345EV',
        controllerNumber: 'CTRL-54321EV',
        batteryNumber: 'BAT-67890EV',
        purchaseDate: '2024-07-23'
      },
      {
        id: 2,
        name: 'Jane Smith',
        address: 'xyz2',
        email: 'janesmith@example.com',
        phone: '2345678901',
        vin: '2HGCM82633A654321',
        regNo: 'DEF456',
        motorNumber: 'MN-23456EV',
        controllerNumber: 'CTRL-65432EV',
        batteryNumber: 'BAT-98765EV',
        purchaseDate: '2024-07-23'
      },
      {
        id: 3,
        name: 'Alice Johnson',
        address: 'xyz3',
        email: 'alicejohnson@example.com',
        phone: '3456789012',
        vin: '3HGCM82633A567890',
        regNo: 'GHI789',
        motorNumber: 'MN-34567EV',
        controllerNumber: 'CTRL-76543EV',
        batteryNumber: 'BAT-87654EV',
        purchaseDate: '2024-07-23'
      },
      {
        id: 4,
        name: 'Bob Brown',
        address: 'xyz4',
        email: 'bobbrown@example.com',
        phone: '4567890123',
        vin: '4HGCM82633A678901',
        regNo: 'JKL012',
        motorNumber: 'MN-45678EV',
        controllerNumber: 'CTRL-87654EV',
        batteryNumber: 'BAT-76543EV',
        purchaseDate: '2024-07-23'
      },
      {
        id: 5,
        name: 'Carol White',
        address: 'xyz5',
        email: 'carolwhite@example.com',
        phone: '5678901234',
        vin: '5HGCM82633A789012',
        regNo: 'MNO345',
        motorNumber: 'MN-56789EV',
        controllerNumber: 'CTRL-98765EV',
        batteryNumber: 'BAT-65432EV',
        purchaseDate: '2024-07-23'
      }
];

// Get all dummy data
router.post('/oem-one', (req, res) => {
    const {phone, email} = req.body;
    console.log("hitted", phone, email);
    let matchingData
    if(phone){
      matchingData = dummyDataStore.filter((e) => e.phone === phone);
    }
    if(email){
      matchingData = dummyDataStore.filter((e)=> e.email === email)
    }
    console.log(matchingData);
    if (matchingData.length > 0) {
        res.status(200).json({data:matchingData});
    } else {
        res.status(404).json({ message: "No data found for the provided phone number" });
    }
});

router.get('/oem-two/:phoneNo', (req, res) => {
    const phone = req.params.phoneNo;
    const matchingData = dummyDataStore.filter((e) => e.phone === phone);
    console.log(phone);
    if (matchingData.length > 0) {
        res.status(200).json({data:matchingData});
    } else {
        res.status(404).json({ message: "No data found for the provided phone number" });
    }
})

module.exports = router;
