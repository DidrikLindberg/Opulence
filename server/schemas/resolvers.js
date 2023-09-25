const { AuthenticationError } = require('apollo-server-express');
const { Appointment, Customer, CleaningService } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    appointments: async () => { 
      try {
        const appointments = await Appointment.find({})
          .populate('customer')
          .populate('cleaningService');
        return appointments;
      } catch (error) {
        // Handle any errors, you can log them or return an error response.
        throw new ApolloError('Failed to fetch appointments', 'APPOINTMENTS_FETCH_ERROR');
      }
    },

    cleaningServices: async () => {
      return await CleaningService.find({})},
        
    customers: async () => {
      return await Customer.find({})
  }
  },
  Mutation: {
    createAppointment: async (_, args) => {
      try {
        const newAppointment = await Appointment.create({
          customer: args.customer,
          cleaningService: args.cleaningService,
          status: 'Pending',
        });
    
        return newAppointment;
      } catch (error) {
        throw new ApolloError('Failed to create appointment', 'CREATE_APPOINTMENT_ERROR');
      }
    },
    updateAppointment: (_, args) => {
      // Replace this with your actual logic to update an appointment
      const appointmentIndex = Appointment.findIndex((appointment) => appointment.id === args.id);
      if (appointmentIndex === -1) {
        throw new ApolloError('Appointment not found', 'APPOINTMENT_NOT_FOUND');
      }

      Appointment[appointmentIndex].status = args.status;
      return Appointment[appointmentIndex];
    },
    deleteAppointment: (_, args) => {
      // Replace this with your actual logic to delete an appointment
      const appointmentIndex = Appointment.findIndex((appointment) => appointment.id === args.id);
      if (appointmentIndex === -1) {
        throw new ApolloError('Appointment not found', 'APPOINTMENT_NOT_FOUND');
      }

      Appointment.splice(appointmentIndex, 1);
      return true;
    },
  },
 Appointment: {
  customer: async (appointment) => {
    try {
      const customer = await Customer.findOne({ _id: appointment.customer });
      if (!customer) {
        throw new ApolloError('Customer not found', 'CUSTOMER_NOT_FOUND');
      }
      return customer;
    } catch (error) {
      throw new ApolloError('Failed to fetch customer', 'FETCH_CUSTOMER_ERROR');
    }
  },
  cleaningService: async (appointment) => {
    try {
      const cleaningService = await CleaningService.findOne({ _id: appointment.cleaningService });
      if (!cleaningService) {
        throw new ApolloError('Cleaning Service not found', 'CLEANING_SERVICE_NOT_FOUND');
      }
      return cleaningService;
    } catch (error) {
      throw new ApolloError('Failed to fetch cleaning service', 'FETCH_CLEANING_SERVICE_ERROR');
    }
  },
},
};
module.exports = resolvers;
