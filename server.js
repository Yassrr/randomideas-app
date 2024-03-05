const express = require('express');
const port = 5000;

const app = express();

const fatures = [
  {
  "InvoiceID": "002",
  "InvoiceDate": "2024-02-22",
  "ClientName": "John Smith",
  "ClientRC": "234567890",
  "ClientAddress": "456 Arab Street, City, Country",
  "ClientPhone": "+213666666666",
  "ClientBank": "Example Bank",
  "SupplierName": "Electronics Inc.",
  "SupplierRC": "876543210",
  "SupplierAddress": "789 Tree Street, City, Country",
  "SupplierPhone": "+213777777777",
  "SupplierBank": "Electronics Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "RAM 16GB DDR4",
  "ItemUnit": "piece",
  "ItemQuantity": 1,
  "ItemPrice": 100,
  "ItemTax": 10
  },
  {
  "ItemID": "002",
  "ItemLibelle": "SSD 512GB NVME",
  "ItemUnit": "piece",
  "ItemQuantity": 1,
  "ItemPrice": 200,
  "ItemTax": 20
  }
  ]
  },
  {
  "InvoiceID": "003",
  "InvoiceDate": "2024-02-23",
  "ClientName": "Alice Johnson",
  "ClientRC": "345678901",
  "ClientAddress": "789 Arab Street, City, Country",
  "ClientPhone": "+213888888888",
  "ClientBank": "Alice Bank",
  "SupplierName": "Printers Ltd.",
  "SupplierRC": "765432109",
  "SupplierAddress": "012 Tree Street, City, Country",
  "SupplierPhone": "+213999999999",
  "SupplierBank": "Printers Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Printer HP LaserJet",
  "ItemUnit": "piece",
  "ItemQuantity": 1,
  "ItemPrice": 300,
  "ItemTax": 30
  }
  ]
  },
  {
  "InvoiceID": "102",
  "InvoiceDate": "2024-02-26",
  "ClientName": "Michael Brown",
  "ClientRC": "678901234",
  "ClientAddress": "789 Maple Street, City, Country",
  "ClientPhone": "+213141414141",
  "ClientBank": "Michael Bank",
  "SupplierName": "Tech Solutions",
  "SupplierRC": "432109876",
  "SupplierAddress": "901 Cedar Street, City, Country",
  "SupplierPhone": "+213151515151",
  "SupplierBank": "Tech Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Gaming Mouse",
  "ItemUnit": "piece",
  "ItemQuantity": 2,
  "ItemPrice": 30,
  "ItemTax": 3
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Mechanical Keyboard",
  "ItemUnit": "piece",
  "ItemQuantity": 1,
  "ItemPrice": 80,
  "ItemTax": 8
  }
  ]
  },
  {
  "InvoiceID": "103",
  "InvoiceDate": "2024-02-27",
  "ClientName": "Jessica Miller",
  "ClientRC": "789012345",
  "ClientAddress": "901 Birch Street, City, Country",
  "ClientPhone": "+213161616161",
  "ClientBank": "Jessica Bank",
  "SupplierName": "PC Parts Co.",
  "SupplierRC": "321098765",
  "SupplierAddress": "234 Pine Street, City, Country",
  "SupplierPhone": "+213171717171",
  "SupplierBank": "PC Parts Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Graphics Card",
  "ItemUnit": "piece",
  "ItemQuantity": 1,
  "ItemPrice": 300,
  "ItemTax": 30
  },
  {
  "ItemID": "002",
  "ItemLibelle": "CPU Cooler",
  "ItemUnit": "piece",
  "ItemQuantity": 1,
  "ItemPrice": 50,
  "ItemTax": 5
  }
  ]
  },
  {
  "InvoiceID": "104",
  "InvoiceDate": "2024-02-28",
  "ClientName": "William Jones",
  "ClientRC": "890123456",
  "ClientAddress": "567 Oak Street, City, Country",
  "ClientPhone": "+213181818181",
  "ClientBank": "William Bank",
  "SupplierName": "Tech Gear Ltd.",
  "SupplierRC": "210987654",
  "SupplierAddress": "345 Cedar Street, City, Country",
  "SupplierPhone": "+213191919191",
  "SupplierBank": "Tech Gear Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Monitor",
  "ItemUnit": "piece",
  "ItemQuantity": 2,
  "ItemPrice": 150,
  "ItemTax": 15
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Mousepad",
  "ItemUnit": "piece",
  "ItemQuantity": 1,
  "ItemPrice": 20,
  "ItemTax": 2
  }
  ]
  },
  {
  "InvoiceID": "105",
  "InvoiceDate": "2024-02-29",
  "ClientName": "David Wilson",
  "ClientRC": "901234567",
  "ClientAddress": "678 Elm Street, City, Country",
  "ClientPhone": "+213202020202",
  "ClientBank": "David Bank",
  "SupplierName": "Tech Support Co.",
  "SupplierRC": "109876543",
  "SupplierAddress": "456 Maple Street, City, Country",
  "SupplierPhone": "+213212121212",
  "SupplierBank": "Tech Support Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Replacing Heat Sink",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 50,
  "ItemTax": 5
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Changing Cooler",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 60,
  "ItemTax": 6
  }
  ]
  },
  {
  "InvoiceID": "106",
  "InvoiceDate": "2024-03-01",
  "ClientName": "Sarah Anderson",
  "ClientRC": "012345678",
  "ClientAddress": "789 Cedar Street, City, Country",
  "ClientPhone": "+213222222222",
  "ClientBank": "Sarah Bank",
  "SupplierName": "Computer Fixers",
  "SupplierRC": "987654321",
  "SupplierAddress": "901 Oak Street, City, Country",
  "SupplierPhone": "+213232323232",
  "SupplierBank": "Computer Fixers Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Upgrading BIOS",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 70,
  "ItemTax": 7
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Bypassing Boot Loop",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 80,
  "ItemTax": 8
  }
  ]
  },
  {
  "InvoiceID": "107",
  "InvoiceDate": "2024-03-02",
  "ClientName": "Emma Martinez",
  "ClientRC": "123456789",
  "ClientAddress": "234 Pine Street, City, Country",
  "ClientPhone": "+213242424242",
  "ClientBank": "Emma Bank",
  "SupplierName": "Linux Experts",
  "SupplierRC": "876543210",
  "SupplierAddress": "345 Elm Street, City, Country",
  "SupplierPhone": "+213252525252",
  "SupplierBank": "Linux Experts Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Installing and Configuring Ubuntu Linux",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 90,
  "ItemTax": 9
  }
  ]
  },
  {
  "InvoiceID": "108",
  "InvoiceDate": "2024-03-03",
  "ClientName": "Daniel Taylor",
  "ClientRC": "234567890",
  "ClientAddress": "567 Maple Street, City, Country",
  "ClientPhone": "+213262626262",
  "ClientBank": "Daniel Bank",
  "SupplierName": "Computer Wizards",
  "SupplierRC": "765432109",
  "SupplierAddress": "678 Oak Street, City, Country",
  "SupplierPhone": "+213272727272",
  "SupplierBank": "Computer Wizards Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Replacing CPU",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 100,
  "ItemTax": 10
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Installing Graphics Card Drivers",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 50,
  "ItemTax": 5
  }
  ]
  },
  {
  "InvoiceID": "109",
  "InvoiceDate": "2024-03-04",
  "ClientName": "Olivia Garcia",
  "ClientRC": "345678901",
  "ClientAddress": "789 Cedar Street, City, Country",
  "ClientPhone": "+213282828282",
  "ClientBank": "Olivia Bank",
  "SupplierName": "PC Repairs",
  "SupplierRC": "654321098",
  "SupplierAddress": "901 Pine Street, City, Country",
  "SupplierPhone": "+213292929292",
  "SupplierBank": "PC Repairs Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Fixing Slow Performance",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 80,
  "ItemTax": 8
  }
  ]
  },
  {
  "InvoiceID": "110",
  "InvoiceDate": "2024-03-05",
  "ClientName": "Ethan Martinez",
  "ClientRC": "456789012",
  "ClientAddress": "012 Oak Street, City, Country",
  "ClientPhone": "+213303030303",
  "ClientBank": "Ethan Bank",
  "SupplierName": "Tech Repairs",
  "SupplierRC": "543210987",
  "SupplierAddress": "234 Cedar Street, City, Country",
  "SupplierPhone": "+213313131313",
  "SupplierBank": "Tech Repairs Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Installing and Configuring Software",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 70,
  "ItemTax": 7
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Data Recovery",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 120,
  "ItemTax": 12
  }
  ]
  },
  {
  "InvoiceID": "111",
  "InvoiceDate": "2024-03-06",
  "ClientName": "Ava Brown",
  "ClientRC": "567890123",
  "ClientAddress": "345 Elm Street, City, Country",
  "ClientPhone": "+213323232323",
  "ClientBank": "Ava Bank",
  "SupplierName": "Fix IT Solutions",
  "SupplierRC": "432109876",
  "SupplierAddress": "456 Maple Street, City, Country",
  "SupplierPhone": "+213333333333",
  "SupplierBank": "Fix IT Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Fixing Blue Screen Errors",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 60,
  "ItemTax": 6
  }
  ]
  },
  {
  "InvoiceID": "112",
  "InvoiceDate": "2024-03-07",
  "ClientName": "Mia Taylor",
  "ClientRC": "678901234",
  "ClientAddress": "567 Pine Street, City, Country",
  "ClientPhone": "+213343434343",
  "ClientBank": "Mia Bank",
  "SupplierName": "Computer Solutions Inc.",
  "SupplierRC": "321098765",
  "SupplierAddress": "678 Cedar Street, City, Country",
  "SupplierPhone": "+213353535353",
  "SupplierBank": "Computer Solutions Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Fixing Overheating Issues",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 50,
  "ItemTax": 5
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Cleaning Dust from Components",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 40,
  "ItemTax": 4
  }
  ]
  },
  {
  "InvoiceID": "113",
  "InvoiceDate": "2024-03-08",
  "ClientName": "Noah White",
  "ClientRC": "789012345",
  "ClientAddress": "901 Oak Street, City, Country",
  "ClientPhone": "+213363636363",
  "ClientBank": "Noah Bank",
  "SupplierName": "Tech Experts",
  "SupplierRC": "210987654",
  "SupplierAddress": "345 Elm Street, City, Country",
  "SupplierPhone": "+213373737373",
  "SupplierBank": "Tech Experts Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Fixing Sound Issues",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 30,
  "ItemTax": 3
  }
  ]
  },
  {
  "InvoiceID": "114",
  "InvoiceDate": "2024-03-09",
  "ClientName": "Sophia Martinez",
  "ClientRC": "890123456",
  "ClientAddress": "012 Cedar Street, City, Country",
  "ClientPhone": "+213383838383",
  "ClientBank": "Sophia Bank",
  "SupplierName": "PC Doctors",
  "SupplierRC": "765432109",
  "SupplierAddress": "678 Maple Street, City, Country",
  "SupplierPhone": "+213393939393",
  "SupplierBank": "PC Doctors Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Fixing Internet Connectivity Issues",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 40,
  "ItemTax": 4
  },
  {
  "ItemID": "002",
  "ItemLibelle": "Optimizing System Performance",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 50,
  "ItemTax": 5
  }
  ]
  },
  {
  "InvoiceID": "115",
  "InvoiceDate": "2024-03-10",
  "ClientName": "Isabella Lee",
  "ClientRC": "901234567",
  "ClientAddress": "234 Elm Street, City, Country",
  "ClientPhone": "+213404040404",
  "ClientBank": "Isabella Bank",
  "SupplierName": "Computer Assist",
  "SupplierRC": "543210987",
  "SupplierAddress": "901 Maple Street, City, Country",
  "SupplierPhone": "+213414141414",
  "SupplierBank": "Computer Assist Bank",
  "InvoiceItems": [
  {
  "ItemID": "001",
  "ItemLibelle": "Diagnosing System Issues",
  "ItemUnit": "service",
  "ItemQuantity": 1,
  "ItemPrice": 60,
  "ItemTax": 6
  }
  ]
  }
  ]
  

app.get('', (req, res) => {  
  // res.send({ message : 'Hello World'});
  res.json({ message : 'welcome to the Factures Clients'});

});

// GET All facutre
app.get('/api/fatures', (req, res) => {  
  // res.send({ message : 'Hello World'});
  res.json({succes: true, data: fatures});
});

// GET specific facture 
app.get('/api/fatures/:InvoiceID', (req, res) => {  
  // res.send({ message : 'Hello World'});
  const facture = fatures.find((facture) => +facture.InvoiceID === +req.params.InvoiceID);
  if(!facture) {
    res.status(404).json({succes: false, error: 'Ressource not found'});
  }
  res.json({succes: true, data: facture});
});

// we create our server 
app.listen(port, () => console.log(`Server listening on port ${port}`));
