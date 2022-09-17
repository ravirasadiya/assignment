export default function Form() {
  return (
    <>
    {/* <form>
      <input type="text" name="username" placeholder="Search by username" />
      <button>Submit</button>
    </form> */}
     <form className="form_inpt">
        <div className="inpt_in">
            <input type="text" name="username" placeholder="Search by username" />
            <img src="/img/search-icon.png" alt="" />
        </div>
        <button>Submit</button>
    </form>
    </>
  );
}
