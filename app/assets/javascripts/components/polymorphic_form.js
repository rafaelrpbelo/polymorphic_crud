var CarTemplate = {
  template: `
    <div>
      <h3>Register a car</h3>
      <form action='/' method='get'>
        <label for='status_new'>new</label><br />
        <input type='checkbox' id='status_new' name='status' value='new'/>
        <label for='status_used'>used</label><br />
        <input type='checkbox' id='status_used' name='status' value='used'/>

        <label for='brand'>Brand</label><br />
        <input type='text' id='brand'/><br />

        <label for='model'>Model</label><br />
        <input type='text' id='model'/><br />

        <label for='version'>Version</label><br />
        <input type='text' id='version'/><br />

        <label for='year'>Year</label><br />
        <input type='text' id='year'/><br />

        <label for='transmission'>Transmission</label><br />
        <select id='transmission'>
          <option value=''>Select</option>
          <option value='automatic'>Automatic</option>
          <option value='manual'>Manual</option>
          <option value='other'>Other</option>
        </select>

        <label for='fuel'>Fuel</label><br />
        <select id='fuel'>
          <option value=''>Select</option>
          <option value='flex'>Flex</option>
          <option value='gasoline'>Gasoline</option>
          <option value='alcohol'>Alcohol</option>
          <option value='diesel'>Diesel</option>
          <option value='electric'>Electric</option>
          <option value='gasoline-hibrid'>Gasoline - Hibrid</option>
        </select>

        <label for='doors'>Doors</label><br />
        <select name='doors' id='doors'>
          <option value=''>Select</option>
          <option value='2'>2</option>
          <option value='4'>4</option>
        </select>

        <label for='end_license_plate'>End license plate</label><br />
        <input type='text' name='end_license_plate' id='end_license_plate' maxlength='1'/><br />

        <label for='price'>Price</label><br />
        <input type='text' name='price' id='price'/><br />
      </form>
    </div>
  `
}

var TruckTemplate = {
  template: `
    <div>
      <h3>Register a truck</h3>
      <form action='/' method='get'>
        <label for='field2'>Field 2</label><br />
        <input type='checkbox' id='field2' value='Option 1' />
      </form>
    </div>
  `
}

var MotorcycleTemplate = {
  template: `
    <div>
      <h3>Register a motorcycle</h3>
      <form action='/' method='get'>
        <label for='field2'>Field 2</label><br />
        <input type='checkbox' id='field2' value='Option 1' />
      </form>
    </div>
  `
}

var BoatTemplate = {
  template: `
    <div>
      <h3>Register a boat</h3>
      <form action='/' method='get'>
        <label for='field2'>Field 2</label><br />
        <input type='checkbox' id='field2' value='Option 1' />

        <label for='brand'>Brand</label><br />
        <input type='text' id='brand' />
      </form>
    </div>
  `
}

new Vue({
  el: '#dynamic-form',
  data: () => {
    return { currentForm: 'car' }
  },
  components: {
    car: CarTemplate,
    motorcycle: MotorcycleTemplate
  }
});
