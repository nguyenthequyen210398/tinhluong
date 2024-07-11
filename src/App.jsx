import React, { useState } from 'react';
import './App.css';

function App() {
  const [gross, setGross] = useState('18768364');
  const [cong, setCong] = useState('0');
  const [ca, setCa] = useState('0');
  const [caDem, setCaDem] = useState('0');
  const [ca6, setCa6] = useState('0');
  const [ca7, setCa7] = useState('0');
  const [cn, setCn] = useState('0');
  const [nnv, setNnv] = useState('0');
  const [thuong, setThuong] = useState('0');
  const [gtgc, setGtgc] = useState('0');

  // Calculate values
  const gioMoney = parseFloat(gross) / parseFloat(cong) / 8;

  const moneyGross =
    gioMoney * 8 * parseFloat(ca) +
    gioMoney * 8 * parseFloat(caDem) +
    ((gioMoney * 8 * 30) / 100) * parseFloat(caDem) +
    gioMoney * 8 * parseFloat(ca6) +
    gioMoney * 4 * 1.5 * parseFloat(ca6) +
    gioMoney * 8 * parseFloat(ca7) +
    gioMoney * 4 * 1.5 * parseFloat(ca7) +
    ((gioMoney * 8 * 30) / 100) * parseFloat(ca7) +
    gioMoney * 8 * 2 * parseFloat(cn) +
    ((((parseFloat(gross) * 70) / 100 / parseFloat(cong)) * 70) / 100) *
      parseFloat(nnv) +
    parseFloat(thuong);

  const notTNCN =
    gioMoney * 4 * 0.5 * parseFloat(ca6) +
    gioMoney * 4 * 0.5 * parseFloat(ca7) +
    parseFloat(thuong) +
    gioMoney * 8 * parseFloat(cn);

  let tntt =
    moneyGross -
    notTNCN -
    (((parseFloat(gross) * 70) / 100) * 10.5) / 100 -
    11000000 -
    4.4 * gtgc * 1000000;

  let netMoney = 0;
  if (tntt <= 0) {
    netMoney = moneyGross - (((parseFloat(gross) * 70) / 100) * 10.5) / 100;
  } else if (tntt > 0 && tntt <= 5000000) {
    netMoney =
      moneyGross -
      (((parseFloat(gross) * 70) / 100) * 10.5) / 100 -
      (tntt * 5) / 100;
  } else if (tntt > 5000000 && tntt <= 100000000) {
    netMoney =
      moneyGross -
      (((parseFloat(gross) * 70) / 100) * 10.5) / 100 -
      (tntt * 10) / 100 +
      0.25 * 1000000;
  } else if (tntt > 100000000 && tntt <= 180000000) {
    netMoney =
      moneyGross -
      (((parseFloat(gross) * 70) / 100) * 10.5) / 100 -
      (tntt * 15) / 100 +
      0.75 * 1000000;
  } else if (tntt > 180000000 && tntt <= 320000000) {
    netMoney =
      moneyGross -
      (((parseFloat(gross) * 70) / 100) * 10.5) / 100 -
      (tntt * 20) / 100 +
      1.65 * 1000000;
  } else if (tntt > 320000000 && tntt <= 520000000) {
    netMoney =
      moneyGross -
      (((parseFloat(gross) * 70) / 100) * 10.5) / 100 -
      (tntt * 25) / 100 +
      3.25 * 1000000;
  } else {
    netMoney =
      moneyGross -
      (((parseFloat(gross) * 70) / 100) * 10.5) / 100 -
      (tntt * 35) / 100 +
      9.85 * 1000000;
  }

  // Format numbers
  const formattedMoneyGross = formatNumber(moneyGross);
  const formattedNetMoney = formatNumber(netMoney);

  function formatNumber(number) {
    return parseFloat(number).toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }

  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="gross">Nhập lương Gross:</label>
        <input
          type="text"
          id="gross"
          name="gross"
          value={gross}
          onChange={(e) => setGross(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="cong">Nhập số ca đủ công:</label>
        <input
          type="text"
          id="cong"
          name="cong"
          // value={cong}
          onChange={(e) => setCong(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="ca">Nhập số ca ngày:</label>
        <input
          type="text"
          id="ca"
          name="ca"
          // value={ca}
          onChange={(e) => setCa(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="caDem">Nhập số ca đêm:</label>
        <input
          type="text"
          id="caDem"
          name="caDem"
          // value={caDem}
          onChange={(e) => setCaDem(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="ca6">Nhập số ca S6:</label>
        <input
          type="text"
          id="ca6"
          name="ca6"
          // value={ca6}
          onChange={(e) => setCa6(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="ca7">Nhập số ca S7:</label>
        <input
          type="text"
          id="ca7"
          name="ca7"
          // value={ca7}
          onChange={(e) => setCa7(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="cn">Nhập số ca chủ nhật:</label>
        <input
          type="text"
          id="cn"
          name="cn"
          // value={cn}
          onChange={(e) => setCn(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="nnv">Nhập số ca nghỉ hưởng lương:</label>
        <input
          type="text"
          id="nnv"
          name="nnv"
          // value={nnv}
          onChange={(e) => setNnv(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="thuong">Nhập số tiền thưởng (nếu có):</label>
        <input
          type="text"
          id="thuong"
          name="thuong"
          // value={thuong}
          onChange={(e) => setThuong(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="gtgc">Nhập số người giảm trừ gia cảnh:</label>
        <input
          type="text"
          id="gtgc"
          name="gtgc"
          // value={gtgc}
          onChange={(e) => setGtgc(e.target.value)}
        />
      </div>

      <hr />

      <div className="result-container">
        <h3>Tổng lương Gross: {formattedMoneyGross}</h3>
        <h3>Thu nhập tính thuế: {tntt}</h3>
        <h2>Thực nhận: {formattedNetMoney}</h2>
      </div>
    </div>
  );
}

export default App;
