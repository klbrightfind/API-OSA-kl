<template>
<section class="hero lazyload pt-16 pb-48 bg-center bg-cover" style="background-image:url('https://s3-alpha-sig.figma.com/img/3ff9/9d6c/b44e6d2fdfd6c0742e14f706c0b0bc1a?Expires=1620604800&Signature=Psv1PCAXlUyhzFE~4aK4NRj5iEmFg7zjw5aKShrOiBFf4fRvatWIcQJeJGhTygF-dhEk17KVQmeH6W2OzgFlZeFtcZQ~5ghrge6ttH7-LKLb7qXz6E05iP4xuyUGy4gb53A-~agj0SaKT5xfA0LNODphmPA8AP9~U4~EtWKgvi8x9q6yO7sYRPSSD94b7Jp-LDZdC8DMhN6awVX9rwhfVYCBSOp192az1ioWNPaG0lSbJ-RWsxLN4p1Ftg06KCnsKmivw7uIY8VJXctPMtEjS7ZS0FfSCmNEl476J59ES-wBYG~SXw46C62STPr2-rErl8sP2B9ePZ21Q8HB3xED-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="text-white hero-headline">Welcome to the Future of Safety</h1>
          <p class="text-white">The Onshore Safety Alliance (OSA) is a voluntary industry program seekings to drive step-change to eliminate serious injury and fatality (SIF) events in U.S. onshore F&P operations. The program is available to any industry company or organization involbed in Upstream Explorartion and Production Activities including operators contractors and service providers.</p>
          <a class="button button--ghost-white" href="/">Apply for Membership Today!</a>
        </div>
      </div>
    </div>
</section>
</template>

<style lang="scss">
  .hero {
    position: relative;
    min-height: 64rem;
    padding-left: 4rem;
    padding-right: 4rem;
    .hero-headline {
      font-size: 6.4rem;
    }
    @media(max-width: $breakpoint-max-1023) {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: linear-gradient(to right, $osa-blue  , $osa-blue 40%, transparent 100%);
      z-index: 1;
      top: 0;
      left: 0;
      opacity: .9;

     @media(max-width: $breakpoint-max-1023) {
       background-image: none;
       background-color: rgba($osa-blue, .9);
      }
    }
    .container {
      position: relative;
      z-index: 2;
    }
  }
</style>
