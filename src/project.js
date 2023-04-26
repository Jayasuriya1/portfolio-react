import React from "react";

export default function Project(){
    return(
        <div className="container project" id="project-section">
            <h2 className="hr-lines hr-lines-2">PROJECTS</h2>
            <div className="row">
                <div className="col-sm-12 col-lg-6 ">
                    <div class="card" style={{width: "18rem;"}}>
                        <img src="/image/e-commerce.jpg" class="card-img-top" alt="..."></img>
                        <div className="project-details">
                            <h1 style={{color:"#ff4141"}}>E-Commerce</h1>
                            <div>
                                <button className="project-btn" >Github FE <i class='bx bxl-github' ></i></button>
                                <button className="project-btn">View Site <i class='bx bx-desktop'></i></button>
                                <button className="project-btn">Github BE <i class='bx bxl-github' ></i></button>
                            </div>
                            <p>This is Fullstack MERN website made it as a Ecommerce.
                                <br></br>
                                This application is used to buy our products.
                            </p>
                            <p style={{fontSize:"0.7rem"}}>
                                <span style={{color:"#41c9ff"}}>TECT USED :</span>
                                <span style={{color:"#d18d0d"}}>REACT, NODE, EXPRESS JS, MONGODB</span>
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div class="card" style={{width: "18rem;"}}>
                        <img src="/image/e-commerce.jpg" class="card-img-top" alt="..."></img>
                        <div className="project-details">
                            <h1 style={{color:"#ff4141"}}>E-Commerce</h1>
                            <div>
                                <button className="project-btn" >Github FE <i class='bx bxl-github' ></i></button>
                                <button className="project-btn">View Site <i class='bx bx-desktop'></i></button>
                                <button className="project-btn">Github BE <i class='bx bxl-github' ></i></button>
                            </div>
                            <p>This is Fullstack MERN website made it as a Ecommerce.
                                <br></br>
                                This application is used to buy our products.
                            </p>
                            <p style={{fontSize:"0.7rem"}}>
                                <span style={{color:"#41c9ff"}}>TECT USED :</span>
                                <span style={{color:"#d18d0d"}}>REACT, NODE, EXPRESS JS, MONGODB</span>
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div class="card" style={{width: "18rem;"}}>
                        <img src="/image/e-commerce.jpg" class="card-img-top" alt="..."></img>
                        <div className="project-details">
                            <h1 style={{color:"#ff4141"}}>E-Commerce</h1>
                            <div>
                                <button className="project-btn" onClick={()=>{"window.location='http://www.google.com'"}}>Github FE <i class='bx bxl-github' ></i></button>
                                <button className="project-btn">View Site <i class='bx bx-desktop'></i></button>
                                <button className="project-btn">Github BE <i class='bx bxl-github' ></i></button>
                            </div>
                            <p>This is Fullstack MERN website made it as a Ecommerce.
                                <br></br>
                                This application is used to buy our products.
                            </p>
                            <p style={{fontSize:"0.7rem"}}>
                                <span style={{color:"#41c9ff"}}>TECT USED :</span>
                                <span style={{color:"#d18d0d"}}>REACT, NODE, EXPRESS JS, MONGODB</span>
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div class="card" style={{width: "18rem;"}}>
                        <img src="/image/e-commerce.jpg" class="card-img-top" alt="..."></img>
                        <div className="project-details">
                            <h1 style={{color:"#ff4141"}}>E-Commerce</h1>
                            <div>
                                <button className="project-btn">Github FE <i class='bx bxl-github' ></i></button>
                                <button className="project-btn">View Site <i class='bx bx-desktop'></i></button>
                                <button className="project-btn">Github BE <i class='bx bxl-github' ></i></button>
                            </div>
                            <p>This is Fullstack MERN website made it as a Ecommerce.
                                <br></br>
                                This application is used to buy our products.
                            </p>
                            <p style={{fontSize:"0.7rem"}}>
                                <span style={{color:"#41c9ff"}}>TECT USED :</span>
                                <span style={{color:"#d18d0d"}}>REACT, NODE, EXPRESS JS, MONGODB</span>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}