import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './BookDetails.css'; 

const BookDetails = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    async function fetchHandler() {
      return (
        await axios
          .get(`http://localhost:3001/books/${id}`)
          .then(function (res) {
            return res.data;
          })
      );
    }

    fetchHandler().then(function (data) {
      setInputs(data.book);
    });
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs(prevdata => ({
      ...prevdata,
      [name]: value,
    }));
  }

  async function sendRequest() {
    await axios.put(`http://localhost:3001/books/${id}`, {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await sendRequest();
    navigate('/books');
  }

  return (
    <form onSubmit={handleSubmit} className="book-details-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={inputs.author || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={inputs.description || ''}
          onChange={handleChange}
          className="form-control"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={inputs.price || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Image</label>
        <input
          type="text"
          name="image"
          value={inputs.image || ''}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <input
            type="checkbox"
            name="available"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="form-check-input"
          />
          Available
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Update Book
      </button>
    </form>
  );
};

export default BookDetails;
