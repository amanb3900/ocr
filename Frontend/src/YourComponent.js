import React, { useEffect, useState } from "react";
import './YourComponent.css';
const YourComponent = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    _id:"",
    identification_number: "",
    name: "",
    last_name: "",
    date_of_birth: "",
    date_of_issue: "",
    date_of_expiry: "",
  });

  useEffect(() => {
    const fetchIds = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/extract/getIds"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchIds();
  }, [formData,data]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/extract/delete/${id}`, {
        method: "DELETE",
      });
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/extract/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // You may want to re-fetch the updated data or update the local state as needed
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };
  const openUpdate = async (item) => {
    formData._id=item._id
    formData.identification_number=item.identification_number
    formData.name= item.name
    formData.last_name=item.last_name
    formData.date_of_birth = item.date_of_birth
    formData.date_of_issue= item.date_of_issue
    formData.date_of_expiry= item.date_of_expiry
  }
  return (
    // <div style={{
    //   marginTop: "30px",
    //   display: 'flex',
    //   flexDirection: "row",
    //   gap: '10px',
    //   flexWrap: 'wrap'
    // }}>
    //   {data?.map((item, index) => {
    //     return (
    //       <div key={index} style={{
    //         borderStyle: 'solid',
    //         borderWidth: '1px',
    //         borderColor: "#848484",
    //         borderRadius: '10px',
    //         width: 'fit-content',
    //         padding: '20px',
    //         backgroundColor: '#00c8ff'
    //       }}>
    //         <h2>{item.identification_number}</h2>
    //         <h2>{item.name}</h2>
    //         <h2>{item.last_name}</h2>
    //         <h2>{item.date_of_birth}</h2>
    //         <h2>{item.date_of_issue}</h2>
    //         <h2>{item.date_of_expiry}</h2>

    //         <div style={{
    //           display: 'flex',
    //           gap: "20px"
    //         }}>
    //           <button
    //             onClick={() => handleDelete(item._id)}
    //             style={{
    //               backgroundColor: '#4CAF50', // Set the background color
    //               color: 'white',              // Set the text color
    //               padding: '10px 20px',
    //               borderRadius: '4px',
    //               cursor: 'pointer',
    //               transition: 'background-color 0.3s ease-in-out'
    //             }}
    //           >
    //             Delete
    //           </button>

    //           <button
    //             onClick={() => openUpdate(item)}
    //             style={{
    //               backgroundColor: '#4CAF50', // Set the background color
    //               color: 'white',              // Set the text color
    //               padding: '10px 20px',
    //               borderRadius: '4px',
    //               cursor: 'pointer',
    //               transition: 'background-color 0.3s ease-in-out'
    //             }}
    //           >
    //             Update
    //           </button>

    //         </div>
    //       </div>

<div style={{
  marginTop: "30px",
  display: 'flex',
  flexDirection: "row",
  gap: '20px',
  flexWrap: 'wrap',
  justifyContent: 'center',
}}>
  {data?.map((item, index) => {
    return (
      <div key={index} style={{
        border: 'none',
        borderRadius: '10px',
        width: '300px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>{item.identification_number}</h2>
        <p style={{ color: '#555', marginBottom: '5px' }}>{item.name} {item.last_name}</p>
        <p style={{ color: '#777', marginBottom: '5px' }}>{item.date_of_birth}</p>
        <p style={{ color: '#777', marginBottom: '5px' }}>{item.date_of_issue}</p>
        <p style={{ color: '#777', marginBottom: '10px' }}>{item.date_of_expiry}</p>

        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        }}>
          <button
            onClick={() => handleDelete(item._id)}
            style={{
              backgroundColor: '#e74c3c',
              color: 'white',
              padding: '8px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out'
            }}
          >
            Delete
          </button>

          <button
            onClick={() => openUpdate(item)}
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '8px 15px',
              borderRadius: '4px',
              marginLeft: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out'
            }}
          >
            Update
          </button>
        </div>
      </div>
    );
  })}
{/* </div> */}

      {/* <div>
        <form onSubmit={()=> handleUpdate(formData._id)}>
          <input
            type="text"
            placeholder="Identification Number"
            value={formData.identification_number}
            onChange={(e) => handleChange(e, "identification_number")}
          />
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={(e) => handleChange(e, "last_name")}
          />
          <input
            type="text"
            placeholder="Date of Birth"
            value={formData.date_of_birth}
            onChange={(e) => handleChange(e, "date_of_birth")}
          />
          <input
            type="text"
            placeholder="Date of Issue"
            value={formData.date_of_issue}
            onChange={(e) => handleChange(e, "date_of_issue")}
          />
          <input
            type="text"
            placeholder="Date of Expiry"
            value={formData.date_of_expiry}
            onChange={(e) => handleChange(e, "date_of_expiry")}
          />
          <button >Update</button>
        </form>
      </div> */
      <div className="update-form-container">
      <form onSubmit={() => handleUpdate(formData._id)}>
        <div className="form-group">
          <label>Identification Number</label>
          <input
            type="text"
            value={formData.identification_number}
            onChange={(e) => handleChange(e, "identification_number")}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={formData.last_name}
            onChange={(e) => handleChange(e, "last_name")}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="text"
            value={formData.date_of_birth}
            onChange={(e) => handleChange(e, "date_of_birth")}
          />
        </div>
        <div className="form-group">
          <label>Date of Issue</label>
          <input
            type="text"
            value={formData.date_of_issue}
            onChange={(e) => handleChange(e, "date_of_issue")}
          />
        </div>
        <div className="form-group">
          <label>Date of Expiry</label>
          <input
            type="text"
            value={formData.date_of_expiry}
            onChange={(e) => handleChange(e, "date_of_expiry")}
          />
        </div>
        <button className="update-button">Update</button>
      </form>
    </div>}
    </div>
  );
};

export default YourComponent;
