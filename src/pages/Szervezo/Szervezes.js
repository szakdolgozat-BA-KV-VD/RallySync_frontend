import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { Form } from 'react-bootstrap';
import '../../css/szervezUrlap.css';
import APIContext from '../../contexts/APIContext';

function Szervezes() {
  const { user } = useContext(AuthContext);
  const { helyszinLista, categoryLista } = useContext(APIContext);
  return (
    <div>
      <Form className="urlap">
        <h3>Szervezés</h3>
        <div className="form-group">
          <div className='kivalaszt'>
            <label htmlFor="">Megnevezés</label>
            <input type="text" name="versenynev" id="versenynev" />
            <label>Helyszín</label>
            <select className="form-select form-select-lg mb-3 w-30">
              {
                helyszinLista.map((elem, key) => {
                  return (<option>{elem.place}</option>)
                })
              }
            </select>
          </div>
          <div className='category'>
            <label>Kategória</label>
            <div>
            {
              categoryLista.map((elem, key) => {
                return (
                  <>
                    <div className='catelem'>
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      <label htmlFor="">{elem.category}</label>
                    </div>
                  </>
                )
              })
            }
            </div>
          </div>
          <div>
            <label htmlFor="">Leírás</label>
            <textarea name="description" id="description" rows='4' cols='30'/>
          </div>
          <div className='datumok'>
            <div>
              <label htmlFor="">Kezdés</label>
              <input className = "datum" type="date" name="start_date" id="start_date" />
            </div>
            <div>
              <label htmlFor="">Vége</label>
              <input className = "datum" type="date" name="end_date" id="end_date" />
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Szervezes
