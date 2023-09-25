import { gql } from '@apollo/client';

export const QUERY_ALL_APPOINTMENTS = gql`
query {
  appointments {
    _id
    customer {
      _id
      name
    }
    cleaningService {
      _id
      name
    }
    date
    startTime
    endTime
    status
  }
}
`;

export const QUERY_APPOINTMENT_BY_ID = gql`
query getAppointment($id: ID!) {
  appointment(id: $id) {
    _id
    customer {
      _id
      name
    }
    cleaningService {
      _id
      name
    }
    date
    startTime
    endTime
    status
  }
}
`;
export const QUERY_ALL_CUSTOMERS = gql`
query {
  customers {
    _id
    name
    address
    phone
  }
}
`;


export const QUERY_CUSTOMER_BY_ID = gql`
query getCustomer($id: ID!) {
  customer(id: $id) {
    _id
    name
    address
    phone
  }
}
`;

export const QUERY_ALL_CLEANING_SERVICES = gql`
query {
  cleaningSchedules {
    _id
    name
    description
    price
    estimatedDuration
  }
}
`;

export const QUERY_CLEANING_SERVICE_BY_ID = gql`
query getCleaningSchedule($id: ID!) {
  cleaningSchedule(id: $id) {
    _id
    name
    description
    price
    estimatedDuration
  }
}
`;
