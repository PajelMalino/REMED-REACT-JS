import React, { useState, useEffect } from "react";

export function ListTodo() {
  const [data, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("registrationData");
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...storedData, data];
    setStoredData(newData);
    localStorage.setItem("registrationData", JSON.stringify(newData));
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };
  const deletePost = (id) => {
    const updatedPosts = storedData.filter((post) => post.id !== id);
    setStoredData(updatedPosts);
    localStorage.setItem("registrationData", JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>Remedial Registrasi</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "60px",
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <input
              style={{
                width: "70%",
                height: "30px",
              }}
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              placeholder="Masukkan Nama"
            />
          </div>
          <div>
            <input
              style={{
                width: "70%",
                height: "30px",
              }}
              placeholder="Masukkan Email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              style={{
                width: "70%",
                height: "30px",
              }}
              placeholder="Masukkan No. HP"
              type="number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              style={{
                width: "70%",
                height: "30px",
              }}
              placeholder="Massukan alamat"
              type="text"
              name="address"
              value={data.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              style={{
                width: "70.5%",
                height: "40px",
              }}
              type="submit"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        {storedData.map((data, index) => (
          <div
            style={{
              border: "1px solid black",
              width: "30%",
              padding: "10px",
            }}
            key={index}
          >
            <p>Nama: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Alamat: {data.address}</p>
            <button onClick={() => deletePost(data.id)}>Delete Post</button>
          </div>
        ))}
      </div>
    </div>
  );
}
