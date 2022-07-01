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


    return (
        <div>
            <select>
                {CompanyList.map(company =>
                    <option>{company.name}</option>
                    )}
            </select>
        </div>
    )
}

export default Form
