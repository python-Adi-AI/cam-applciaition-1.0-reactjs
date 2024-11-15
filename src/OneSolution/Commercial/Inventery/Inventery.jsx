import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inventery.css'; // import the CSS file for custom styles

const Inventery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

//   const handleBack = () => {
//     window.history.back(); // Goes back to the previous page in browser history
//   };

  const handleHome = () => {
    window.location.href = '/'; // Redirects to the homepage
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (

    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" onClick={handleHome}>
           Home
          </li>
          <li className="breadcrumb-item active" aria-current="page" onClick={handleHome}>Commercial</li>
          <li className="breadcrumb-item active" aria-current="page" onClick={handleHome}>Inventory</li>
        </ol>
      </nav>
    
 
    <div className="container mt-5">
      {/* Breadcrumb Navigation */}
    

  

      <h2>Inventery</h2>
      <div className="table-container">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
              <a href="!#" className="page-link" onClick={(event) => handleClick(event, page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    </>
  );
};

export default Inventery;
