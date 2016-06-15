#!/usr/bin/env node

var fs = require('fs');
var slug = require('slug');
var _ = require('lodash');

var content = fs.readFileSync('./addition-raw.json', 'utf-8');
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
  if (str === 0) {
    return [];
  }

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

  // if (company.team_size) {
  //   company.team_size = Number(company.team_size.replace(/\D/g, ''));
  // }

  // if (company.remote_worker_percentage) {
  //   company.remote_worker_percentage = Number(company.remote_worker_percentage.replace(/\%/g, ''));
  // }

  if (company.technologies === 0 ||
    (company.technologies && !_.isArray(company.technologies))) {
    company.technologies = makeArray(company.technologies);
  }
  if (company.communication_methods === 0 ||
    (company.communication_methods && !_.isArray(company.communication_methods))) {
    company.communication_methods = makeArray(company.communication_methods);
  }
  if (company.collaboration_methods === 0 ||
    (company.collaboration_methods && !_.isArray(company.collaboration_methods))) {
    company.collaboration_methods = makeArray(company.collaboration_methods);
  }
  if (company.official === undefined) {
    company.official = false;
  }
  if (company.asynchronous_collaboration === undefined) {
    company.asynchronous_collaboration = false;
  }
  if (company.note === 0) {
    company.note = '';
  }
  if (company.sex_ratio === 0) {
    company.sex_ratio = '';
  }

  if (company.short_description.length > 70) {
    delete company.short_description;
  }

  company.team_size = (company.remote_team_size || 0) + (company.non_remote_team_size || 0);
  delete company.remote_team_size;
  delete company['What is your general salary range?'];

  _.forOwn(company, function (val, key) {
    if (val === 'YES') {
      company[key] = true;
    }
    if (val === 'NO') {
      company[key] = false;
    }
    if (val === 0 && !_.includes(['non_remote_team_size', 'salary_lower_bound', 'salary_upper_bound', 'note', 'sex_ratio', 'family_leave', 'num_retreats_per_year', 'founded_year'], key)) {
      company[key] = false;
    }
    if (val === 1) {
      company[key] = true;
    }
  });

  company.logo_url = `/images/companies/${company.slug.replace(/\-/g, '_')}.png`;
  company.logo_file_name = company.slug.replace(/\-/g, '_');

  return company;
});

fs.writeFileSync('./addition.json', JSON.stringify(data, null, 2));
