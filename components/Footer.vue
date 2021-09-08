<template>
  <footer class="footer py-16">
  <div class="container">
    <div class="row">
      <div class="col-lg-2 footer-col">
          <img src="~/assets/img/osa_logo_wordmark.png" alt="">
      </div>
      <div class="col-lg-4">
        <p class="text-white">The Onshore Safety Alliance (OSA) is a vluntary indsutry program seeking to drive step-change to eliminate serious injury and fatality (SIF) events in U.S. onshore E&amp;P operations. The program is available including operators, contractors, and service providers.</p>
      </div>
      <div class="col-lg-3 footer-col">
        <h4 class="text-white">Contact Us</h4>
        <div class="text-white">The Onshore Safety Alliance</div>
        <div class="text-white">19219 Katy Freeway, Suite 175</div>
        <div class="text-white">Houston, TX 77094</div>
        <div class="text-white">USA</div>
      </div>
      <div class="col-lg-3 footer-col">
        <a href="/" class="button button--ghost-white">Call to Action</a>
      </div>
    </div>
    <div class="footer-bottom flex justify-end">
      <a class="text-white" href="/">Privacy Policy</a>
      <a class="text-white" href="/">Terms &amp; Conditions</a>
      <span class="text-white">&copy;2021, All rights reserved</span>
    </div>
  </div>
</footer>
</template>

<style lang="scss">
.footer {
  background-color: #182241;
  font-size: 1.4rem;
  color:#fff;
}

.footer-col {
  padding-bottom: 3.2rem;
}

.footer-bottom {
  a {
    font-weight: normal;
    margin-right: 1.6rem;

    &:hover,
    &:active,
    &:focus {
      color: $osa-yellow;
    }
  }
}

</style>