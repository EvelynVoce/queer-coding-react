import { CardDeck, Card, CardBody, CardText } from 'reactstrap';

export const MainPage = () => {
    return (
        <div className="my-3">
            <h1 className="d-flex justify-content-center"><u>QueerCoding</u></h1>
            <div className="row my-5">
                <div className="col-md-3 d-flex justify-content-left">
                    <img className="img-fluid" src="/images/Evelyn2.jpg" alt="Logo" />
                </div>
                <div className="col-md-9 d-flex justify-content-center">
                    <p className="main-font">QueerCoding's goal is to educate and inspire members of the LGBTQ+
                        community to take their first step into tech. Providing them with the skills and
                        confidence to begin their journey become developers and data analysts.
                    </p>
                </div>
            </div>
            
            
            <h1 className="d-flex justify-content-center"><u>Our classes</u></h1>
            <CardDeck className="my-5">
                <Card>
                    <CardBody>
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
                    <CardBody>
                        <h5 className="card-title"><b>Web Development</b></h5>
                        <CardText>
                            Web development is a broad field of study that covers the development of websites. In this
                            class we will cover the fundamentals of web development, HTML, CSS and JavaScript. We will
                            also look at a framework to aid the development of websites, bootstrap. Heres an example of
                            a website made using only techniques taught in this class 
                            <a href="https://evelynvoce.github.io/" target="_"> Example website</a>
                        </CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
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
        </div>
    );
}