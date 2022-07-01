import React, {useState,useEffect} from 'react'

function Form() {

    const [selected, setSelected] = useState("");
    const [CompanyList, setCompanyList] =useState([{'name': "", 'id': ""}]);


      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://127.0.0.1:8000/api/company/`);
          const newData = await response.json();
          setCompanyList(newData);
        };
      
        fetchData();
      }, []);

      const handleChange = (event) => {
        setSelected(event.target.value);
      };
      
      const saveBtn = (e) =>{
          e.preventDefault();
          console.log(selected);
      }


    return (
        <div>
            <form>
            <select onChange={handleChange} value={selected}>
            <option value="">Select Company Name</option>

                {CompanyList.map(company =>
                    <option key={company.id} value={company.name}>{company.name}</option>
                    )}
            </select>

            <br/>
            <button className="btn btn-primary" onClick={saveBtn}>Save</button>
            </form>
        </div>
    )
}

export default Form
