#!/usr/bin/env node

var fs = require('fs');
var slug = require('slug');
var _ = require('lodash');

var content = fs.readFileSync('./seed-batch2.json', 'utf-8');
var data = JSON.parse(content);

function dollarToNumber(dollar) {
  var output = dollar;
  if (output.charAt(0) === '$') {
    output = output.substr(1);
  }

  output = output.replace(',', '');
  output = output.replace(/\.00/, '');

  return output;
}

function makeArray(str) {
  var arr = str.split(',').map(function (elm) {
    var output = elm;

    output = output.replace(/"/g, '');
    output = output.trim();
    return output;
  });

  return arr;
}

data.map(company => {
  company.slug = slug(_.lowerCase(company.name));

  if (company.salary_lower_bound) {
    company.salary_lower_bound = Number(dollarToNumber(company.salary_lower_bound));
  }
  if (company.salary_upper_bound) {
    company.salary_upper_bound = Number(dollarToNumber(company.salary_upper_bound));
  }

  if (company.team_size) {
    company.team_size = Number(company.team_size.replace(/\D/g, ''));
  }

  if (company.remote_worker_percentage) {
    company.remote_worker_percentage = Number(company.remote_worker_percentage.replace(/\%/g, ''));
  }

  if (company.technologies && typeof company.technologies === 'string' ) {
    company.technologies = makeArray(company.technologies);
  }
  if (company.communication_methods && typeof company.communication_methods === 'string' ) {
    company.communication_methods = makeArray(company.communication_methods);
  }
  if (company.collaboration_methods && typeof company.collaboration_methods === 'string' ) {
    company.collaboration_methods = makeArray(company.collaboration_methods);
  }

  _.forOwn(company, function (val, key) {
    if (val === 'YES') {
      company[key] = true;
    }
    if (val === 'NO') {
      company[key] = false;
    }
  });

  company.logo_url = `/images/companies/${company.slug.replace(/\-/g, '_')}.png`;
  company.logo_file_name = company.slug.replace(/\-/g, '_');

  return company;
});

fs.writeFileSync('./seed2.json', JSON.stringify(data, null, 2));
