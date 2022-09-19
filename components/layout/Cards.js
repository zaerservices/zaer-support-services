import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card1.jpg" />
        <Card.Body>
          <Card.Title>Group/Centre Activities</Card.Title>
          <Card.Text>
          Encouraging participants to actively participate in social, 
          community, and recreational activities 
          </Card.Text>
            <div>
                <Link href="/page-details/group-activities"><a className="btn btn-black text-body-lead ">Learn More</a>
                </Link>
            </div>
        </Card.Body> 
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card2.jpg" />
        <Card.Body>
          <Card.Title>Participate Community</Card.Title>
          <Card.Text>
          Help you to actively stay connected in your community and life goals.
          </Card.Text>
            <div>
                <Link href="/page-details/partcipate-community"><a className="btn btn-black text-body-lead ">Learn More</a>
                </Link>
            </div>
        </Card.Body> 
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card3.jpg" />
        <Card.Body>
          <Card.Title>Household Tasks</Card.Title>
          <Card.Text>
          Maintain your daily household chores with help around the house and garden.
          </Card.Text>
            <div>
                <Link href="/page-details/household-task"><a className="btn btn-black text-body-lead ">Learn More</a> 
                </Link>
            </div>
        </Card.Body> 
      </Card>
    </CardGroup>
  );
}

export default GroupExample;