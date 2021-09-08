<template>
  <nav class="nav relative">
      <div class="flex justify-between items-center">
        <img class="nav-logo" src="http://sc-osa.brightfind.com/library/OSA/img/osa-website-logo.svg" alt="">
        <i class="material-icons nav-toggle">menu</i>
        <div class="nav-container"  aria-expanded="false">
          <div class="nav-utility">
            <div class="nav-top flex justify-end items-center">
              <a href="/" class="nav-util-link"><i class="material-icons">place</i> Placeholder</a>
              <a href="/" class="nav-util-link"><i class="material-icons">mail</i>Contact Us</a>
              <a href="/" class="nav-button button button--blue">Login</a>
              <form action="/" class="flex nav-search">
                <input class="nav-input" type="text" placeholder="Search" id="search" name="search">
                <input class="nav-search-button" type="submit" value=" ">
              </form> 
            </div>
            <div class="flex nav-links">
              <button type="button" class="nav-l1-link px-8" aria-expanded="false">About OSA
                <div class="nav-l2-container">
                  <ul class="nav-l2-list list-none">
                    <li><a href="/" class="nav-l2-link">Alliance Leadership</a></li>
                    <li><a href="/" class="nav-l2-link">Program Participants</a></li>
                    <li><a href="/" class="nav-l2-link">Stakeholders</a></li>
                  </ul>
                </div>
              </button>
              <button type="button" class="nav-l1-link px-8" aria-expanded="false">OSA Safety Program
                <div class="nav-l2-container">
                  <ul class="nav-l2-list list-none">
                    <li><a href="/" class="nav-l2-link">Alliance Leadership 2</a></li>
                    <li><a href="/" class="nav-l2-link">Program Participants 2</a></li>
                    <li><a href="/" class="nav-l2-link">Stakeholders 2</a></li>
                  </ul>
                </div>
              </button>
              <button type="button" class="nav-l1-link px-8" aria-expanded="false">Resources 
                <div class="nav-l2-container">
                  <ul class="nav-l2-list list-none">
                    <li><a href="/" class="nav-l2-link">Alliance Leadership 3</a></li>
                    <li><a href="/" class="nav-l2-link">Program Participants 3</a></li>
                    <li><a href="/" class="nav-l2-link">Stakeholders 3</a></li>
                  </ul>
                </div>
              </button>
              <button type="button" class="nav-l1-link px-8" aria-expanded="false">Events &amp; Webinar
                <div class="nav-l2-container">
                  <ul class="nav-l2-list list-none">
                    <li><a href="/" class="nav-l2-link">Alliance Leadership 4</a></li>
                    <li><a href="/" class="nav-l2-link">Program Participants 4</a></li>
                    <li><a href="/" class="nav-l2-link">Stakeholder4</a></li>
                  </ul>
                </div>
              </button>
              <button type="button" class="nav-l1-link px-8" aria-expanded="false">Industry Safety Data
                <div class="nav-l2-container">
                  <ul class="nav-l2-list list-none">
                    <li><a href="/" class="nav-l2-link">Alliance Leadership5 </a></li>
                    <li><a href="/" class="nav-l2-link">Program Participants5 </a></li>
                    <li><a href="/" class="nav-l2-link">Stakeholders 5</a></li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<style lang="scss">

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: .75;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;

  &--active {
    display: block;
  }
}
.nav {
  padding: .8rem 4.8rem;
  z-index: 3;
  background-color: #fff;
  border-bottom: 2px solid $osa-blue;

  @media(max-width: $breakpoint-max-1279) {
    padding: 0;
    padding-left: 1.6rem;
  }
}

.nav-links {
   @media(max-width: $breakpoint-max-1279) {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
  } 
}

.nav-container {
  margin-left: auto;
  background-color: #fff;
  z-index: 2;
  @media(max-width: $breakpoint-max-1279) {
    padding: 1.6rem 0 0;
    position: absolute;
    top: 100%;
    left:0;
    width: 100%;
    background-color: #182241;

    &[aria-expanded="false"] {
      display: none;
    }
  }
}

.nav-logo {
  max-width: 20rem;
  img {
    width: 100%;
  }
  @media(max-width: $breakpoint-max-1279) {
    max-width: 16rem;
  }
}

.material-icons.nav-toggle {
  @media(min-width: $breakpoint-min-1280) {
    display: none;
  }
  color: #fff;
  background-color: #F7B361;
  padding: 1.2rem;
  font-size: 4rem;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: #182241;
  }
}

.nav-button {
  margin-right: 1.6rem;
  padding: .4rem 3.2rem;
  border-radius: 6px;

  @media(max-width: $breakpoint-max-1279) {
    margin-bottom: 1.6rem;
    color: #182241;
    background-color: #fff;
  }
}

.nav-util-link {
  font-size: 1.4rem;
  font-weight: normal;
  margin-right: 1.6rem;
  margin-left: .8rem;
  display: flex;
  align-items: center;
  
  i.material-icons {
    color: #182241;
    font-size: 1.6rem;
    margin-right: .8rem;
    transition: .3 all ease;
  }

  &:hover,
  &:focus,
  &:active {
    &, i.material-icons {
      color: #61B0C7;
    }
  } 

  @media(max-width: $breakpoint-max-1279) {
    padding-bottom: 1.6rem;
    color: #fff;
    margin-left: 0;
    i.material-icons {
      color: #fff;
    }
  }

}

.nav-link {
  color: #182241;
  font-size: 1.4rem;
  font-weight: normal;
  margin-right: 1.6rem;
}

.nav-input {
  min-width: 24rem;
  padding-left: .8rem;
  border: 1px solid #ccc;
  border-radius: 6px 0 0 6px;
  &::placeholder {
    font-size: 1.4rem;
  }

  @media(max-width: $breakpoint-max-1279) {
    border: 1px solid #fff;
  }
}

.nav-top {
  padding-bottom: 3.2rem;
  @media(max-width: $breakpoint-max-1279) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

}

.nav-search {
  position: relative;
  &:after {
    @include material-icons-pseudo;
    content: "search";
    color: #fff;
    position: absolute;
    top: 50%;
    right: .8rem;
    transform: translateY(-50%);
    pointer-events: none;
  }
}

.nav-search-button {
  padding: .8rem 1.6rem;
  background-color: #182241;
  border-radius: 0 6px 6px 0;
  width: 0;
  color: transparent;

  @media(max-width: $breakpoint-max-1279) {
    background-color: #F7B361;
  }
}


.nav-l2-container {
  top: 100%;
  left:0;
  position: absolute;
  width: 100%;
  background-color: #182241;
  padding: 2.4rem 0;
  .nav-l2-list {
    display: flex;
    justify-content: space-around;
    padding-left: 0;
    padding-bottom: 0;

      @media(max-width: $breakpoint-max-1279) {
        position: static;
        flex-direction: column;
        align-items: flex-start;
        background-color: #F7B361;
        width: 100%;
        padding: 1.6rem
      } 

    .nav-l2-link {
      color: #fff;
      &:hover,
      &:active,
      &:focus {
        color: #F7B361;
      }

      @media(max-width: $breakpoint-max-1279) {
        &:hover,
        &:active,
        &:focus {
          color: $osa-blue;
        }
      } 
    }
  }

  @media(max-width: $breakpoint-max-1279) {
    position: static;
  } 
}

.nav-l1-link {
  color: $osa-blue-2;
  transition: all .3s ease;
  &:hover,
  &:active,
  &:focus {
    color: $osa-yellow;
  }

  @media(max-width: $breakpoint-max-1279) {
    padding-bottom: .8rem;
    margin-bottom: 3.2rem;
    color: #fff;
    text-align: left;
    border-bottom: 1px solid #fff;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
      border-bottom: 0;
    }
  } 
  &[aria-expanded="false"] {
    .nav-l2-container {
      display: none;
    }
  }
}
</style>
