function Tenkey() {

  return (
    <div className="text-2xl">
      <div className="tenkey_numbers">
        {[...Array(9)].map((v, i) => <button type="button" className="key" key={i + 1} value={i + 1}>{i + 1}</button>)}
        <button type="button" className="key" key={0} value={0}>{0}</button>
      </div>
      <div className="tenkey_other">
        <button type="button" className="delete" value="x">けす</button>
        <button type="button" className="answer" value="answer">けってい</button>
      </div>
    </div>
  );
}

export default Tenkey;