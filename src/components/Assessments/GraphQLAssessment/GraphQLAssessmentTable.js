import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, data } = useQuery(GET_CAKES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.cakes);

  const filteredCakes = data.cakes.filter((cake) =>
    cake.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search cakes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-80  my-4"
      />
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
          {filteredCakes.map((item) => (
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
    </>
  );
}
