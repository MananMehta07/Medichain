import React from 'react'
import { useHistory } from "react-router-dom"


function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <div>
            <head>
            <link href="assets/img/favicon.png" rel="icon"/>
            <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"></link>
            <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
            <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
            <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>
            <link href="assets/css/style.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
            </head>
            <header id="header" class="header fixed-top bg-white">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span>MediChain</span>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li onClick={redirect_to_roles}><a class="nav-link scrollto active" href="#h">Register</a></li>
          <li onClick={redirect_to_addmed}><a class="nav-link scrollto active" href="#h">Medicines</a></li>
          <li onClick={redirect_to_supply}><a class="nav-link scrollto active" href="#h">Supply Chain</a></li>
          <li onClick={redirect_to_track}><a class="nav-link scrollto active" href="#h">Track</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  <section id="hero" class="hero d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center">
        <h1 >We offer modern solutions for pharmaceutical supply chain model</h1>
          <h2 >We are team of talented designers making websites with Blockchain</h2>
          <div >
            <div class="text-center text-lg-start">
              <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Get Started</span>
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 hero-img" >
          <img src="assets/img/hero-img.png" class="img-fluid" alt=""/>
        </div>
      </div>
    </div>

  </section>

  <section id="about" class="about"/>

      <div class="container" >
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center" >
            <div class="content">
              <h2>The pharmaceutical supply chain is<br/>the means through which prescription medicines are manufactured and delivered to patients.</h2>
              <p>
                The pharmaceutical supply chain faces its own set of challenges, including supply chain visibility, drug counterfeiting, cold-chain shipping, and raising prescription drug prices, which can significantly increase out-of-pocket costs for patients.
              </p>
              <div class="text-center text-lg-start">
                <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center">
            <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
          </div>

        </div>
      </div>

      <section id="values" class="values">

<div class="container" >

  <header class="section-header">
    <h2>Our Key Feactures</h2>
  </header>

  <div class="row">

    <div class="col-lg-4" >
      <div class="box">
        <img src="assets/img/values-1.png" class="img-fluid" alt=""/>
        <h3>User Friendly</h3>
        <p>The aim of this project is to make supply chain process simplyfied and transparent</p>
      </div>
    </div>
    <div class="col-lg-4 mt-4 mt-lg-0">
      <div class="box">
        <img src="assets/img/values-2.png" class="img-fluid" alt=""/>
        <h3>Secured System</h3>
        <p>Scrypt encryption algorithm for better hashing and security.
          </p>
      </div>
    </div>

    <div class="col-lg-4 mt-4 mt-lg-0" >
      <div class="box">
        <img src="assets/img/values-3.png" class="img-fluid" alt=""/>
        <h3>Awesome Supply Flow</h3>
        <p>Development of Smart contract to manage the entire supply chain flow.</p>
      </div>
    </div>

  </div>

</div>

</section>

<section id="faq" class="faq">

<div class="container" >

  <header class="section-header">
    <h2>F.A.Q</h2>
    <p>Frequently Asked Questions</p>
  </header>

  <div class="row">
    <div class="col-lg-6">

      <div class="accordion accordion-flush" id="faqlist1">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" >
              Why is supply chain important in pharmaceutical industry?
            </button>
          </h2>
          <div id="faq-content-1" class="accordion-collapse collapse" >
            <div class="accordion-body">
              Supply chain management (SCM) in the pharmaceutical industry can transform the organization to make better use of assets and resources, to generate profits, to enhance shareholder value, and and to positively respond to customer demand.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" >
              How does pharmaceutical supply chain works?
            </button>
          </h2>
          <div id="faq-content-2" class="accordion-collapse collapse">
            <div class="accordion-body">
              The pharma supply chain consists of all the partners involved in the drug manufacturing and distribution process, starting from raw materials and ending with patients. Here you will find a broad array of information about topics such as track and trace, serialization, and auditing/managing suppliers.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" >
              How does pharma distribution work?
            </button>
          </h2>
          <div id="faq-content-3" class="accordion-collapse collapse" >
            <div class="accordion-body">
              The retail pharmacy obtains products from the stockist or substockist through whom it finally reaches the consumers (patients). Certain small manufacturers directly supply the drugs to the super stockist.
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="col-lg-6">

     
      <div class="accordion accordion-flush" id="faqlist2">

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" >
              What are the 5 basic steps of supply chain management?
            </button>
          </h2>
          <div id="faq2-content-1" class="accordion-collapse collapse" >
            <div class="accordion-body">
              Supply management is made up of five areas: supply planning, production planning, inventory planning, capacity planning, and distribution planning.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button">
              Where do pharmacies get their supplies?
            </button>
          </h2>
          <div id="faq2-content-2" class="accordion-collapse collapse" >
            <div class="accordion-body">
              Pharmacies purchase drugs from wholesalers, and occasionally directly from manufacturers. After purchasing these drugs, pharmacies must safely store and dispense these drugs to patients.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" >
              How Pharma products are categorized?
            </button>
          </h2>
          <div id="faq2-content-3" class="accordion-collapse collapse" >
            <div class="accordion-body">
              For the purposes of classification, a pharmaceutical product can be considered to be comprised of two key features or characteristics, the presentation of the product and the purpose for which it is administered.
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

</div>

</section>
    
<section id="recent-blog-posts" class="recent-blog-posts">

      <div class="container" >

        <header class="section-header">
          <h2>Blog</h2>
          <p>Recent posts form our Blog</p>
        </header>

        <div class="row">

          <div class="col-lg-4">
            <div class="post-box">
              <div class="post-img"><img src="assets/img/blog/glsun-mall-WNX6uk-1LV4-unsplash.jpg" class="img-fluid" alt=""/></div>
              <span class="post-date">Tue, May 29</span>
              <h3 class="post-title">4 lessons for the pharma supply chain after COVID-19</h3>
              <a href="https://blogs.opentext.com/4-lessons-for-the-pharma-supply-chain-after-covid-19/" class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="post-box">
              <div class="post-img"><img src="assets/img/blog/cdc-p33DqVXhWvs-unsplash.jpg" class="img-fluid" alt=""/></div>
              <span class="post-date">Fri, August 28</span>
              <h3 class="post-title">Connecting Data to Power the Pharma Supply Chain</h3>
              <a href="https://www.marklogic.com/blog/connecting-data-to-power-the-pharma-supply-chain/" class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="post-box">
              <div class="post-img"><img src="assets/img/blog/roberto-sorin-RS0-h_pyByk-unsplash.jpg" class="img-fluid" alt=""/></div>
              <span class="post-date">Mon, March 30</span>
              <h3 class="post-title">Why Indian E-Pharma Companies Need Automation and Digitalization in the Last Mile</h3>
              <a href="https://blog.locus.sh/can-digitalization-make-pharmacy-home-delivery-efficient/" class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section id="team" class="team">

<div class="container" >

  <header class="section-header">
    <h2>Team</h2>
    <p>Our hard working team</p>
  </header>

  <div class="row gy-4">

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
      <div class="member">
        <div class="member-img">
          <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Vedant Kadam</h4>
          <span>Software Engineer</span>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
      <div class="member">
        <div class="member-img">
          <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Mahek Karia</h4>
          <span>Software Engineer</span>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
      <div class="member">
        <div class="member-img">
          <img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Parag Patel</h4>
          <span>Software Engineer</span>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
      <div class="member">
        <div class="member-img">
          <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Manan Mehta</h4>
          <span>Software Engineer</span>
        </div>
      </div>
    </div>

  </div>

</div>

</section>
  
<section id="contact" class="contact">

      <div class="container" >

        <header class="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-6">

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>Thadomal Shahani<br/>Bandra, Mum-400050</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+91 96999 25416<br/>+91 90041 45308</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>MediChain@gmail.com<br/>contact@medichain.com</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" class="php-email-form">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required/>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required/>
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </section>


            <div class="b-example-divider"></div>

<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Supply Chain</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
  </footer>
</div>

            <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
            <script src="assets/js/main.js"></script>

        </div>
    )
}

export default Home
