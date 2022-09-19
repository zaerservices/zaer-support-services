import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card370x160.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. 
          </Card.Text>
            <div>
                <Link href="/#"><a className="btn btn-black text-body-lead ">Learn More</a>
                </Link>
            </div>
        </Card.Body> 
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card370x160.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. 
          </Card.Text>
            <div>
                <Link href="/#"><a className="btn btn-black text-body-lead ">Learn More</a>
                </Link>
            </div>
        </Card.Body> 
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card370x160.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. 
          </Card.Text>
            <div>
                <Link href="/#"><a className="btn btn-black text-body-lead ">Learn More</a>
                </Link>
            </div>
        </Card.Body> 
      </Card>
    </CardGroup>
  );
}

export default GroupExample;