import { Col, Row } from 'react-bootstrap'
import storeItem from '../data/items.json'
import StoreItem from '../components/StoreItem'

function Store() {
  return (
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItem.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Store
