import React from 'react'

const Review = () => {
    return (
        <>
            <div id="reviewsSection">
                <h1 className="head">Clients's Review</h1>
                <div className="col-md-9">
                    <div className="reviews">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="reviewBox">
                                        <img src="../images/avatar.svg" alt="" className='clientImg'/>
                                        <h4 className="clientName">John Deo</h4>
                                        <p className="client-review text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio quis tenetur ducimus dolorem pariatur autem et quia. Deserunt fuga obcaecati voluptates dolorem consequatur maiores voluptas veniam totam, mollitia sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequatur!
                                        </p>
                                        <img src="../images/star.png" alt="" className="stars" />
                                    </div>
                                </div>

                                <div className="carousel-item">
                                <div className="reviewBox">
                                        <img src="../images/avatar.svg" alt="" className='clientImg'/>
                                        <h4 className="clientName">John Deo</h4>
                                        <p className="client-review text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio quis tenetur ducimus dolorem pariatur autem et quia. Deserunt fuga obcaecati voluptates dolorem consequatur maiores voluptas veniam totam, mollitia sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequatur!
                                        </p>
                                        <img src="../images/star.png" alt="" className="stars" />
                                    </div>
                                </div>

                                <div className="carousel-item">
                                <div className="reviewBox">
                                        <img src="../images/avatar.svg" alt="" className='clientImg' />
                                        <h4 className="clientName">John Deo</h4>
                                        <p className="client-review text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio quis tenetur ducimus dolorem pariatur autem et quia. Deserunt fuga obcaecati voluptates dolorem consequatur maiores voluptas veniam totam, mollitia sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequatur!
                                        </p>
                                        <img src="../images/star.png" alt="" className="stars" />
                                    </div>

                                </div>

                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Review