import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

const Profiletab2 = () => {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle className="mb-0">About</CardTitle>
                </CardHeader>
                <CardBody>
                    <div>
                        <div className="pb-3">
                            <h5 className="font-size-15">Bio :</h5>
                            <div className="text-muted">
                                <p className="mb-2">Hi I'm Phyllis Gatlin, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                                <p className="mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at it has a more-or-less normal distribution of letters</p>
                                <p>It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>

                                <ul className="list-unstyled mb-0">
                                    <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Donec vitae sapien ut libero venenatis faucibus</li>
                                    <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Quisque rutrum aenean imperdiet</li>
                                    <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Integer ante a consectetuer eget</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-3">
                            <h5 className="font-size-15">Experience :</h5>
                            <div className="text-muted">
                                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc</p>

                                <ul className="list-unstyled mb-0">
                                    <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Donec vitae sapien ut libero venenatis faucibus</li>
                                    <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Quisque rutrum aenean imperdiet</li>
                                    <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Integer ante a consectetuer eget</li>
                                    <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Phasellus nec sem in justo pellentesque</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default Profiletab2;