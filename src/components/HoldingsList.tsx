import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { Holding } from '../types';

const HOLDINGS = gql`
  query {
    allHoldings {
      id
      name
      category
      icon_url
      amount
      value_usd
      symbol
      denomination
      number
      pin
    }
  }
`;

function HoldingsList() {
  const { loading, error, data } = useQuery(HOLDINGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allHoldings?.map((h: Holding) => (
    <div key={h.id}>
      <p>{h.name}: {h.amount} {h.category}</p>
    </div>
  ));
}

export default HoldingsList;
