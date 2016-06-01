import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import qs from 'qs';

export function pathFor(pathName, params) {
  let query = params && params.query ? qs.parse( params.query ) : {};

  return FlowRouter.path(pathName, params, query);
}

export function urlFor(pathName, params) {
  let path = pathFor(pathName, params);
  path = path.slice(1); // remove the leading '/'
  return Meteor.absoluteUrl(path);
}
