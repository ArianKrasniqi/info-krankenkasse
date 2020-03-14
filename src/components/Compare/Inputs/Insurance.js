import React from "react"

import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const insurance = () => (
  <FormControl style={{ width: "100%" }}>
    <InputLabel id="demo-simple-select-helper-label">
      Aktuelle Krankenkasse
    </InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={""}
      // onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={"Vorgeburt"}>- Vorgeburt</MenuItem>
      <MenuItem value={"AMB"}>AMB</MenuItem>
      <MenuItem value={"Agrisano"}>Agrisano</MenuItem>
      <MenuItem value={"Aquilana"}>Aquilana</MenuItem>
      <MenuItem value={"Arcosana"}>Arcosana</MenuItem>
      <MenuItem value={"Assura"}>Assura</MenuItem>
      <MenuItem value={"Atupri"}>Atupri</MenuItem>
      <MenuItem value={"Avanex"}>Avanex</MenuItem>
      <MenuItem value={"Avenir"}>Avenir</MenuItem>
      <MenuItem value={"Birchmeier"}>Birchmeier</MenuItem>
      <MenuItem value={"CSS"}>CSS Krankenkasse</MenuItem>
      <MenuItem value={"Compact"}>Compact</MenuItem>
      <MenuItem value={"Concordia"}>Concordia</MenuItem>
      <MenuItem value={"ÖKK"}>ÖKK</MenuItem>
      <MenuItem value={"EGK"}>EGK</MenuItem>
      <MenuItem value={"EasySana"}>Easy Sana</MenuItem>
      <MenuItem value={"Einsiedeln"}>Einsiedeln</MenuItem>
      <MenuItem value={"Flaachtal"}>Flaachtal</MenuItem>
      <MenuItem value={"Galenos"}>Galenos</MenuItem>
      <MenuItem value={"Glarner"}>Glarner Krankenkasse</MenuItem>
      <MenuItem value={"GroupeMutuel"}>Groupe Mutuel</MenuItem>
      <MenuItem value={"Helsana"}>Helsana</MenuItem>
      <MenuItem value={"Ingenbohl"}>Ingenbohl</MenuItem>
      <MenuItem value={"Innova"}>Innova</MenuItem>
      <MenuItem value={"Intras"}>Intras</MenuItem>
      <MenuItem value={"KPT / CPT"}>KPT / CPT</MenuItem>
      <MenuItem value={"Klug"}>Klug</MenuItem>
      <MenuItem value={"Kmu"}>Kmu</MenuItem>
      <MenuItem value={"Kolping"}>Kolping</MenuItem>
      <MenuItem value={"Lumneziana"}>Lumneziana</MenuItem>
      <MenuItem value={"LuzernerHinterland"}>Luzerner Hinterland</MenuItem>
      <MenuItem value={"Philos"}>Philos</MenuItem>
      <MenuItem value={"Progrès"}>Progrès</MenuItem>
      <MenuItem value={"Provita"}>Provita</MenuItem>
      <MenuItem value={"Rhenusana"}>Rhenusana</MenuItem>
      <MenuItem value={"SLKK"}>SLKK</MenuItem>
      <MenuItem value={"Sana24"}>Sana24</MenuItem>
      <MenuItem value={"Sanagate"}>Sanagate</MenuItem>
      <MenuItem value={"Sanavals"}>Sanavals</MenuItem>
      <MenuItem value={"Sanitas"}>Sanitas</MenuItem>
      <MenuItem value={"Sansan"}>Sansan</MenuItem>
      <MenuItem value={"Simplon"}>Simplon</MenuItem>
      <MenuItem value={"Sodalis"}>Sodalis</MenuItem>
      <MenuItem value={"Steffisburg"}>Steffisburg</MenuItem>
      <MenuItem value={"Stoffel"}>Stoffel</MenuItem>
      <MenuItem value={"Sumiswalder"}>Sumiswalder</MenuItem>
      <MenuItem value={"Supra"}>Supra</MenuItem>
      <MenuItem value={"Swica"}>Swica</MenuItem>
      <MenuItem value={"Sympany"}>Sympany</MenuItem>
      <MenuItem value={"Turbenthal"}>Turbenthal</MenuItem>
      <MenuItem value={"Visana"}>Visana</MenuItem>
      <MenuItem value={"Wädenswil"}>Wädenswil</MenuItem>
    </Select>
    <FormHelperText>Some important helper text</FormHelperText>
  </FormControl>
)

export default insurance
