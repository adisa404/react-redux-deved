import React, { Component } from 'react';
import { store } from '../../index';
//import { useDispatch, useSelector } from 'react-redux';
import { setGdprCookieState } from '../../redux/actions/gdprCookieActions';
import './gdprPage.css';
class GdprPage extends Component {
  render() {
    const state = store.getState();
    //const { gdprCookieIsSet } = useSelector((state) => state.gdprCookieIsSet);
    console.log('state', state);
    //const dispatch = useDispatch();
    return (
      <div className='container'>
        <h1 className='text-center'>Bootstrap Pure CSS Switch/Toggle Buttons</h1>
        <div className='col-md-4 col-md-offset-4'>
          <div className='checkbox switcher' onClick={() => store.dispatch(setGdprCookieState(state.gdprCookieIsSet))}>
            <label htmlFor='test'>
              <input type='checkbox' id='test' value='' />
              <span>
                <small></small>
              </span>
              <small>Cookie Switch</small>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default GdprPage;
