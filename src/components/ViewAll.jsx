import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]= useState(
        [
            {"userId":1,"Id":2,"title":"dary world post","body":"the content is okay"},
            {"userId":2,"Id":3,"title":"dary world post","body":"the content is okay"},
            {"userId":4,"Id":5,"title":"dary world post","body":"the content is okay"},
            {"userId":6,"Id":7,"title":"dary world post","body":"the content is okay"},
            
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src="https://static.vecteezy.com/system/resources/previews/003/586/995/original/post-office-building-in-flat-style-in-the-city-on-a-summer-day-with-a-bike-at-the-entrance-illustration-free-vector.jpg" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.userId}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            }
                           )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll