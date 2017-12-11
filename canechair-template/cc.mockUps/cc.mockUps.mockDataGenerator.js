import JsonSchemaFaker from 'json-schema-faker';
import { mockUserDataSchema } from '../cc.mockUps/cc.mockUps.mockUserDataSchema';
import fs from 'fs';
import Chalk from 'chalk';

const json = JSON.stringify(mockUserDataSchema);
fs.writeFile("./cc.mockUps/mockDatabase.json", json, function (err) {
  if (err) {
    return console.log(Chalk.red(err));
  } else {
    console.log(Chalk.green("Mock data generated."));
  }
});

