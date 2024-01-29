import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import "./print.css";
export default function PrintPage() {

  const componentRef = useRef();

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;

  return (
    <>
      {/* Add a button to trigger the print */}
   

     
      
  
        
<div className="A4Page">
  <h4 className="d-flex justify-content-center text-uppercase fw-bold m-0">
    shree tirupati textiles
  </h4>
  <p className="d-flex justify-content-center text-uppercase fw-normal  text-decoration-underline m-0">
    Customer wise Register
  </p>
  <p className="d-flex justify-content-center text-uppercase fw-normal  text-decoration-underline ">
    From 00-00-0000 To 00-00-0000
  </p>
  <div className="connerdiv">
    {/* <p className="pageTxt p-0 m-0">page :</p> */}
    <p className="pageDate p-0 m-0">Date : {currentDate}</p>
  </div>
  <div className="row pageHeader">
    <table>
      <tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody>
    </table>
  </div>
  <div className="row pageBody">
    <h6 className="p-1 px-0">maruti textiles</h6>
    <table>
      <tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody>
      <tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody>
      <tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody>
      <tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody><tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody>
    </table>
  </div>
  <div className="row pageHeader">
    <table>
      <tbody className="d-flex justify-content-between">
        <tr>FT.SR.NO</tr>
        <tr>LOT NO.</tr>
        <tr>DATE</tr>
        <tr>BILL NO.</tr>
        <tr>SUPPLIER</tr>
        <tr>QUALITY</tr>
        <tr>PCS</tr>
        <tr>METERES</tr>
        <tr>RATE</tr>
        <tr>BILL AMT</tr>
      </tbody>
    </table>
  </div>
</div>
        
      
    
    </>
  );
}
