const db = require('./connection');
const { Appointment, CleaningService, Customer } = require('../models');

db.once('open', async () => {
 

  await CleaningService.deleteMany();

  const cleaningServices = await CleaningService.insertMany([
    {
      name: 'Standard Cleaning',
      description:
        'This cleaning service includes general cleaning tasks such as dusting, vacuuming, mopping, and cleaning bathrooms and kitchens.',
      price: 100,
      estimatedDuration: 2
    },
    {
      name: 'Deep Cleaning',
      description:
        'This cleaning service includes more thorough cleaning tasks such as cleaning inside appliances, cleaning windows, and cleaning upholstery.',
      price: 200,
      estimatedDuration: 4
    }
  ]);

  console.log('cleaningServices seeded');

  await Customer.deleteMany();

  const customers = await Customer.insertMany([
    {
      name: 'John Doe',
      address: '123 Main Street',
      phone: '123-456-7890'
    },
    {
      name: 'Jane Doe',
      address: '456 Elm Street',
      phone: '987-654-3210'
    }
  ]);

  console.log('customers seeded');

  await Appointment.deleteMany();

  const appointments = await Appointment.insertMany([
    {
      customer: customers[0]._id,
      cleaningService: cleaningServices[0]._id,
      // date: new Date('2023-09-25'),
      // startTime: new Date('2023-09-25T10:00:00'),
      // endTime: new Date('2023-09-25T12:00:00'),
      status: 'pending'
    },
    {
      customer: customers[1]._id,
      cleaningService: cleaningServices[1]._id,
      // date: new Date('2023-09-26'),
      // startTime: new Date('2023-09-26T13:00:00'),
      // endTime: new Date('2023-09-26T15:00:00'),
      status: 'confirmed'
    }
  ]);

  console.log('appointments seeded');

  process.exit();
});
