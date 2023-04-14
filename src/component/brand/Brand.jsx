import React from 'react'
import "./brand.css";
import { google,slack,atlassian,dropbox,shopify } from './import';

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="" srcset="" />
      </div>
      <div>
        <img src={slack} alt="" srcset="" />
      </div>
      <div>
        <img src={atlassian} alt="" srcset="" />
      </div>
      <div>
        <img src={dropbox} alt="" srcset="" />
      </div>
      <div>
        <img src={shopify} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Brand
