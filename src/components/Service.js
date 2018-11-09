import React from 'react';

const Service = (props) => (
    <section  className={props.element}>
        <div className="services-center">
          <article className="service">
            <div className="service-icon">
              <i class="fab fa-react"></i>
            </div>
            <div className="service-text">
              <h1>Excellent React</h1>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
          </article>
          <article className="service">
            <div className="service-icon">
              <i class="fab fa-node"></i>
            </div>
            <div className="service-text">
              <h1>Excellent React</h1>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
          </article>
          <article className="service">
            <div className="service-icon">
              <i class="fab fa-js"></i>
            </div>
            <div className="service-text">
              <h1>Excellent React</h1>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
          </article>
        </div>
    </section>
)

export default Service;