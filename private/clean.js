#!/usr/bin/env node

var fs = require('fs');

var content = fs.readFileSync('./seed.json', 'utf-8');
var data = JSON.parse(content);


data.map(company => {
  if (!company.short_description) {
    company.short_description = 'No description found';
  }
});

// data.map(company => {
//   if (company.technologies === undefined || company.technologies === 0) {
//     company.technologies = [];
//   }
//   if (company.communication_methods === undefined || company.communication_methods === 0) {
//     company.communication_methods = [];
//   }
//   if (company.collaboration_methods === undefined || company.collaboration_methods === 0) {
//     company.collaboration_methods = [];
//   }
//
//
//   company.technologies = company.technologies.map(tech => {
//     var corrections = [
//       {
//         regex: /react/i,
//         value: 'ReactJS'
//       },
//       {
//         regex: /nginx/i,
//         value: 'nginx'
//       },
//       {
//         regex: /ruby on rails/i,
//         value: 'Ruby on Rails'
//       },
//       {
//         regex: /rails/i,
//         value: 'Ruby on Rails'
//       },
//       {
//         regex: /javascript/i,
//         value: 'JavaScript',
//       },
//       {
//         regex: /node/i,
//         value: 'Node.js',
//       },
//       {
//         regex: /mongo/i,
//         value: 'MongoDB',
//       },
//       {
//         regex: /mysql/i,
//         value: 'MySQL',
//       },
//       {
//         regex: /php/i,
//         value: 'PHP',
//       },
//       {
//         regex: /amazon/i,
//         value: 'AWS',
//       },
//     ];
//
//     for (var i = 0; i < corrections.length; i++) {
//       if (corrections[i].regex.test(tech)) {
//         return corrections[i].value;
//       }
//     }
//
//     return tech;
//   });
//
//   company.communication_methods = company.communication_methods.map(comm_method => {
//     var corrections = [
//       {
//         regex: /slack/i,
//         value: 'Slack'
//       },
//       {
//         regex: /google/i,
//         value: 'Google Apps'
//       },
//       {
//         regex: /email/i,
//         value: 'Email'
//       },
//       {
//         regex: /skype/i,
//         value: 'Skype'
//       },
//       {
//         regex: /hipchat/i,
//         value: 'HipChat'
//       },
//       {
//         regex: /flowdock/i,
//         value: 'FlowDock'
//       },
//     ];
//
//     for (var i = 0; i < corrections.length; i++) {
//       if (corrections[i].regex.test(comm_method)) {
//         return corrections[i].value;
//       }
//     }
//
//     return comm_method;
//   });
//
//
//   company.collaboration_methods = company.collaboration_methods.map(collab_method => {
//     var corrections = [
//       {
//         regex: /blossom/i,
//         value: 'Blossom'
//       },
//       {
//         regex: /dropbox/i,
//         value: 'DropBox'
//       },
//       {
//         regex: /drive/i,
//         value: 'Google Drive'
//       }
//     ];
//
//     for (var i = 0; i < corrections.length; i++) {
//       if (corrections[i].regex.test(collab_method)) {
//         return corrections[i].value;
//       }
//     }
//
//     return collab_method;
//   });
//
// });

fs.writeFileSync('./seed-filtered.json', JSON.stringify(data, null, 2));
