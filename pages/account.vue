<template>
  <div>
    <section class="account">
      <div class="container">
        <section class="breadcrumbs py-16">
          <ul class="breadcrumb-list pl-0 list-none flex items-center">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item">Resource Library</li>
          </ul>
        </section>
        <div class="flex items-start justify-between">
          <h1 class="pb-32">My Account</h1>
          <a href="/" class="button button--blue">Questions? Ask API-OSA</a>
        </div>
        <div class="my-account-wrapper pb-16">
          <!-- <div class="flex justify-end">
          <a href="/" class="button button--blue">Edit</a>
        </div> -->
          <div class="row">
            <div class="col-lg-6">
              <div class="account-wrapper">
                <p class="account-label">First Name</p>
                <p>John</p>
              </div>
              <div class="account-wrapper">
                <p class="account-label">Job Title</p>
                <p>Senior Executive Contractor</p>
              </div>
              <div class="account-wrapper">
                <p class="account-label">Address</p>
                <p>123 Sesame Street</p>
              </div>
              <div class="account-wrapper">
                <p class="account-label">Phone</p>
                <p>Phone: 212-555-1212</p>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="account-wrapper">
                <p class="account-label">Last Name</p>
                <p>Smith</p>

              </div>
              <div class="account-wrapper">
                <p class="account-label">Organization Name</p>
                <p>On Shore Safety Alliance</p>
              </div>

              <div class="account-wrapper">
                <p class="account-label">Email</p>
                <p>email@company.org</p>
              </div>

              <div class="account-wrapper">
                <p class="account-label">Fax</p>
                <p>Fax: 212-555-1212</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-account-wrapper pb-16">
          <h3>Create New Forms</h3>

          <div class="flex justify-center">
            <a href="/" class="button button--yellow button--form">SIF Information Collection</a>
            <a href="/" class="button button--yellow button--form">SIF Incident Report</a>
          </div>
          <div class="flex justify-center">
            <a href="/" class="button button--yellow button--form">WCI Information Collection</a>
            <a href="/" class="button button--yellow button--form">WCI Incident Report</a>
          </div>
        </div>
        <div class="my-account-wrapper pb-16">
          <h3>My Forms</h3>
          <div class="my-account-form">
            <div class="flex justify-between flex-wrap">
              <a href="/">Individual SIF Incident Report</a>
              <span class="pl-16">Saved / In Progress</span>
              <div class="flex">
                <i class="material-icons icon-large">edit</i>
                <i class="material-icons icon-large">delete</i>
              </div>
            </div>
            <p>Last Modified: Feb15 2021</p>
          </div>
          <div class="my-account-form">
            <div class="flex justify-between flex-wrap">
              <a href="/">Individual SIF Incident Report</a>
              <span class="pl-16">Saved / In Progress</span>
              <div class="flex">
                <i class="material-icons icon-large">edit</i>
                <i class="material-icons icon-large">delete</i>
              </div>
            </div>
            <p>Last Modified: Feb15 2021</p>
          </div>
        </div>
        <div class="my-account-wrapper pb-16">
          <div class="flex flex-wrap">
            <span class="pr-4">Need to File a Report?</span>
            <a href="/">View All Blank Forms</a>
          </div>
        </div>

        <!-- <h3>Saved Resources</h3>
        <div class="account-card mb-8 flex">
          <img src="https://placeimg.com/512/512/nature/sepia" alt="">
          <div class="account-card-content p-4">
            <div class="flex">
              <a href="/">Isolating Potential Flow Zones During Well Construction</a>
              <i class="material-icons account-star">star_outline</i>
            </div>
            <p class="text-2xl">[Subhead/Subtitle] API Standard 65--Second Edition</p>
            <p class="text-2xl">Date | 50KB</p>
            <p class="text-2xl">Participant Action 1 | Operational Area</p>
            <a class="text-xl flex justify-end" href="/">Share</a>
          </div>
        </div>
        <div class="account-card mb-8 flex">
          <img src="https://placeimg.com/512/512/nature/sepia" alt="">
          <div class="account-card-content p-4">
            <div class="flex">
              <a href="/">Isolating Potential Flow Zones During Well Construction</a>
              <i class="material-icons account-star">star_outline</i>
            </div>
            <p class="text-2xl">[Subhead/Subtitle] API Standard 65--Second Edition</p>
            <p class="text-2xl">Date | 50KB</p>
            <p class="text-2xl">Participant Action 1 | Operational Area</p>
            <a class="text-xl flex justify-end" href="/">Share</a>
          </div>
        </div>

        <h3>Saved Alerts</h3>
        <div class="account-card mb-8 flex">
          <img src="https://placeimg.com/512/512/nature/sepia" alt="">
          <div class="account-card-content p-4">
            <div class="flex">
              <a href="/">Isolating Potential Flow Zones During Well Construction</a>
              <i class="material-icons account-star">star_outline</i>
            </div>
            <p class="text-2xl">[Subhead/Subtitle] API Standard 65--Second Edition</p>
            <p class="text-2xl">Date | 50KB</p>
            <p class="text-2xl">Participant Action 1 | Operational Area</p>
            <a class="text-xl flex justify-end" href="/">Share</a>
          </div>
        </div>
        <div class="account-card mb-8 flex">
          <img src="https://placeimg.com/512/512/nature/sepia" alt="">
          <div class="account-card-content p-4">
            <div class="flex">
              <a href="/">Isolating Potential Flow Zones During Well Construction</a>
              <i class="material-icons account-star">star_outline</i>
            </div>
            <p class="text-2xl">[Subhead/Subtitle] API Standard 65--Second Edition</p>
            <p class="text-2xl">Date | 50KB</p>
            <p class="text-2xl">Participant Action 1 | Operational Area</p>
            <a class="text-xl flex justify-end" href="/">Share</a>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  .account-card {
    border: 2px solid $osa-blue;

    img {
      flex: 1 0 16rem;
      max-width: 16rem;
    }
  }

  .account-wrapper {
    .account-label {
      font-weight: bold;

      +p {
        color: #999;
      }
    }
  }

</style>
