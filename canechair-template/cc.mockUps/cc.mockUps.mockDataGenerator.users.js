import JsonSchemaFaker from 'json-schema-faker';
import { schema } from '../cc.mockUps/cc.mockUps.DataSchema.user';
import fs from 'fs';
import Chalk from 'chalk';

const json = JSON.stringify(JsonSchemaFaker(schema));
console.log(json);
fs.writeFile("./cc.mockUps/mockData.users.json", json, function (err) {
  if (err) {
    return console.log(Chalk.red(err));
  } else {
    console.log(Chalk.green("Mock data generated."));
  }
});


