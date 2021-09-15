<template>
  <div class="container">
    <script defer="true" src="/tabletotal.js"></script>
    <h2>[Reporting Year] SIF Information Collection</h2>
    <form class="form" action="#">
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Company</label>
          <input placeholder="Placeholder" type="text" required>
        </div>
        <div class="input-wrapper">
          <label for="">Name</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Email</label>
          <input placeholder="Placeholder" type="text">
        </div>

        <div class="input-wrapper">
          <label for="">Job Title</label>
          <input placeholder="Placeholder" type="text">
        </div>

      </div>
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Reporting Year</label>
          <input placeholder="Placeholder" type="text">
        </div>

        <div class="input-wrapper">
          <label for="">Reference ID</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="radio-group-header radio-group-header--border">
        <h4 class="radio-group-headline">Instructions</h4>
        <div class="grey-subtitle">Instructions: Please report total number of actual and potential SIF Events that
          occurred in calendar year 20XX. Please break out your reported numbers by IOGP Life Saving Rule categories.
        </div>
      </div>
      <div class="table-wrapper">
      <table class="form-table total-table">
        <caption>SIF Events</caption>

        <thead>
          <tr>
            <th scope="col">IOGP LSR Category</th>
            <th scope="col">Actual</th>
            <th scope="col">Potential</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="IOGP LSR Category	">Bypassing Safety Controls</td>
            <td data-label="Actual">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="no data">no data</option>
                  <option value="Not Applicable">1</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </div>
            </td>

            <td data-label="Potential">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="IOGP LSR Category	">Confined Space</td>
            <td data-label="Actual">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>

            <td data-label="Potential">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="IOGP LSR Category	">Driving</td>
            <td data-label="Actual">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>

            <td data-label="Potential">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Energy Isolation">IOGP LSR Category </td>
            <td data-label="Actual">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>

            <td data-label="Potential">
              <div class="select-container">
                <select name="numbers" id="numbers" required>
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr class="total-row">
            <td scope="row" data-label="">Total</td>
            <td data-label="Actual"><input id="number" readonly value=0 type="text"></td>
            <td data-label="Potential"><input id="number" readonly value=0 type="text"></td>
          </tr>
        </tbody>
      </table>
      </div>


      <div class="input-wrapper">
        <label for="">Other Information</label>
        <div class="grey-subtitle">Please provide details for any SIF events not assigned to a life-saving rule
          ("Other").</div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div>
        <strong>
        <div class="pb-4">Additional Instructions:</div>
        <div class="pb-4">
          <span class="span--red">For all actual SIFs reported above, please submit a Report Form 2 for each incident. </span>
        </div>
        <div class="pb-4">  <span class="span--red"> For the potential SIFs reported above, you may select up to 5 Potential SIF events with the most learning opportunity for the industry</span> additional
        provide additional detailed information for each incident by completing Report Form 2.

        </div>
        </strong>
      </div>

      <div class="flex">
        <input type="submit" class="button button--yellow button--form" value="Save">
        <input type="submit" class="button button--yellow button--form">
      </div>
    </form>

    <h2>Report Form 2</h2>
    <form class="form" action="/">
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Company</label>
          <input placeholder="Placeholder" type="text" required>
        </div>
        <div class="input-wrapper">
          <label for="">Name</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="input-wrapper">
        <label for="">Job Title</label>
        <input placeholder="Placeholder" type="text">
      </div>
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Email</label>
          <input placeholder="Placeholder" type="text">
        </div>

        <div class="input-wrapper">
          <label for="">Form Title</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="input-wrapper">
        <label for="">Reference ID</label>
        <input placeholder="Placeholder" type="text">
      </div>

      <div class="input-wrapper">
        <label for="">Incident Date</label>
        <input type="date">
      </div>

      <div class="input-wrapper">
        <label for="">Incident Location</label>
      </div>

      <div class="input-wrapper">
        <label for="">State</label>
        <div class="select-container">
        <select name="cars" id="cars">
          <option value="">Michigan</option>
          <option value="">California</option>
          <option value="">Arizona</option>
          <option value="">Hawaii</option>
        </select>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">Basin (Optional)</label>
        <input placeholder='Location' type="text">
      </div>

      <div class="input-wrapper">
        <label for="">County (Optional)</label>
        <input placeholder='Location' type="text">
      </div>

      <div class="input-wrapper">
        <h4>Was this event an actual or potential SIF?</h4>
        <div class="radio-input-group">
          <div class="radio-input-wrapper">
            <div class="radio-container">
              <input type="radio" name="radio-1">
              <div class="radio-dot"></div>
            </div>
            <label for="radio1">Actual</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="radio-container">
              <input type="radio" name="radio-1">
              <div class="radio-dot"></div>
            </div>
            <label for="radio1">Potential</label>
          </div>
        </div>

      </div>


      <div class="input-wrapper">
        <h4>At what stage of operation did the incident occur?</h4>
        <div class="select-container">
          <select name="cars" id="cars">
            <option value="">Overbalanced / Conventional</option>
            <option value="">Returns Management Drilling</option>
            <option value="">MPD</option>
            <option value="">UBD</option>
          </select>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">Describe the activity being performed</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">What type of drilling?</label>
        <div class="select-container">
          <select name="cars" id="cars">
            <option value="">Overbalanced / Conventional</option>
            <option value="">Returns Management Drilling</option>
            <option value="">MPD</option>
            <option value="">UBD</option>
          </select>
        </div>
      </div>



      <div class="input-wrapper">
          <h4 class="radio-group-headline">What drilling activity</h4>
                  <div class="select-container">
          <select name="cars" id="cars">
            <option value="">Overbalanced / Conventional</option>
            <option value="">Returns Management Drilling</option>
            <option value="">MPD</option>
            <option value="">UBD</option>
          </select>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">Other Information</label>
        <div class="grey-subtitle">Please provide details for any SIF events not assigned to a life-saving rule
          ("Other").</div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">Depth of drill when it occured</label>
        <input placeholder="placeholder" type="text">
      </div>

      <div class="input-wrapper">
        <h4>Did the event result in, or could have resulted in, a fataility?</h4>
        <div class="radio-input-group">
          <div class="radio-input-wrapper">
            <div class="radio-container">
              <input type="radio" name="radio-3">
              <div class="radio-dot"></div>
            </div>
            <label for="radio1">Yes</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="radio-container">
              <input type="radio" name="radio-3">
              <div class="radio-dot"></div>
            </div>
            <label for="radio1">No</label>
          </div>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">If yes, please incidate the number of fatalities</label>
        <div class="select-container">
          <select name="numbers" id="numbers">
            <option disabled hidden selected="selected" value="">Select One</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
      </div>

      <div class="input-wrapper">
        <h4>Did the event result in, or could have resulted in, a life-altering injury or illnesses?</h4>
        <div class="radio-input-group">
          <div class="radio-input-wrapper">
            <div class="radio-container">
              <input type="radio" name="radio-4">
              <div class="radio-dot"></div>
            </div>
            <label for="radio1">Yes</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="radio-container">
              <input type="radio" name="radio-4">
              <div class="radio-dot"></div>
            </div>
            <label for="radio1">No</label>
          </div>
          <label for="">If yes, please incidate the number of life altering injuries or illnesses</label>
          <div class="select-container">
            <select name="numbers" id="numbers">
              <option disabled hidden selected="selected" value="">Select One</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
        </div>
      </div>

      <div class="input-wrapper">


      </div>

      <div class="input-wrapper">
        <label for="">(Optional) Please provide additional information about the fatalities or life altering
          injuries</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <div class="radio-group-header">
          <h4 class="radio-group-headline">What casual factors were identified?</h4>
          <div class="grey-subtitle">Select all that apply</div>
        </div>
        <div class="group-headline">People (ACTS)</div>
        <div class="radio-subtitle">Following Procedures</div>
        <div class="radio-input-group">
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Violation intentional</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Violation unintentional</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Improper Position</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Work or Motion at improper speed</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Improper lifting or loading</label>
          </div>
        </div>
      </div>

      <div class="input-wrapper">
        <div class="radio-subtitle">Use of Tools, Equipment, Materials and Products</div>
        <div class="radio-input-group">
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Improper use / position of tols/equipment</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Servicing of energized equipment/inadequate energy isolation</label>
          </div>
        </div>
      </div>

      <div class="input-wrapper">
        <div class="group-headline">Process Conditions</div>
        <div class="radio-subtitle">Protective Systems</div>
        <div class="radio-input-group">
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Inadequete/defective guards or protective barriers</label>
          </div>
          <div class="radio-input-wrapper">
            <div class="checkbox-container">
              <input type="checkbox">
              <input type="hidden">
              <i class="material-icons checkmark">check</i>
            </div>
            <label for="checkbox1">Inadequete security provisions or systems</label>
          </div>
        </div>
      </div>

      <div class="input-wrapper">
        <label for="">What went wrong? Please provide a general summary/description of the conditions present when the
          event occured.</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">What steps did your company take to address the incident?</label>
        <div class="grey-subtitle">"Please provide a general summary/description of the corrective actions taken."</div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">What Life Saving Action failed to prevent the event?</label>
        <div class="select-container">
        <select>
          <option value="">Bypassing Safety Controls</option>
          <option value="">Returns Management Drilling</option>
          <option value="">MPD</option>
          <option value="">UBD</option>
        </select>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">If other please explain</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">(Optional) Please provide any additional information you believe would be valuable for industry
          learning</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="table-wrapper">
      <table class="form-table file-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <div>
                <strong>Filename</strong>
              </div>
              <div class="grey-subtitle">the name of the file you have attached - required</div>
            </th>
            <th scope="col">
              <div>
                <strong>Image Title</strong>
              </div>
              <div class="grey-subtitle">(the tile to be used in the incident report e.g. 'Image 1: fault in equipment' - required)</div>
            </th>
            <th scope="col">
              <div>
                <strong>Caption</strong>
              </div>
              <div class="grey-subtitle">(some brief text to accompany the iamge - optional</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" data-label="">D1</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
          </tr>

          <tr>
            <td scope="row" data-label="">D2</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
          </tr>

          <tr>
            <td scope="row" data-label="">D2</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
          </tr>
        </tbody>
      </table>
      </div>


      <div class="flex">

        <a href="/" class="button button--yellow button--form">Save </a>
        <input type="submit" class="button button--yellow button--form">
      </div>
    </form>

    <h2>Report Form 3</h2>
    <form class="form" action="/">
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Company</label>
          <input placeholder="Placeholder" type="text" required>
        </div>
        <div class="input-wrapper">
          <label for="">Name</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Email</label>
          <input placeholder="Placeholder" type="text">
        </div>

        <div class="input-wrapper">
          <label for="">Title</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="radio-group-header radio-group-header--border">
        <h4 class="radio-group-headline">Instructions</h4>
        <div class="grey-subtitle">Please report the overall number of well control incidents for Level 1A, 1B, 2, 3, and 4 (Optional) broken out by stage of operation</div>
      </div>
      <div class="table-wrapper">
      <table class="form-table total-table">
        <caption>Please report overall number of well control incidents</caption>

        <thead>
          <tr>
            <th scope="col">Stage of Operation</th>
            <th scope="col">Level 1A</th>
            <th scope="col">Level 1B</th>
            <th scope="col">Level 2</th>
            <th scope="col">Level 3</th>
            <th scope="col">Level 4 (Optional)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Strage of Operation">Drilling</td>
            <td data-label="Level 1A">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 1B">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 2">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 3">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 4 (optional)">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Stage of Operation">Initial Completion</td>
            <td data-label="Level 1A">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 1B">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 2">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 3">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 4 (optional)">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Stage of Operation">Well Intervention</td>
            <td data-label="Level 1A">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 1B">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 2">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 3">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 4 (optional)">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Stage of Operation">Abandonment</td>
            <td data-label="Level 1A">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 1B">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 2">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 3">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 4 (optional)">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Stage of Operation">Other</td>
            <td data-label="Level 1A">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 1B">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 2">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 3">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
            <td data-label="Level 4 (optional)">
              <div class="select-container">
                <select name="numbers" id="numbers">
                  <option disabled hidden selected="selected" value="">Select One</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr class="total-row">
            <td scope="row" data-label="">Total</td>
            <td data-label="Level 1A"><input id="number" readonly value=0 type="text"></td>
            <td data-label="Level 1B"><input id="number" readonly value=0 type="text"></td>
            <td data-label="Level 2"><input id="number" readonly value=0 type="text"></td>
            <td data-label="Level 3"><input id="number" readonly value=0 type="text"></td>
            <td data-label="Level 4 (optional)"><input readonly value=0 id="number" type="text"></td>
          </tr>
        </tbody>
      </table>
      </div>


      <div class="input-wrapper">
        <label for="">Other</label>
        <div class="grey-subtitle">Please provide details for any WCI events not assigned to a Stage of Operation ("Other")</div>

        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div>
        <strong>
        <div class="pb-4">Additional Instructions:</div>
        <div class="pb-4">
          <span class="span--red">For all actual SIFs reported above, please submit a Report Form 2 for each incident. </span>
        </div>
        <div class="pb-4">  <span class="span--red"> For the potential SIFs reported above, you may select up to 5 Potential SIF events with the most learning opportunity for the industry</span> additional
        provide additional detailed information for each incident by completing Report Form 2.

        </div>
        </strong>
      </div>
      <div class="flex">

        <a href="/" class="button button--yellow button--form">Save </a>
        <input type="submit" class="button button--yellow button--form">
      </div>
    </form>

    <h2>Report Form 4</h2>
    <form class="form" action="/">
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Company</label>
          <input placeholder="Placeholder" type="text" required>
        </div>
        <div class="input-wrapper">
          <label for="">Name</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Email</label>
          <input placeholder="Placeholder" type="text">
        </div>

        <div class="input-wrapper">
          <label for="">Title</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>

      <div class="input-wrapper">
        <label for="">Incident Date</label>
        <input type="date">
      </div>

      <div class="input-wrapper">
        <label for="">Incident Location</label>
        <input placeholder='Location' type="text">
      </div>

      <div class="input-wrapper">
        <h4>What WCI Level?</h4>
        <div class="select-container">
          <select name="cars" id="cars">
            <option value="">Overbalanced / Conventional</option>
            <option value="">Returns Management Drilling</option>
            <option value="">MPD</option>
            <option value="">UBD</option>
          </select>
        </div>
      </div>


      <div class="input-wrapper">
        <h4>At what stage of operation did the incident occur?</h4>
        <div class="select-container">
          <select name="cars" id="cars">
            <option value="">Overbalanced / Conventional</option>
            <option value="">Returns Management Drilling</option>
            <option value="">MPD</option>
            <option value="">UBD</option>
          </select>
        </div>
      </div>

      <div class="input-wrapper">
        <label for="">Describe the activity being performed</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">What type of drilling?</label>
        <div class="select-container">
          <select name="cars" id="cars">
            <option value="">Overbalanced / Conventional</option>
            <option value="">Returns Management Drilling</option>
            <option value="">MPD</option>
            <option value="">UBD</option>
          </select>
        </div>

      </div>

      <div class="input-wrapper">
        <div class="radio-group-header radio-group-header--border">
          <h4 class="radio-group-headline">What drilling activity</h4>
          <div class="grey-subtitle">Select all that apply</div>
        </div>

      </div>
      <div class="radio-input-group radio-input-group--half">
        <div class="input-wrapper">
          <div class="radio-subtitle">Drilling (On Bottom)</div>

          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Rotating</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Non-Rotational</label>
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="radio-subtitle">Reaming/Circulating</div>

          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">On Bottom</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Off Bottom</label>
            </div>
          </div>
        </div>
      </div>
      <div class="radio-input-group radio-input-group--half">
        <div class="input-wrapper">
          <div class="radio-subtitle">Trip</div>
          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Trip In -- Open Hole</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Trip In -- Cased Hole</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Trip Out -- Open Hole</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Trip Out -- Cased Hole</label>
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="radio-subtitle">Wireline Operations</div>
          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">RIH w/Wireline</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">POOH w/Wireline</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Logging Operation</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Out of Hole</label>
            </div>
          </div>
        </div>
      </div>
      <div class="radio-input-group radio-input-group--half">
        <div class="input-wrapper">
          <div class="radio-subtitle">Run Casing</div>

          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Cased Hole</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Open Hole</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Liner Operations</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Circulating / Hole Full</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">POOH / Lay Down Casing</label>
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="radio-subtitle">Cementing</div>
          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Pumping Operations</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Waiting on Cement</label>
            </div>
          </div>
        </div>
      </div>
      <div class="radio-input-group radio-input-group--half">
        <div class="input-wrapper">
          <div class="radio-subtitle">Coring</div>
          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Coring Operations</label>
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="radio-subtitle">Pipe Conveyed Logging</div>

          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Logging Operations</label>
            </div>
          </div>
        </div>
      </div>
      <div class="radio-input-group radio-input-group--half">
        <div class="input-wrapper">
          <div class="radio-subtitle">Fishing</div>

          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Tubulars/Threaded Pipe/ BHA</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Wireline</label>
            </div>
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Junk</label>
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="radio-subtitle">Well Control Equipment Testing</div>
          <div class="radio-input-group">
            <div class="radio-input-wrapper">
              <div class="checkbox-container">
                <input type="checkbox">
                <input type="hidden">
                <i class="material-icons checkmark">check</i>
              </div>
              <label for="checkbox1">Well Control Equipment Testing</label>
            </div>
          </div>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">Depth of drill when it occured</label>
        <input placeholder="placeholder" type="text">
      </div>

      <div class="input-wrapper">
        <h3>Root Causes</h3>
        <label for="">Please provide the root cause</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">What root causes were identified?</label>
        <input placeholder="placeholder" type="text">
      </div>

      <div class="input-wrapper">
        <label for="">What steps did your company take to address the incident?</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="table-wrapper">
      <table class="form-table file-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <div>
                <strong>Filename</strong>
              </div>
              <div class="grey-subtitle">the name of the file you have attached - required</div>
            </th>
            <th scope="col">
              <div>
                <strong>Image Title</strong>
              </div>
              <div class="grey-subtitle">(the tile to be used in the incident report e.g. 'Image 1: fault in equipment' - required)</div>
            </th>
            <th scope="col">
              <div>
                <strong>Caption</strong>
              </div>
              <div class="grey-subtitle">(some brief text to accompany the iamge - optional</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" data-label="">D1</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
          </tr>

          <tr>
            <td scope="row" data-label="">D2</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
          </tr>

          <tr>
            <td scope="row" data-label="">D2</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
          </tr>
        </tbody>
      </table>
      </div>

      <div class="flex">

        <a href="/" class="button button--yellow button--form">Save </a>
        <input type="submit" class="button button--yellow button--form">
      </div>
    </form>

    <h2>Report Form 5</h2>
    <form class="form" action="/">
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Company</label>
          <input placeholder="Placeholder" type="text" required>
        </div>
        <div class="input-wrapper">
          <label for="">Name</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>
      <div class="input-wrapper--inline">
        <div class="input-wrapper">
          <label for="">Email</label>
          <input placeholder="Placeholder" type="text">
        </div>

        <div class="input-wrapper">
          <label for="">Title</label>
          <input placeholder="Placeholder" type="text">
        </div>
      </div>

      <div class="input-wrapper">
        <label for="">Incident Date</label>
        <input type="date">
      </div>

      <div class="input-wrapper">
        <label for="">Incident Location</label>
        <input placeholder='Location' type="text">
      </div>

      <div class="input-wrapper">
        <label for="">State</label>
        <div class="select-container">
        <select name="cars" id="cars">
          <option value="">Michigan</option>
          <option value="">California</option>
          <option value="">Arizona</option>
          <option value="">Hawaii</option>
        </select>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">Basin (Optional)</label>
        <input placeholder='Location' type="text">
      </div>

      <div class="input-wrapper">
        <label for="">County (Optional)</label>
        <input placeholder='Location' type="text">
      </div>

      <div class="input-wrapper">
        <label for="">What Happened? Please provide a summary/description of the event including information such as
          stage of operation, weather conditions, etc.</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">Why did it happen? What went wrong? Please provide a summary of the root causes and/or
          contributing factors to the event.</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">What lessons can be learned from the incident?</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <label for="">What Life Saving Action failed to prevent the event?</label>
        <div class="select-container">
          <select name="cars" id="cars">
            <option value="">Bypassing Safety Controls</option>
            <option value="">Energy Isolation</option>
            <option value="">Hot Work</option>
            <option value="">Line of Fire</option>
            <option value="">Safe Mechanical Lifting</option>
            <option value="">Work Authorization</option>
            <option value="">Work at Heights</option>
            <option value="">Other</option>
          </select>
        </div>

      </div>

      <div class="input-wrapper">
        <label for="">If other, please explain</label>
        <input placeholder="placeholder" type="text">
      </div>

      <div class="input-wrapper">
        <label for="">(Optional) Please provide any additional information you believe would be valuable for industry
          learning: </label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrapper">
        <div class="radio-group-header radio-group-header--border">
          <h4 class="radio-group-headline"> Schematics / Photographs – OPTIONAL (Stolen from IOGP) </h4>
          <div class="grey-subtitle">Images can be submitted to support the incident report. Images must be submitted
            separately as individual files along with this document. Acceptable image types are .jpeg, .jpg, .gif and
            .png and they must be less than 500KB in size.</div>
        </div>

      </div>

<div class="table-wrapper">
      <table id="tableRow" class="form-table file-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <div>
                <strong>Filename</strong>
              </div>
              <div class="grey-subtitle">the name of the file you have attached - required</div>
            </th>
            <th scope="col">
              <div>
                <strong>Image Title</strong>
              </div>
              <div class="grey-subtitle">(the tile to be used in the incident report e.g. 'Image 1: fault in equipment' - required)</div>
            </th>
            <th scope="col">
              <div>
                <strong>Caption</strong>
              </div>
              <div class="grey-subtitle">(some brief text to accompany the image - optional</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" data-label="">D1</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
            
          </tr>

          <tr>
            <td scope="row" data-label="">D2</td>
            <td data-label="Filename"><input type="text"></td>
            <td data-label="Image Title"><input type="text"></td>
            <td data-label="Caption"><input type="text"></td>
            
          </tr>

          <tr v-for="(item) in tableRows" :key="item.id">
            <td scope="row" data-label="">D{{item.id}}</td>
            <td data-label="Filename"><input type="text" v-model="item.Filename"></td>
            <td data-label="Image Title"><input type="text" v-model="item.ImageTitle"></td>
            <td data-label="Caption"><input type="text" v-model="item.Caption"></td>
            
          </tr>
        </tbody>
      </table>
</div>

<div class="addrow">
  <a @click.stop="insert_Row" class="plus-icon">+</a>
  
</div>
        <div class="flex">

        <a href="/" class="button button--yellow button--form">Save </a>
        <input type="submit" name="submit" class="button button--yellow button--form">
      </div>
    </form>

  </div>
</template>

<script>
  export default {
  data() {
    return {
      
    tableRows: [
      {
        "id": 3,
        "Filename": "",
        "ImageTitle": "",
        "Caption": ""
      }
    ]
    }
  },
  methods: {
    insert_Row() {
      this.tableRows.push(
        {
        "id": this.tableRows.length+3,
        "Filename": "",
        "ImageTitle": "",
        "Caption": ""
      }
      )
    }
  }
}

</script>

<style lang="scss">
  .form {
    max-width: 80rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 3.2rem 0;
  }

.button.button--form {
    margin: 0.8rem 1.4rem .8rem 1.4rem;
    }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.6rem;
    width: 100%;

    &--date {
      display: inline-flex;
    }


    .select-container {
      margin-bottom: 1.6rem;
    }

    label {
      font-weight: bold;
    }

    textarea {
      border: 1px solid #999;
      margin-top: .8rem;
      margin-bottom: 1.6rem;
    }

    input,
    input[type="text"],
    input[type="date"],
    select {
      padding: .8rem 0;
      width: 100%;
    }

    input[type="date"] {
      max-width: 24rem;
    }

  }

  .input-wrapper--inline {
    display: flex;
    width: 100%;

    .input-wrapper:first-child {
      padding-right: 1.6rem;
    }
  }

  input[type="number"] {
    border: 1px solid #ccc;
    max-width: 4.8rem;
  }

  label[required],
  label[required="required"] {
    &:after {
      content: "*";
      margin-left: .8rem;
      color: red;

    }
  }

  .span--red {
    color:red;
  }

  .select-container {
    position: relative;
    border: 1px solid #000;

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
      color: #1d1b1b;
      width: 100%;
      padding-left: .8rem;
      padding-right: 3.2rem;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAR0lEQVQ4y2NgGAWDEUhgiKjgU57P8JnBBkUkmOE3UBQn6Gf4j6IFpPw/UJSBOC1EKEfWQqRyhBailcO0kKAcoqV/NI0NZgAAwCMdp/XzyoUAAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: 100% 50%;
    }
  }

  .form-table {
    margin-bottom: 1.6rem;
    width: 100%;

    input {
      border: 1px solid #ccc;
    }

    thead {
      border-bottom: 1px solid #000;

      tr {
        padding: .8rem 0;
        border-bottom: 0;
      }

      th {
        font-weight: bold;
      }
    }

    caption {
      background-color: $osa-blue;
      padding: .8rem;
      color: #fff;
      font-weight: bold;
    }

    th {
      text-align: left;
    }

    td,
    th {
      padding: .4rem;
      
    }



    tr {
      @media(max-width: $breakpoint-max-1023) {
        border-bottom: 1px solid #ccc;
        display: block;
        margin-bottom: .62em;
        padding-bottom: 1.6rem;
      }
    }

    td {
      @media(max-width: $breakpoint-max-1023) {
        display: block;
        font-size: .8em;
        text-align: right;
      }

      &:before {
        display: none;

        @media(max-width: $breakpoint-max-1023) {
          display: block;
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }

  }
    .addrow {
        border: 0 none;
   
    margin: 0 0 3rem 0;
   
    text-align: left;
    display: block;
    width: 100%;

        .plus-icon {
          margin-left: .4rem;
          border:1px solid cornflowerblue;
          background-color: cornflowerblue;
          color: #fff;
          text-align: center;
          padding: 0 .7rem;
          box-sizing: border-box;
          border-radius: 50%;
          transition: all ease-in-out .4s;
          &:hover, &:focus {
            border:1px solid #182241;
            background-color: #182241;
      
         }
        }
      }
  .group-headline {
    border-bottom: 1px solid #000;
    font-size: 2rem;
    font-weight: bold;
    color: $osa-blue;
    text-transform: uppercase;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
  }

  .radio-subtitle {
    font-weight: bold;
    color: $osa-blue;
    padding-bottom: .8rem;
  }

  .radio-group-header {
    padding-bottom: 1.6rem;

    &--border {
      border-bottom: 1px solid #000;
      padding-bottom: 1.6rem;
      margin-bottom: 1.6rem
    }

    .radio-group-headline {
      padding-bottom: 0;
    }
  }

  .grey-subtitle {
    color: #999;
    font-size: 1.4rem;
  }

  .radio-input-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .radio-input-wrapper {
      padding-bottom: 1.6rem;
      display: flex;

    }

    label {
      padding-right: .8rem;
      font-weight: normal;
    }

    input[type="radio"],
    input[type="checkbox"] {
      margin-right: 1.6rem;
      transform: scale(1.25);
      border-radius: 0;
    }

    &--half {
      flex-direction: row;

      .input-wrapper {
        flex: 1 0 50%;
        max-width: 50%;

        @media(max-width: $breakpoint-max-1023) {
          max-width: 100%;
          flex: 1 0 100%;
        }
      }
    }
  }

  .radio-container {
    border: 1px solid #000;
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    margin-right: 1.2rem;
    border-radius: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    input[type="radio"] {
      cursor: pointer;
      opacity: 0;
      position: absolute;
      left: 0;
      bottom: 0;

      +.radio-dot {
        display: none;
      }

      &:checked {
        +.radio-dot {
          display: block;
          border-radius: 100%;
          width: 1.4rem;
          height: 1.4rem;
          background-color: #000;
        }
      }
    }
  }

  .checkbox-container {
    border: 1px solid #000;
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    margin-right: 1.2rem;

    input[type="checkbox"] {
      cursor: pointer;
      opacity: 0;
      position: absolute;
      left: 0;
      bottom: 0;

      + input[type="hidden"] + .checkmark {
        display: none;
      }

      &:checked + input[type="hidden"] + .checkmark {
       
          display: block;
          font-weight: bold;
       
      }
    }
  }

  .total-row {
    input[type=text] {
      border: 0;
    }
    td, input {
      font-weight: 700;
    }
  }

  .file-table {
    th {
      padding-bottom: 1.6rem;
    }
    td {
      padding: 1.6rem .4rem .4rem;
    }
  }

  .table-wrapper {
    overflow: auto;
    width: 100%;
  }

</style>
