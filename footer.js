class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="contact-us">
    <div class="container">
      <div
        class="row g-4 g-md-5 justify-content-around justify-content-lg-between"
      >
        <div class="col-12 col-md-6 col-lg-3">
          <div class="styled-heading-h2">
            <h2 class="mx-lg-0">Contact Us</h2>
          </div>
          <div class="contact-info row">
            <div class="col-12 col-md-2">
              <i class="bi-geo-alt"></i>
            </div>
            <div class="col-12 col-md-8">
              <h3>Address</h3>
              <p>Melbourne, Australia</p>
            </div>
          </div>
          <div class="contact-info row">
            <div class="col-12 col-md-2">
              <i class="bi-phone"></i>
            </div>
            <div class="col-12 col-md-8">
              <h3>Phone</h3>
              <p>+61 480000000</p>
            </div>
          </div>
          <div class="contact-info row">
            <div class="col-12 col-md-2">
              <i class="bi-envelope"></i>
            </div>
            <div class="col-12 col-md-8">
              <h3>Email</h3>
              <p>info@skillassessmentaustralia.com</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="card">
            <div class="card-body">
              <form action="">
                <span>Get In Touch</span>
                <div class="row row-cols-1 row-cols-md-2">
                  <div class="col">
                    <input
                      type="text"
                      name="Name"
                      class="form-control"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div class="col">
                    <input
                      type="email"
                      name="Email"
                      class="form-control"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2">
                  <div class="col">
                    <input
                      type="tel"
                      name="Phone"
                      class="form-control"
                      placeholder="Your Phone Number*"
                      required
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      name="Address"
                      class="form-control"
                      placeholder="Your Address*"
                      required
                    />
                  </div>
                </div>
                <textarea
                  name="Message"
                  class="form-control"
                  placeholder="Message"
                  rows="4"
                  required
                ></textarea>
                <div class="text-center">
                  <button class="btn-all">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-12 col-lg-4">
        <img src="./img/skill-assessment-logo.svg" alt="" />
        <p class="my-5">
          Our boundless imagination helps us to help business solve their
          problem with technology in an innovative way.
        </p>
        <ul class="social-icons">
          <li>
            <a href="/index.html"><i class="bi-facebook"></i></a>
          </li>
          <li>
            <a href="/index.html"><i class="bi-facebook"></i></a>
          </li>
          <li>
            <a href="/index.html"><i class="bi-facebook"></i></a>
          </li>
          <li>
            <a href="/index.html"><i class="bi-facebook"></i></a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="anzsco-codes.html">ANZSCO Codes</a></li>
          <li><a href="blogs.html">Blogs</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <h4>Our Services</h4>
        <ul>
          <li><a href="cdr-report-writing.html">CDR Report Writing</a></li>
          <li><a href="career-episode.html">Career Episode</a></li>
          <li><a href="summary-statement.html">Summary Statement</a></li>
          <li><a href="cdr-report-review.html">CDR Report Review</a></li>
          <li>
            <a href="stage-2-cdr-writing.html">Stage 2 CDR Writing</a>
          </li>
          <li><a href="acs-rpl.html">ACS RPL Report</a></li>
          <li>
            <a href="trade-recognition-australia.html"
              >Trade Recognization Australia</a
            >
          </li>
        </ul>
      </div>
    </div>
    <p class="text-center">Copyright @ 2023 - Skill Assessment Australia</p>
  </div>
</footer>  
      `;
  }
}
customElements.define("my-footer", MyFooter);
