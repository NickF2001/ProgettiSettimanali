import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const TvShow = () => {
    return (
        <div className='d-flex justify-content-between mx-3'>
            <div className='d-flex align-items-center gap-4'>
                <h2 className='text-light'>TV Shows</h2>
            <Dropdown>
                <Dropdown.Toggle className="bg-black border-secondary" id="dropdown-basic">
                    Genres
                </Dropdown.Toggle>

                <Dropdown.Menu className='bg-black'>
                    <Dropdown.Item className='text-light text-center' href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item className='text-light text-center' href="#/action-2">Comedy</Dropdown.Item>
                    <Dropdown.Item className='text-light text-center' href="#/action-3">Fantasy</Dropdown.Item>
                    <Dropdown.Item className='text-light text-center' href="#/action-3">History</Dropdown.Item>
                    <Dropdown.Item className='text-light text-center' href="#/action-3">Horror</Dropdown.Item>
                    <Dropdown.Item className='text-light text-center' href="#/action-3">Thriller</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            

            <div className="d-flex">
                <Button className="border-secondary rounded-0 px-4" size='sm' variant="trasparent"><i className="bi bi-list-columns icon text-secondary"></i></Button>
                <Button className="border-secondary rounded-0 px-4" size='sm' variant="trasparent"><i className="bi bi-grid-fill icon text-secondary"></i></Button>
            </div>
        </div>
    )
}

export default TvShow