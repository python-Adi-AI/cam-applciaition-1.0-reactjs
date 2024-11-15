import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkOrderPlanning.css'; // import the CSS file for custom styles

const WorkOrderPlanning = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data); // Log fetched data to console
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Log any errors in fetching data
        setLoading(false);
      });
  }, []);

  const handleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
    console.log(`Current Page: ${page}`); // Log current page when it changes
  };

  const handleHome = () => {
    window.location.href = '/'; // Redirects to the homepage
    console.log('Redirecting to Home'); // Log when navigating to home
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
          <li className="breadcrumb-item active" aria-current="page" onClick={handleHome}> WorkOrder</li>
          <li className="breadcrumb-item active" aria-current="page" onClick={handleHome}>WorkOrder Page</li>
        </ol>
      </nav>
    
      <div className="container mt-5">
        <h2>WorkOrderPlanning</h2>
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

export default WorkOrderPlanning;
