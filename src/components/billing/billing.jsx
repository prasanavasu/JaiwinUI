import { React, useState } from 'react';
import JaiwinNavbar from '../navbar';
import { Container, Row, Col, Button, Table, Modal } from 'react-bootstrap';
import '../billing/billing.css'
import billlogo from '../../billlogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEye, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import convertToHTML from '../../apicall';

function Billing() {
  const [titleaddress, setTitleAddress] = useState('N0,25 Sanmathi Avenue, Paruthipattu, Avadi, Chennai-600 071');
  const [date, setDate] = useState('2023-09-10');
  const [estimateNO, setEstimateNo] = useState('89025');
  const [email, setEmail] = useState('admin@jaiwin.co.in');
  const [mobile, setMobile] = useState('9787899368');
  const [gstin, setGstin] = useState('afdf241241as');
  const [name, setName] = useState('JAIWIN ENTERPRISES');
  const [address, setAddress] = useState('N0,25 Sanmathi Avenue, Paruthipattu');
  const [place, setPlace] = useState('Avadi');
  const [city, setCity] = useState('Chennai-600 071');
  const [state, setState] = useState('TamilNadu');
  const [amountword, SetAmountWord] = useState('Amounts in words');
  const [terms, SetTerms] = useState('Thank You giving this opportunity to do business with you !');
  const [logoFile, setLogoFile] = useState(null);
  const [logoTitle, setLogoTitle] = useState('JAIWIN ENTERPRISES');
  const [selectedFile, setSelectedFile] = useState(null);
  const [stampFile, setStampFile] = useState(null);
  const [holder, setHolder] = useState('Holder Name');
  const [ifsc, setIFSC] = useState('IFSC CODE');
  const [accountNumber, setAccountNumber] = useState('Account Number');
  const [bankName, setBankName] = useState('Bank Name');
  const [title, setTitle] = useState('Proforma Invoice');
  const [subtotal, setSubTotal] = useState(13700);
  const [roundoff, setRoundOff] = useState(0.04);
  const [showPreview, setShowPreview] = useState(false);
  const [qtyTotal, setQtyTotal] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);


  const [tableData, setTableData] = useState([
    {
      sno: 1,
      itemName: '',
      itemCode: '',
      quantity: '',
      unit: '',
      price: '₹',
      taxes: '%',
      total: '₹',
    },
  ]);

  const [taxData, setTaxData] = useState([
    {
      taxtype: '',
      price: '₹',
      rate: '%',
      total: '₹',
    },
  ]);


  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (id === "scanner") {
      setSelectedFile(file);
    }
    else if (id === "logo") {
      setLogoFile(file);
    } else {
      setStampFile(file);
    }


  };

  const handleTableDataChange = (index, field, value,id) => {

    if (id === 'table') {
      if (tableData.length > 0) {
        const updatedTableData = [...tableData];
        updatedTableData[index][field] = value;
        setTableData(updatedTableData);
        if (field === "quantity"){
          const totalquantity = parseInt(qtyTotal) + parseInt(value)
          setQtyTotal(totalquantity)
        }else if (field === "total"){
          const matches = value.match(/(₹)(\d+)/);
          if (matches) {
            const numberPart = matches[2];
          const amount = parseInt(totalamount) + parseInt(numberPart)
          setTotalAmount(amount)
          }
          
        }
      }
    } else {
      if (taxData.length > 0) {
        const updatedTaxData = [...taxData];
        updatedTaxData[index][field] = value;
        setTaxData(updatedTaxData);

        
      }
    }
  };

  const addRow = (id) => {
    if (id === 'table') {
      const newRow = {
        sno: tableData.length + 1,
        itemName: '',
        itemCode: '',
        quantity: '',
        unit: '',
        price: '₹',
        taxes: '%',
        total: '₹',
      };
      setTableData([...tableData, newRow]);
    }
    else {
      const taxRow = {
        taxtype: '',
        price: '₹',
        rate: '%',
        total: '₹',
      }
      setTaxData([...taxData, taxRow]);
    }

  };

  const removeRow = (id) => {
    if (id === 'table') {
      if (tableData.length > 0) {
        const updatedTableData = [...tableData];
        updatedTableData.pop();
        setTableData(updatedTableData);
      }
    } else {
      if (taxData.length > 0) {
        const updatedTaxData = [...taxData];
        updatedTaxData.pop();
        setTaxData(updatedTaxData);
      }
    }

  };

  const previewContent = () => {
    setShowPreview(true);
  };

  return (
    <>
      <JaiwinNavbar />
      <Button onClick={previewContent} className="m-3" size="sm" style={{ position: 'absolute', right: 20 }}>
        <FontAwesomeIcon icon={faEye} />
      </Button><br></br>
      <div className="my-5">
        <center><h4 className='my-2' style={{ fontWeight: "bolder" }}><input
          className='text-center'
          style={{ width: '70%', fontWeight: "bolder" }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></h4></center>
        <Container className='p-0' style={{ border: '2px solid #000', padding: '20px' }}>
          <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
            <Col>

              <img
                src={logoFile ? URL.createObjectURL(logoFile) : billlogo}
                alt="Profile Preview"
                style={{ width: '150px', height: '100px' }}
              />
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "logo")} />

            </Col>
            <Col className='text-right'>
              <h5 className='m-0' style={{ fontWeight: "bolder" }} > <input
                className='text-right'
                style={{ width: '70%', fontWeight: "bolder" }}
                type="text"
                value={logoTitle}
                onChange={(e) => setLogoTitle(e.target.value)}
              /></h5>
              <input
                style={{ width: '70%' }}
                type="text"
                value={titleaddress}
                onChange={(e) => setTitleAddress(e.target.value)}
              /><br></br>

              <span>
                Email:{' '}
                <input
                  style={{ width: '32%' }}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <span>
                Phone No:{' '}
                <input
                  style={{ width: '18%' }}
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </span>
              <p className='m-0'>
                GSTIN:{' '}
                <input
                  style={{ width: '25%' }}
                  type="text"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                />
              </p>
            </Col>
          </Row>
          <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
            <Col className='p-0' style={{ borderRight: '2px solid #000' }}>
              <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                Estimate For
              </p>
              <div className='mx-2'>
                <p className="m-0">
                  <input
                    style={{ fontWeight: 'bolder' }}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p className="m-0">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </p>
                <p className="m-0">
                  <input
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </p>
                <p className="m-0">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </p>
                <p className="m-0">
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </p>
              </div>

            </Col>
            <Col className='text-right'>
              <p style={{ marginTop: "7%" }}></p>
              <p className='m-0'>
                Email:{' '}
                <input
                  style={{ width: '32%' }}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p className='m-0' style={{ fontWeight: "bolder" }}>
                Estimate No:{' '}
                <input
                  style={{ width: '32%' }}
                  type="text"
                  value={estimateNO}
                  onChange={(e) => setEstimateNo(e.target.value)}
                />
              </p>
              <p className='m-0' style={{ fontWeight: "bolder" }}>
                Date:{' '}
                <input
                  style={{ width: '32%' }}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </p>
            </Col>
          </Row>
          <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
            <div className="my-2">
              <Button variant="success" size="sm" onClick={() => addRow('table')}><FontAwesomeIcon icon={faPlusSquare} /></Button>{' '}
              <Button variant="danger" size="sm" onClick={() => removeRow('table')}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>{' '}
            </div>

            <Table id="sourceTable">
              <thead>
                <tr className="text-center billing-table" style={{ backgroundColor: "#008000" }}>
                  <th scope="col" style={{ width: 40 }}>#</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Item Code</th>
                  <th scope="col" style={{ width: 40 }}>Quantity</th>
                  <th scope="col" style={{ width: 80 }}>Unit</th>
                  <th scope="col" style={{ width: 150 }}>Price</th>
                  <th scope="col" style={{ width: 70 }}>Taxes</th>
                  <th scope="col" style={{ width: 150 }}>Total Amount</th>
                </tr>
              </thead>

              <tbody className="text-center " id="myTable">
                {tableData.map((row, index) => (
                  <tr key={index} className='bill-table'>
                    <td>
                      <input
                        type="text"
                        className="data1"
                        style={{ textAlign: 'center' }}
                        value={row.sno}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="data2"
                        style={{ textAlign: 'center', width: '100%' }}
                        value={row.itemName}
                        onChange={(e) =>
                          handleTableDataChange(index, 'itemName', e.target.value,'table')
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="data2"
                        style={{ textAlign: 'center', width: '100%' }}
                        value={row.itemCode}
                        onChange={(e) =>
                          handleTableDataChange(index, 'itemCode', e.target.value,'table')
                        }
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        className="data3"
                        style={{ textAlign: 'center', width: '100%' }}
                        value={row.quantity}
                        min={0}
                        onChange={(e) =>
                          handleTableDataChange(index, 'quantity', e.target.value,'table')
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="data5"
                        style={{ textAlign: 'center', width: '100%' }}
                        value={row.unit}
                        onChange={(e) =>
                          handleTableDataChange(index, 'unit', e.target.value,'table')
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="data5"
                        style={{ textAlign: 'center', width: '100%' }}
                        value={row.price}
                        onChange={(e) =>
                          handleTableDataChange(index, 'price', e.target.value,'table')
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="data4"
                        style={{ textAlign: 'center', width: '100%' }}
                        value={row.taxes}
                        onChange={(e) =>
                          handleTableDataChange(index, 'taxes', e.target.value,'table')
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="data5"
                        style={{ textAlign: 'center', width: '100%' }}
                        value={row.total}
                        onChange={(e) =>
                          handleTableDataChange(index, 'total', e.target.value,'table')
                        }
                      />
                    </td>
                  </tr>
                ))}
                <tr >
                  <td></td>
                  <td style={{ fontWeight: "bolder" }}>Total</td>
                  <td></td>
                  <td style={{ fontWeight: "bolder" }}>{qtyTotal}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ fontWeight: "bolder" }}>₹{totalamount}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <div className="m-2">
            <Button variant="success" size="sm" onClick={() => addRow('tax')}><FontAwesomeIcon icon={faPlusSquare} /></Button>{' '}
            <Button variant="danger" size="sm" onClick={() => removeRow('tax')}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
          </div>
          <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
            <Col className='p-0' style={{ borderRight: '2px solid #000' }}>

              <Table id="sourceTable" className='tax-table'>
                <thead>
                  <tr className="text-center billing-table" style={{ backgroundColor: "#008000" }}>
                    <th scope="col" style={{ width: 80 }}>Tax Type</th>
                    <th scope="col" style={{ width: 150 }}>Price</th>
                    <th scope="col" style={{ width: 70 }}>Rate</th>
                    <th scope="col" style={{ width: 150 }}>Tax Amount</th>
                  </tr>
                </thead>
                <tbody className="text-center" id="myTable">
                  {taxData.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          className="data1"
                          style={{ textAlign: 'center' }}
                          value={row.taxtype}
                          onChange={(e) =>
                            handleTableDataChange(index, 'taxtype', e.target.value,'tax')
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="data2"
                          style={{ textAlign: 'center', width: '100%' }}
                          value={row.price}
                          onChange={(e) =>
                            handleTableDataChange(index, 'price', e.target.value,'tax')
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="data2"
                          style={{ textAlign: 'center', width: '100%' }}
                          value={row.rate}
                          onChange={(e) =>
                            handleTableDataChange(index, 'rate', e.target.value,'tax')
                          }
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          className="data3"
                          style={{ textAlign: 'center', width: '100%' }}
                          value={row.total}
                          onChange={(e) =>
                            handleTableDataChange(index, 'total', e.target.value,'tax')
                          }
                        />
                      </td>

                    </tr>
                  ))}
                </tbody>

              </Table>
              <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                Estimate Amount in words
              </p>
              <p className="m-0">
                <input
                  className='text-center'
                  style={{ width: '100%' }}
                  type="text"
                  value={amountword}
                  onChange={(e) => SetAmountWord(e.target.value)}
                />
              </p>
            </Col>
            <Col className='p-0'>
              <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                Amounts
              </p>
              <p className='subtotal-container'>
                <span style={{ marginLeft: 10 }}>Sub Total</span>
                <span className='subtotal-amount' style={{ marginRight: -112 }}>₹ <input
                  style={{ width: '30%' }}
                  type="text"
                  value={subtotal}
                  onChange={(e) => setSubTotal(e.target.value)}
                /></span>
              </p>
              <p className='subtotal-container'>
                <span style={{ marginLeft: 10 }}>Round off</span>
                <span className='subtotal-amount' style={{ marginRight: -112 }}>₹ <input
                  style={{ width: '30%' }}
                  type="text"
                  value={roundoff}
                  onChange={(e) => setRoundOff(e.target.value)}
                /></span>
              </p>
              <p style={{ fontWeight: "bolder" }} className='subtotal-container'>
                <span style={{ marginLeft: 10 }}>Total</span>
                <span className='subtotal-amount'>₹ {parseFloat(subtotal) + parseFloat(roundoff)}</span>
              </p>
            </Col>
          </Row>
          <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
            <Col className='p-0' style={{ borderRight: '2px solid #000' }}>
              <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                Terms and Conditions
              </p>
              <p className="m-0">
                <input
                  className='text-center'
                  style={{ width: '100%' }}
                  type="text"
                  value={terms}
                  onChange={(e) => SetTerms(e.target.value)}
                />
              </p>
              <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                Bank Details
              </p>
              <p className="m-0">
                <span style={{ fontWeight: "bolder" }}>
                  Bank Name:{' '}
                  <input
                    style={{ width: '70%' }}
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </span>
              </p>
              <p className="m-0">
                <span style={{ fontWeight: "bolder" }}>
                  Account No:{' '}
                  <input
                    style={{ width: '70%' }}
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </span>
              </p>
              <p className="m-0">
                <span style={{ fontWeight: "bolder" }}>
                  IFSC code:{' '}
                  <input
                    style={{ width: '70%' }}
                    type="text"
                    value={ifsc}
                    onChange={(e) => setIFSC(e.target.value)}
                  />
                </span>
              </p>
              <p className="m-0">
                <span style={{ fontWeight: "bolder" }}>
                  Holder's name:{' '}
                  <input
                    style={{ width: '70%' }}
                    type="text"
                    value={holder}
                    onChange={(e) => setHolder(e.target.value)}
                  />
                </span>

              </p>
            </Col>
            <Col className='p-0' style={{ borderRight: '2px solid #000' }}>

              <img
                src={selectedFile ? URL.createObjectURL(selectedFile) : billlogo}
                alt="Scanner Preview"
                style={{ width: '150px', height: '150px' }}
              />
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'scanner')} />
            </Col>
            <Col className='p-0' >
              <center>
                <img
                  src={stampFile ? URL.createObjectURL(stampFile) : billlogo}
                  alt="Stamp Preview"
                  style={{ width: '150px', height: '150px' }}
                /></center>
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'stamp')} />
            </Col>
          </Row>
        </Container>

      </div>

      <Modal show={showPreview} onHide={() => setShowPreview(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="pdf-content">
            <div className="m-5" >
            <center><h4 className='m-2' style={{ fontWeight: "bolder" }}>{title}</h4></center>
            <Container className='p-0' style={{ border: '2px solid #000', padding: '20px' }}>
              <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
                <Col>

                  <img
                    src={logoFile ? URL.createObjectURL(logoFile) : billlogo}
                    alt="Profile Preview"
                    style={{ width: '150px', height: '100px' }}
                  />

                </Col>
                <Col className='text-right'>
                  <h5 className='m-0' style={{ fontWeight: "bolder" }} > {logoTitle}</h5>
                  {titleaddress}<br></br>

                  <span>
                    Email:{' '}
                    {email}
                  </span>
                  <span>
                    Phone No:{' '}
                    {mobile}
                  </span>
                  <p className='m-0'>
                    GSTIN:{' '}
                    {gstin}
                  </p>
                </Col>
              </Row>
              <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
                <Col className='p-0' style={{ borderRight: '2px solid #000' }}>
                  <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                    Estimate For
                  </p>
                  <div className='mx-2'>
                    <p className="m-0" style={{ fontWeight: "bolder" }}>
                      {name}
                    </p>
                    <p className="m-0">
                      {address}
                    </p>
                    <p className="m-0">
                      {place}
                    </p>
                    <p className="m-0">
                      {city}
                    </p>
                    <p className="m-0">
                      {state}
                    </p>
                  </div>

                </Col>
                <Col className='text-right'>
                  <p style={{ marginTop: "7%" }}></p>
                  <p className='m-0' style={{ fontWeight: "bolder" }}>
                    Email:{' '}
                    <span style={{ fontWeight: "normal" }}> {email}</span>
                  </p>
                  <p className='m-0' style={{ fontWeight: "bolder" }}>
                    Estimate No:{' '}
                    <span style={{ fontWeight: "normal" }}> {estimateNO}</span>
                  </p>
                  <p className='m-0' style={{ fontWeight: "bolder" }} >
                    Date:{' '}
                    <span style={{ fontWeight: "normal" }}> {date}</span>

                  </p>
                </Col>
              </Row>
              <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
                <Table id="sourceTable">
                  <thead>
                    <tr className="text-center billing-table" style={{ backgroundColor: "#008000" }}>
                      <th scope="col" style={{ width: 40 }}>#</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Item Code</th>
                      <th scope="col" style={{ width: 40 }}>Quantity</th>
                      <th scope="col" style={{ width: 80 }}>Unit</th>
                      <th scope="col" style={{ width: 150 }}>Price</th>
                      <th scope="col" style={{ width: 70 }}>Taxes</th>
                      <th scope="col" style={{ width: 150 }}>Total Amount</th>
                    </tr>
                  </thead>

                  <tbody className="text-center " id="myTable">
                    {tableData.map((row, index) => (
                      <tr key={index} className='bill-table'>
                        <td>
                          {row.sno}
                        </td>
                        <td>
                          {row.itemName}
                        </td>
                        <td>
                          {row.itemCode}
                        </td>

                        <td>
                          {row.quantity}
                        </td>
                        <td>
                          {row.unit}
                        </td>
                        <td>
                          {row.price}
                        </td>
                        <td>
                          {row.taxes}
                        </td>
                        <td>
                          {row.total}
                        </td>
                      </tr>
                    ))}
                    <tr >
                      <td></td>
                      <td style={{ fontWeight: "bolder" }}>Total</td>
                      <td></td>
                      <td style={{ fontWeight: "bolder" }}>{qtyTotal}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
                <Col className='p-0' style={{ borderRight: '2px solid #000' }}>

                  <Table id="sourceTable" className='tax-table'>
                    <thead>
                      <tr className="text-center billing-table" style={{ backgroundColor: "#008000" }}>
                        <th scope="col" style={{ width: 80 }}>Tax Type</th>
                        <th scope="col" style={{ width: 150 }}>Price</th>
                        <th scope="col" style={{ width: 70 }}>Rate</th>
                        <th scope="col" style={{ width: 150 }}>Tax Amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-center" id="myTable">
                      {taxData.map((row, index) => (
                        <tr key={index}>
                          <td>
                            {row.taxtype}
                          </td>
                          <td>
                            {row.price}
                          </td>
                          <td>
                            {row.rate}
                          </td>

                          <td>
                            {row.total}
                          </td>

                        </tr>
                      ))}
                    </tbody>

                  </Table>
                  <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                    Estimate Amount in words
                  </p>
                  <p className="m-0">
                    {amountword}
                  </p>
                </Col>
                <Col className='p-0'>
                  <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                    Amounts
                  </p>
                  <p className='subtotal-container'>
                    <span style={{ marginLeft: 10 }}>Sub Total</span>
                    <span className='subtotal-amount' >₹ {subtotal}</span>
                  </p>
                  <p className='subtotal-container'>
                    <span style={{ marginLeft: 10 }}>Round off</span>
                    <span className='subtotal-amount' >₹ {roundoff}</span>
                  </p>
                  <p style={{ fontWeight: "bolder" }} className='subtotal-container'>
                    <span style={{ marginLeft: 10 }}>Total</span>
                    <span className='subtotal-amount'>₹ {parseFloat(subtotal) + parseFloat(roundoff)}</span>
                  </p>
                </Col>
              </Row>
              <Row className='m-0' style={{ borderBottom: '2px solid #000' }}>
                <Col className='p-0' style={{ borderRight: '2px solid #000' }}>
                  <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                    Terms and Conditions
                  </p>
                  <p className="m-0">
                    {terms}
                  </p>
                  <p className='m-0 px-2 py-1' style={{ borderBottom: '2px solid #000', fontWeight: "bolder", color: "white", backgroundColor: "#008000" }}>
                    Bank Details
                  </p>
                  <p className="m-0">
                    {bankName}
                  </p>
                  <p className="m-0">
                    <span style={{ fontWeight: "bolder" }}>
                      Account No:{' '}
                      {accountNumber}
                    </span>
                  </p>
                  <p className="m-0">
                    <span style={{ fontWeight: "bolder" }}>
                      IFSC code:{' '}
                      {ifsc}
                    </span>
                  </p>
                  <p className="m-0">
                    <span style={{ fontWeight: "bolder" }}>
                      Holder's name:{' '}
                      {holder}
                    </span>

                  </p>
                </Col>
                <Col className='p-0' style={{ borderRight: '2px solid #000' }}>

                  <img
                    src={selectedFile ? URL.createObjectURL(selectedFile) : billlogo}
                    alt="Scanner Preview"
                    style={{ width: '150px', height: '150px' }}
                  />

                </Col>
                <Col className='p-0' >
                  <center>
                    <img
                      src={stampFile ? URL.createObjectURL(stampFile) : billlogo}
                      alt="Stamp Preview"
                      style={{ width: '150px', height: '150px' }}
                    /></center>

                </Col>
              </Row>
            </Container>

          </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={convertToHTML}>
            Generate PDF
          </Button>
          <Button variant="secondary" onClick={() => setShowPreview(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Billing