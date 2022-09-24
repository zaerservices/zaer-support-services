import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card1.jpg" />
        <Card.Body>
          <Card.Title>Group and Centre-based Activities</Card.Title>
          <Card.Text>
          such as social outings and group and social activities on Zaer Support Services’s premises.
 
          </Card.Text>
            <div>
                <Link href="/page-details/group-activities"><a className="btn btn-black text-body-lead  ">Learn More</a>
                </Link>
            </div>
        </Card.Body> 
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card2.jpg" />
        <Card.Body>
          <Card.Title>Participation in the Community</Card.Title>
          <Card.Text>
          Including supported shopping, medical appointments, sporting and recreational events, social activities, visiting or making new friends,
           travel and transport and building confidence and social skills.
          </Card.Text>
            <div>
                <Link href="/page-details/partcipate-community"><a className="btn btn-black text-body-lead  ">Learn More</a>
                </Link>
            </div>
        </Card.Body> 
      </Card>
      <Card>
        <Card.Img variant="top" src="assets/imgs/template/card3.jpg" />
        <Card.Body>
          <Card.Title>Assistive Products for Household Tasks</Card.Title>
          <Card.Text>
          Provision of products that assist people with domestic tasks in the home, such as cooking, cleaning, washing and general maintenance.

          </Card.Text>
            <div>
                <Link href="/page-details/household-task"><a className="btn btn-black text-body-lead  ">Learn More</a> 
                </Link>
            </div>
        </Card.Body> 
      </Card>
    </CardGroup>
  );
}

export default GroupExample;