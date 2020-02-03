import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Land Dox</Navbar.Brand>
      <Navbar.Brand>Owner</Navbar.Brand>
      <Navbar.Brand>Mineral Interest</Navbar.Brand>
      <Navbar.Brand>NPRI</Navbar.Brand>
      <Navbar.Brand>Lease</Navbar.Brand>
    </Navbar>
  );
};

export { AppBar };
