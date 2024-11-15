// src/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is 
import './Navbar.css'

import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">
        <img 
          src="http://99.99.99.30/EPC/javax.faces.resource/12.png.xhtml?ln=image" 
          alt="Brand Logo" 
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle" 
              href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-3953" 
              id="navbarDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <i className="fa fa-dashboard"></i>Dashboard
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-3953">Quicksight Console</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Customer System Access Old</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Customer System Access</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Customer System Access New</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Work Order Status CSA</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">API Dashboard</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991"><i className="fa fa-user-cog"></i>Inspection Results</a>
          </li>
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle" 
              href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991" 
              id="commercialDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <i className="fa fa-building"></i>Commercial
            </a>
            <div className="dropdown-menu" aria-labelledby="commercialDropdown">
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Customer Registration</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Tariff General</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Contract Registration</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Inventory Old</a>
              <Link className="dropdown-item" to="/inventery">Inventory</Link>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Customer Services</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Review</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Review New</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">CheckList Review</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">WorkOrder Planning</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Inventory Audit</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">KItem History</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">WorkOrder Category</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Hold & Release</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">General Service Work Order</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">WItem Details</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">WMS Parts Status</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Container Details</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Customer Complaints / Internal Defects Log</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">WorkOrder Planning Old</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991"><i className="fa fa-user-cog"></i>Technical Services</a>
          </li>
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle" 
              href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991" 
              id="invoiceDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <i className="fa fa-file-text"></i>Invoice
            </a>
            <div className="dropdown-menu" aria-labelledby="invoiceDropdown">
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Credit Note</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Invoice</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Party Revenue Summary</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Storage Party</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle" 
              href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991" 
              id="storesDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <i className="fa fa-archive"></i>Stores
            </a>
            <div className="dropdown-menu" aria-labelledby="storesDropdown">
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Indent</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Indent Approval</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Cancel Indent Approval</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Purchase Order</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Purchase Order Approval</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Cancel Purchase Order Approval</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Stock Receipt</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Stock Issue</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Stock Transfer</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">3D Warehouse</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle" 
              href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991" 
              id="planningDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <i className="fa fa-calendar"></i>Planning
            </a>
            <div className="dropdown-menu" aria-labelledby="planningDropdown">
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Yard View</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Yard Planning</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991"><i className="fa fa-user-cog"></i>Reports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991"><i className="fa fa-user-cog"></i>CSA Reports</a>
          </li>
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle" 
              href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991" 
              id="integrationsDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
              <i className="fa fa-plug"></i>Integrations
            </a>
            <div className="dropdown-menu" aria-labelledby="integrationsDropdown">
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">InBound Message Status</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Error Handling</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">OutBound Message Status</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">One Finance Message Status</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">Invoice Message status</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">InBound WMS Message Status</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">GL Response</a>
              <a className="dropdown-item" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991">WMS Error Handling</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991"><i className="fa fa-user-cog"></i>Client Records</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991"><i className="fa fa-user-cog"></i>One Finance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://99.99.99.30/EPC/dashboard.xhtml?dswid=-6991"><i className="fa fa-user-cog"></i>Application</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
