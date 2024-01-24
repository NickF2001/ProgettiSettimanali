import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyJobs } from '../actions/actions';
import './style.css'

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const companyJobs = useSelector((state) => state.companyJobs);

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?company=';

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch(baseEndpoint + params.company);
        if (response.ok) {
          const { data } = await response.json();
          dispatch(setCompanyJobs(data));
        } else {
          alert('Error fetching results');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getJobs();
  }, [dispatch, params.company]);

  return (
    <Container>
      <Row>
        <Col className='my-3'>
          <h1 className='display-4 text-center'>Job posting for: {params.company}</h1>
          {companyJobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
