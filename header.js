class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="sticky-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html"
            ><img src="./img/skill-assessment-logo.svg" alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto gap-lg-5">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="services.html"
                      >All Services</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="cdr-report-writing.html"
                      >CDR Report Writing</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="career-episode.html"
                      >Career Episodes</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="summary-statement.html"
                      >Summary Statement</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="cdr-report-review.html"
                      >CDR Report Review</a
                    >
                  </li>
                  <li>
                  <a class="dropdown-item" href="stage-2-cdr-writing.html"
                    >Stage 2 CDR Writing</a
                  >
                  </li>
                  <li>
                    <a class="dropdown-item" href="acs-rpl.html"
                      >ACS RPL Report</a
                    >
                  </li>
                  <li>
                  <a class="dropdown-item" href="trade-recognition-australia.html"
                    >Trade Recognition Australia</a
                  >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="anzsco-codes.html">ANZSCO Codes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pricing.html">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
      `;
  }
}
customElements.define("my-header", MyHeader);
