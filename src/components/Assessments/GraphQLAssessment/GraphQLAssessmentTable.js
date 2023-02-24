import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CAKES = gql`
  query GetCakes {
    cakes {
      description
      id
      image
      title
    }
  }
`;

export default function GraphQLAssessmentTable() {
  const { loading, error, data } = useQuery(GET_CAKES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.cakes);
  return (
    <table id="reduxAssessmentTable">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.cakes.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <img src={item.image} alt={item.title} className="w-80" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
