import yaml from 'js-yaml';
//import fs from 'fs';

export class Parsing {
    json(data) {
        return JSON.parse(data);
    }
    yaml(data) {
        return yaml.load(data);
    }
}