<template>
  <div>
    <section class="search-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="search-filters">
              <header class="pb-8">
                <h2>Search</h2>
                <h3>Filter Results</h3>
                <a href="/">Clear All Filters</a>
              </header>
              <div class="search-filters-list">
                <div class="category-list pb-8">
                  <h4 class="category-list__header">
                    Program Areas
                  </h4>

                  <ul class="list list-unstyled pl-0">
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Leadership</a>
                        </label>
                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Workforce</a>
                        </label>

                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Planning</a>
                        </label>

                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Work</a>
                        </label>

                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Improvement</a>
                        </label>

                    </li>
                  </ul>

                </div>
                <div class="category-list pb-8">
                  <h4 class="category-list__header">Participant Actions</h4>

                  <ul class="list list-unstyled pl-0">
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Participate in OSA</a>
                        </label>
                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Implement LSA Program</a>
                        </label>
                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Ensure Worker Awareness</a>
                        </label>
                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Implement SIF Program</a>
                        </label>
                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Perform Risk Assessments</a>
                        </label>
                    </li>
                    <li>
                        <input href="/"
                          id="Coronavirus" name="Coronavirus" onchange="checkboxUpdate(this)" type="checkbox"
                          value="true"><input name="Coronavirus" type="hidden" value="false">
                        <label>
                          <a href="/">Improve Effectiveness</a>
                        </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <h1>Displaying 13 results for "API-OSA</h1>
            <div class="search-within__wrapper">

              <div class="search-wrap">

                <div class="checkbox">
                  <label class="checkbox__label" for="search-within-results">
                    <input type="checkbox" name="sw" id="search-within-results">
                    <span class="checkbox__text checkbox__text--bold">Search within results:</span>
                    <span class="checkbox__icon"></span>
                  </label>
                </div>

                <input type="text" id="search" name="f" class="search-input">

                <a class="search__submit button button--blue"
                  onclick="GoClick(document.getElementById('search').value)">
                  GO
                </a>
              </div>
            </div>
            <article class="article-list">
              <section class="article-list-content">
                <header class="article-list-header">
                  <h3 class="article-list-heading">
                    <a href="/">Blog: API-OSA</a>
                  </h3>
                  <p>12/09/21</p>
                </header>
                <div class="result-item__summary">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam harum nihil, illo
                    officiis
                    adipisci tempore soluta. Ipsa doloremque aut neque vel, aliquid cupiditate veniam deserunt ipsum
                    commodi. Amet, ipsa!
                  </p>
                </div>
              </section>
            </article>
            <article class="article-list">
              <section class="article-list-content">
                <header class="article-list-header">
                  <h3 class="article-list-heading">
                    <a href="/">Blog: API-OSA</a>
                  </h3>
                  <p>12/09/21</p>
                </header>
                <div class="result-item__summary">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam harum nihil, illo
                    officiis
                    adipisci tempore soluta. Ipsa doloremque aut neque vel, aliquid cupiditate veniam deserunt ipsum
                    commodi. Amet, ipsa!
                  </p>
                </div>
              </section>
            </article>
            <article class="article-list">
              <section class="article-list-content">
                <header class="article-list-header">
                  <h3 class="article-list-heading">
                    <a href="/">Blog: API-OSA</a>
                  </h3>
                  <p>12/09/21</p>
                </header>
                <div class="result-item__summary">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam harum nihil, illo
                    officiis
                    adipisci tempore soluta. Ipsa doloremque aut neque vel, aliquid cupiditate veniam deserunt ipsum
                    commodi. Amet, ipsa!
                  </p>
                </div>
              </section>
            </article>
            <article class="article-list">
              <section class="article-list-content">
                <header class="article-list-header">
                  <h3 class="article-list-heading">
                    <a href="/">Blog: API-OSA</a>
                  </h3>
                  <p>12/09/21</p>
                </header>
                <div class="result-item__summary">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam harum nihil, illo
                    officiis
                    adipisci tempore soluta. Ipsa doloremque aut neque vel, aliquid cupiditate veniam deserunt ipsum
                    commodi. Amet, ipsa!
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style lang="scss">
  .search-page {
    padding: 8rem 0;

    .search-wrap {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding-bottom: 3.2rem;
    }

    .checkbox {
      padding-bottom: 1.6rem;
    }

    .search-input {
      background-color: #fff;
      border: .1rem solid #ccc;
      border-radius: .25rem;
      display: block;
      font-size: inherit;
      font-weight: 400;
      padding: .4rem .8rem;
      width: 100%;
      margin-bottom: 1.6rem;
    }
  }

  .search-filters {
    header {
       border-bottom: 1px solid #ccc;
    }
  }

  .category-list {
    padding-top: 1.6rem;
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }

  input.date{
    border: 1px solid #ccc;
    padding: .8rem 1.2rem;
  }

  .date-input {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.6rem;
  }

  .article-list {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid #ccc;
    padding-top: 1.6rem;
  }

  .pagination-list {
    list-style: none;
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    border: 1px solid #ccc;
    padding-bottom: 0;
    margin: 1.6rem 0;

    .searchPagination__nextPrevious--DISABLED {
        padding: .4rem 1.2rem;
        &:not(:last-child) {
          border-right: 0;
        }

        opacity: .25;
    }

    .searchPagination__listItem,
    .searchPagination__nextPrevious {
      a, > span {
        padding: .4rem 1.2rem;
        border-radius: 4px;
      }



      &:hover,
      &:active,
      &:focus,
      &--ACTIVE {
        a {
          color: #fff;
          background-color: $osa-blue;
        }
      }

      &--ACTIVE a{ 
        &:hover,
        &:active,
        &:focus {
          background-color: darken($osa-blue, 10%);
        }
      }
    }
  }

</style>
