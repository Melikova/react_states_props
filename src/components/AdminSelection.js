import {useState} from 'react';
import data from './../data/selectionData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export function AdminSelection(props) {
    const [selected_first, setSelectedFirst] = useState();
    const [selected_second, setSelectedSecond] = useState();
    const [selected_third, setSelectedThird] = useState();
    
    const [isActive_second, setIsActiveSecond] = useState(false);
    const [isActive_third, setIsActiveThird] = useState(false);
    const [isActive_radio, setIsActiveRadio] = useState(false);

    const handleChange_first = event => {
        setSelectedFirst(event.target.value);
        setIsActiveSecond(true);
    };

    const handleChange_second = event => {
        setSelectedSecond(event.target.value);
        setIsActiveThird(true);
    };

    const handleChange_third = event => {
        setSelectedThird(event.target.value);
        setIsActiveRadio(true);
    };

    const handleChange_radio = event =>{
        console.log(event.target.value);
        props.setSelectedRadio(event.target.value);
    }

    function renderOptions(data){
       return  Object.values(data).map((v, k)=>{
            return (<option key={v+k} value={v.value}>{v.option}</option>)
        })
    }

    return (
        <Container fluid className="my-5">
        <Row className="me-2">
          <Col xs={12} md className="m-2">
            <Form.Select aria-label="Default select example" value={selected_first} onChange={handleChange_first}>
              <option>Open this select menu</option>
              {renderOptions(data[0].selection_data.selection_one)}
            </Form.Select>  
          </Col>
          <Col xs={12} md className="m-2">
            <Form.Select className={ isActive_second ? "d-block" : "d-none"} aria-label="Default select example" value={selected_second} onChange={handleChange_second}>
              <option>Open this select menu</option>
              {renderOptions(data[0].selection_data.selection_two)}
            </Form.Select>  
          </Col>
          <Col xs={12} md className="m-2">
            <Form.Select className={ isActive_third ? "d-block" : "d-none"} aria-label="Default select example" value={selected_third} onChange={handleChange_third}>
              <option>Open this select menu</option>
              {renderOptions(data[0].selection_data.selection_three)}
            </Form.Select>  
          </Col>
          <Col xs={12} md={4}>
            <div className={ isActive_radio ? "d-block d-flex mx-2 align-items-center m-2" : "d-none"}>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" value="modify" name="radio_action" id="modify" onChange={handleChange_radio}></input>
                  <label className="form-check-label" htmlFor="modify">Modify</label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" value="add" name="radio_action" id="add" onChange={handleChange_radio}></input>
                  <label className="form-check-label" htmlFor="add">Add</label>
                </div>
                <div className="form-check mx-2">
                  <input className="form-check-input" type="radio" value="delete" name="radio_action" id="delete" onChange={handleChange_radio}></input>
                  <label className="form-check-label" htmlFor="delete">Delete</label>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default AdminSelection;
  