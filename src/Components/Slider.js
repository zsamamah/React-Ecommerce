import React, { Component } from 'react';
import '../slider.css'

export class Slider extends Component {
    render() {
        return (
            <section class="client pt-3 pb-5">
  <div class="container">
    <div class="row text-center">
      <div class="col-12 text-center">
        <h1 class="display-3 fw-bold text-white">Testimonials</h1>
        <hr
          class="bg-white mb-4 mt-0 d-inline-block mx-auto"
          style={{width: "100px", height: "3px"}}
        />
        <p class="p-text text-white">What our clients are saying</p>
      </div>
    </div>
    <div class="row align-items-md-center text-white text-center">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row p-4">
                <div class="t-card">
                  <img
                    src="https://www.lenovo.com/medias/lenovo-laptops-ideapad-5i-15-series-front-thumbnail.png?context=bWFzdGVyfHJvb3R8NTUwNjJ8aW1hZ2UvcG5nfGg1Yy9oZWMvMTEwOTQ1OTc0NjgxOTAucG5nfDc4NTkyNmU3NzUyYzkxYzU4OGI2YjQ4MmI1ZTlmMDc3NmVmOTFhYjI1NjBmZmI0YWJkM2UzMTljZmJlZThhZjU" alt="hahaha"
                  />
                  <p class="lh-lg">
                    Lorem Ipsum ist ein einfacher Lorem Ipsum ist in der
                    Industrie bereits der iste natus error sit voluptatem
                    accusantium totam rem aperiam, eaque ipsa quae ab illo
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div class="row">
                  <div class="col-sm-10 text-center">
                    <h4 class="text-center"><strong>laptop dell</strong></h4>
                    <p class="testimonial_subtitle text-center">
                      <span>$350</span><br />
                      <span class="text-center">Artc Cafe</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row p-4">
                <div class="t-card">
                  <img
                    src="https://www.lenovo.com/medias/lenovo-laptops-ideapad-5i-15-series-front-thumbnail.png?context=bWFzdGVyfHJvb3R8NTUwNjJ8aW1hZ2UvcG5nfGg1Yy9oZWMvMTEwOTQ1OTc0NjgxOTAucG5nfDc4NTkyNmU3NzUyYzkxYzU4OGI2YjQ4MmI1ZTlmMDc3NmVmOTFhYjI1NjBmZmI0YWJkM2UzMTljZmJlZThhZjU" alt="hahahah"
                  />
                  <p class="lh-lg">
                    Lorem Ipsum ist ein einfacher Lorem Ipsum ist in der
                    Industrie bereits der iste natus error sit voluptatem
                    accusantium totam rem aperiam, eaque ipsa quae ab illo
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div class="row">
                  <div class="col-sm-10 text-center">
                    <h4 class="text-center"><strong>laptop hp</strong></h4>
                    <p class="testimonial_subtitle text-center">
                      <span>$400</span><br />
                      <span class="text-center">Artc Cafe</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="controls push-right">
          <a
            class="left fa fa-chevron-left btn btn-outline-light"
            href="#carouselExampleCaptions"
            data-bs-slide="prev"
          >hello1</a>
          <a
            class="right fa fa-chevron-right btn btn-outline-light"
            href="#carouselExampleCaptions"
            data-bs-slide="next"
          >hello2</a>
        </div>
      </div>
    </div>
  </div>
</section>
        )
    }
}

export default Slider
