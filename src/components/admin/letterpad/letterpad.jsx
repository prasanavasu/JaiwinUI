import React, { useState } from 'react'
import '../letterpad/letterpad.css'
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEye,faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import JaiwinNavbar from '../navbar';
import { usePDF } from 'react-to-pdf';


function LetterPad() {
  const [mobile, setMobile] = useState('9787899368');
  const [date, setDate] = useState('2023-08-12');
  const [name, setName] = useState('Mr Prasana Kumar S');
  const [address, setAddress] = useState('N0,25 Sanmathi Avenue, Paruthipattu');
  const [titleaddress, setTitleAddress] = useState('N0,25 Sanmathi Avenue, Paruthipattu, Avadi, Chennai-600 071');
  const [place, setPlace] = useState('Avadi');
  const [city, setCity] = useState('Chennai-600 071');
  const [state, setState] = useState('TamilNadu');
  const [p1, setP1] = useState(
    'Jaiwin Enterprises offers a variety of ranges for intimate care like sanitary pads, sanitary napkin incinerator, vending machine, R.O. Water system, wheelchair, cleaning products, and more.'
  );
  const [tableData, setTableData] = useState([
    {
      sno: 1,
      itemDescription: '',
      quantity: '',
      taxes: '%',
      amount: '₹',
    },
  ]);
  const [p2, setP2] = useState(
    'Jaiwin delivers products within 15 days after order confirmation. Validity Period: 27 days'
  );
  const [p3, setP3] = useState(
    "Above prices are individual and don't include any taxes, insurance cover, or any transportation. Transportation:"
  );
  const [p4, setP4] = useState('To be paid by customers only');
  const [p5, setP5] = useState('Product Delivery:');
  const [files, setFiles] = useState([]);
  const [count, setCount] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const { toPDF, targetRef } = usePDF({filename: 'output.pdf'});

  const handleTableDataChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][field] = value;
    setTableData(updatedTableData);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const newFiles = selectedFiles.map((file) => {
      return {
        id: count + 1,
        name: file.name,
        dataURL: URL.createObjectURL(file),
      };
    });



    setCount(count + newFiles.length);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  const addRow = () => {
    const newRow = {
      sno: tableData.length + 1,
      itemDescription: '',
      quantity: '',
      taxes: '%',
      amount: '₹',
    };
    setTableData([...tableData, newRow]);
  };

  const removeRow = () => {
    if (tableData.length > 0) {
      const updatedTableData = [...tableData];
      updatedTableData.pop();
      setTableData(updatedTableData);
    }
  };

  const formatDate = (inputDate) => {
    const [year, month, day] = inputDate.split('-');
    return `${day}-${month}-${year}`;
  };

  const previewContent = () => {
    setShowPreview(true);
  };
  return (
    <>
    <JaiwinNavbar/>
      <Button onClick={previewContent} className="m-3" size="sm" style={{ position: 'absolute',right: 20}}>
      <FontAwesomeIcon icon={faEye} />
      </Button><br></br>
      <div className="container ridge-border my-5" >
        <p className="text-right m-0 text-success">
          <strong>
            CELL:{' '}
            <input
              type="text"
              style={{ width: '8%' }}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </strong>
        </p>
        <p className="text-center m-0">
          <span className="txt-success header-title">JAIWIN ENTERPRISES</span>
        </p>
        <p className="text-center m-0">
          <input
            className='body-text txt-success text-center'
            type="text"
            value={titleaddress}
            onChange={(e) => setTitleAddress(e.target.value)}
          />
        </p>
        <p className="text-center">
          <span className="body-text txt-success">
            Email:{' '}
            <a href={`mailto:admin@jaiwin.co.in`} className="txt-success">
              admin@jaiwin.co.in
            </a>
          </span>
        </p>
        <hr className="m-0 text-success border-3" />
        <hr className="m-1 txt-success border-3" />
        <p className="text-right m-0 text-success">
          <strong> Date: </strong>
          <input
            type="date"
            style={{ width: '10%' }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </p>
        <div className="container">
          <div className="row row-cols-2 mb-4">
            <div className="col">
              To,
              <div className="mx-4">
                <p className="m-0">
                  <input
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
            </div>
          </div>
          <div className="row row-cols-1">
            <div className="col">
              <p>
                <input
                  type="text"
                  style={{ width: '100%' }}
                  value={p1}
                  onChange={(e) => setP1(e.target.value)}
                />
              </p>
            </div>
          </div>
          <div className="row row-cols-1">
            <div className="col">
              <div className="my-2">
                <Button variant="success" size="sm" onClick={addRow}><FontAwesomeIcon icon={faPlusSquare} /></Button>{' '}
                <Button variant="danger" size="sm" onClick={removeRow}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
              </div>

              <table className="table table-bordered" id="sourceTable">
                <thead>
                  <tr className="text-center">
                    <th scope="col">S.NO</th>
                    <th scope="col">Item Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Taxes</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-center" id="myTable">
                  {tableData.map((row, index) => (
                    <tr key={index}>
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
                          style={{ textAlign: 'center' }}
                          value={row.itemDescription}
                          onChange={(e) =>
                            handleTableDataChange(index, 'itemDescription', e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="data3"
                          style={{ textAlign: 'center' }}
                          value={row.quantity}
                          onChange={(e) =>
                            handleTableDataChange(index, 'quantity', e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="data4"
                          style={{ textAlign: 'center' }}
                          value={row.taxes}
                          onChange={(e) =>
                            handleTableDataChange(index, 'taxes', e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="data5"
                          style={{ textAlign: 'center' }}
                          value={row.amount}
                          onChange={(e) =>
                            handleTableDataChange(index, 'amount', e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row row-cols-1">
            <div className="col">
              <p>
                <input
                  type="text"
                  style={{ width: '100%' }}
                  value={p3}
                  onChange={(e) => setP3(e.target.value)}
                />
                <br />
              </p>
              <p>
                <input
                  type="text"
                  style={{ width: '100%' }}
                  value={p4}
                  onChange={(e) => setP4(e.target.value)}
                />
              </p>
              <p className="my-1">
                <input
                  type="text"
                  style={{ width: '100%' }}
                  value={p5}
                  onChange={(e) => setP5(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="text"
                  style={{ width: '100%' }}
                  value={p2}
                  onChange={(e) => setP2(e.target.value)}
                />
              </p>
            </div>
          </div>
          <div className="row row-cols-1 my-3">
            <div className="col">
              <p className="text-right m-0">
                <span className="sign font-weight-bold">
                  <strong> For Jaiwin Enterprises </strong>
                </span>
              </p>
              <br />
              <div id="selectedFiles" style={{ display: 'grid' }}>
                {files.map((file) => (
                  <div key={file.id} style={{ position: 'relative', marginRight: '10px', marginBottom: '10px' }}>
                    <img src={file.dataURL} alt={file.name} />
                    <Button variant="danger" size="sm" onClick={() => removeFile(file.id)}
                      style={{ position: 'absolute', top: '0', right: '0' }}> <FontAwesomeIcon icon={faTrash} /></Button>{' '}
                  </div>
                ))}
              </div>
              <input
                type="file"
                className=""
                id="files"
                name="files"
                multiple
                style={{ width: '25%' }}
                accept="image/*"
                onChange={handleFileSelect}
              />

            </div>
          </div>
          <br />
         
          <br />
        </div>
      </div>
     
      <Modal show={showPreview} onHide={() => setShowPreview(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container" ref={targetRef}>
            <p className="text-right m-0 text-success">
              <strong> CELL: </strong> <span className="" id="mobile_val">{mobile}</span>
            </p>
            <p className="text-center m-0">
              <span className="txt-success header-title">JAIWIN ENTERPRISES</span>
            </p>
            <p className="text-center m-0">
              <span className="body-text txt-success">{titleaddress}</span>
            </p>
            <p className="text-center">
              <span className="body-text txt-success">Email: <a href="mailto:admin@jaiwin.co.in" className="txt-success">admin@jaiwin.co.in</a></span>
            </p>
            <hr className="m-0 text-success border-3" />
            <hr className="m-1 txt-success border-3" /><br />
            <p className="text-right m-0 text-success">
              <strong> Date: </strong> <span className="">{formatDate(date)}</span>
            </p><br />
            <div className="container">
              <div className="row row-cols-2 mb-4">
                <div className="col">
                  To,<br />
                  <div className="mx-4">
                    <p className="m-0" >{name}</p>
                    <p className="m-0" >{address}</p>
                    <p className="m-0" >{place}</p>
                    <p className="m-0" >{city}</p>
                    <p className="m-0">{state}</p>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1">
                <div className="col">
                  <p>{p1}</p>
                </div>
              </div>
              <div className="row row-cols-1">
                <div className="col">
                <table className="table table-bordered">
                <thead>
                  <tr className="text-center">
                    <th scope="col">S.NO</th>
                    <th scope="col">Item Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Taxes</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-center" id="myTable">
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>
                      <p>{row.sno}</p>
                      
                      </td>
                      <td>
                      <p>{row.itemDescription}</p>
                        
                      </td>
                      <td>
                      <p>{row.quantity}</p>
                  
                      </td>
                      <td>
                      <p>{row.taxes}</p>
                        
                      </td>
                      <td>
                        <p>{row.amount}</p>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                </div>
              </div>
              <div className="row row-cols-1">
                <div className="col">
                  <p >
                    {p3}<br />
                  </p>
                  <p>{p4}</p>
                  <p className="my-1">{p5}</p>
                  <p>
                    {p2}
                  </p>
                </div>
              </div>
              <div className="row row-cols-1 my-3">
                <div className="col">
                  <p className="text-right m-0"><span className="sign font-weight-bold"><strong> For Jaiwin Enterprises</strong></span></p>
                  <br />
                  <div id="selectedFiles" style={{ display: 'grid' }}>
                {files.map((file) => (
                  <div key={file.id} style={{ position: 'relative', marginRight: '10px', marginBottom: '10px' }}>
                    <img src={file.dataURL} alt={file.name} />
                  </div>
                ))}
              </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => toPDF()}>
            Generate PDF
          </Button>
          <Button variant="secondary" onClick={() => setShowPreview(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default LetterPad