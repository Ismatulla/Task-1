import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import Sonnet from '../../components/Sonnet';

function Table() {
  const [key, setKey] = useState('home');

  return (
    <div className='container mb-12'>
      <div className='bg-white rounded-t-lg pl-16 pr-16 pb-16'>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Home">

            <p>
              Sweet love, renew thy force; be it not said Thy edge should blunter be than appetite, Which but to-day by feeding is allay'd, To-morrow sharpened in his former might: So, love, be thou, although to-day thou fill Thy hungry eyes, even till they wink with fulness, To-morrow see again, and do not kill The spirit of love, with a perpetual dulness. Let this sad interim like the ocean be Which parts the shore, where two contracted new
            </p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>
              So are you to my thoughts as food to life, Or as sweet-season'd showers are to the ground; And for the peace of you I hold such strife As 'twixt a miser and his wealth is found. Now proud as an enjoyer, and anon Doubting the filching age will steal his treasure; Now counting best to be with you alone, Then better'd that the world may see my pleasure: Sometime all full with feasting on your sight, And by and by clean starved for a look;
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Table;