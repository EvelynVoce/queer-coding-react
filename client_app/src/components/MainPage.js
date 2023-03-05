import { CardDeck, Card, CardBody, CardText } from 'reactstrap';
import { Link } from "react-router-dom";

export const MainPage = () => {
    
    return (
        <div className="my-5">
            <h1 className="d-flex justify-content-center"><u>QueerCoding</u></h1>
            <div className="row my-5">
                <div className="col-md-6 d-flex justify-content-left">
                    <img className="img-fluid" src="/images/Evelyn2.jpg" alt="Logo" />
                </div>

                <div className="col-md-6 justify-content-center">

                    <p>
                        QueerCoding's goal is to educate and inspire members of the LGBTQ+
                        community to take their first step into tech. Providing them with the skills and
                        confidence to begin their journey become developers and data analysts. Representing these often
                        underrepresented groups in the industry is vitally important to creating a inclusive
                        and diverse community and to removing the long standing bias in tech.
                    </p>

                    <p>
                        At this time, QueerCoding is ran by Evelyn Voce, a trans woman with a degree in
                        computer science and a background in software development. She teaches all of our classes and
                        will be the primary source of contact during our events.
                    </p>

                </div>
            </div>

            <hr/>
            <h1 className="d-flex justify-content-center my-5"><u>Our classes</u></h1>
            
            <CardDeck className="my-5">
                <Card>
                    <CardBody className="pink-deck">
                        <h5 className="card-title"><b>Python</b></h5>
                        <CardText>
                            This class provides a solid foundation in programming teaching data types,
                            logical operators, loops and object-orientated programming. A perfect entry point
                            for those who want to begin their journey in software development, this class is
                            also recommended before taking the machine learning class.
                        </CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className="pink-deck">
                        <h5 className="card-title"><b>Web Development</b></h5>
                        <CardText>
                            Web development is a broad field of study that covers the development of
                            websites. In this class we will cover the fundamentals of web development,
                            HTML, CSS and JavaScript. We will also look at a framework to aid the development
                            of websites, bootstrap. Heres an example of a website made using only techniques taught
                            in this class <a href="https://evelynvoce.github.io/" target="_"> Example website</a>
                        </CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className="pink-deck">
                        <h5 className="card-title"><b>Data analysis  Machine Learning</b></h5>
                        <CardText>
                            This data analysis class will teach you the fundamentals of data analysis and machine
                            learning. Using a real world data set to analyse the salaries of developers based on a
                            variety of attributes such as age, gender, sexuality and much more and then using
                            machine learning to predict whether developers will earn more or less than the
                            average income based on this data.
                        </CardText>
                    </CardBody>
                </Card>
            </CardDeck>

            <p>
                Please note more clases are planned including a more advanced Wev development class which utilises
                React JS, APIs and SQL. It is currently unclear when these courses will become available due to the time
                committment of creating resources and teaching four classes a week. This being said I am dedicated
                to making this class happen so be sure to chec for updates here.
            </p>

            <div className="d-flex justify-content-center my-5">
                <Link to="/Register">
                    <button> Register for class </button>
                </Link>
            </div>    
            
        </div>
        
    );
}