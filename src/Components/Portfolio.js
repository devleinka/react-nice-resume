import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div className="portfolio-pic-and-button-wrapper">
          <div key={projects.title} className="pic portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank">
                <img alt={projects.title} src={projectImage} />
                {/* <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div> */}
              </a>
            </div>
          </div>
          <div className="desc portfolio-description">
                  <h5>{projects.title}</h5>
                  <p>{projects.aboutProject}</p>
                </div>
          <div className="project-buttons">
          <a href={projects.url} className=" portfo-btn button btn url-btn" target="_blank"><i className="fa fa-globe"></i>    View live on Heroku</a>
            <a href={projects.github} className=" portfo-btn button btn github-btn" target="_blank"><i className="fa fa-github"></i>    View source code on GitHub</a>
            
          </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out My Work:</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
