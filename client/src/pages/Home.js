import React from "react";
import HomepageImage from "../assets/Homepage2.jpg"; // Import the background image
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <main>
      {/* First Section - Background Image */}
      <section className="homepage-section">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-6">
              {/* Tagline */}
              <h1 className="text-white">Your Tagline Goes Here</h1>
              {/* Short Description */}
              <p className="text-white">
                A short description of your services or business can go here.
              </p>
              {/* Buttons */}
              <div>
                <Button variant="dark" className="mr-2">
                  Book Now!
                </Button>
                <Button variant="outline-dark" className="text-white">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Second Section - Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    Description of Card 1.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            {/* Card 2 */}
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    Description of Card 2.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            {/* Card 3 */}
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Description of Card 3.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - More Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Card 4 */}
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>
                    Description of Card 4.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            {/* Card 5 */}
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card 5</Card.Title>
                  <Card.Text>
                    Description of Card 5.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            {/* Card 6 */}
            <div className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card 6</Card.Title>
                  <Card.Text>
                    Description of Card 6.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - To Be Determined */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Fourth Section Content</h2>
              {/* Add content for the fourth section here */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
