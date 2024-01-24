import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setJobs } from '../actions/actions';
import './style.css'

const MainSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const jobs = useSelector((state) => state.jobs);

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3 text-center'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className='mx-auto mb-4'>
            <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={handleChange}
              placeholder='Type and press Enter'
              className='bg-light border-secondary radius p-3'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
