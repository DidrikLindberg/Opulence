const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Appointment {
  id: ID
  customer: Customer
  cleaningService: CleaningService!

  status: String!
}

type CleaningService {
  id: ID
  name: String
  description: String
  price: Float
  estimatedDuration: Int
}

type Customer {
  id: ID
  name: String!
  address: String!
  phone: String!
}

type Query {
  appointments (customer: ID, name: String): [Appointment]
  cleaningServices: [CleaningService]!
  customers: [Customer]!
}

type Mutation {
  createAppointment(customer: ID, cleaningService: ID): Appointment!
  updateAppointment(id: ID, status: String!): Appointment!
  deleteAppointment(id: ID): Boolean!
}
`;

module.exports = typeDefs;
