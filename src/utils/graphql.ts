import gql from "graphql-tag";

export const GET_ALL_PEOPLE = gql`
  query ($page: Int!) {
    getPersons(page: $page) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

export const GET_A_PERSON = gql`
  query ($searchKey: String!) {
    getPerson(searchKey: $searchKey) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;
